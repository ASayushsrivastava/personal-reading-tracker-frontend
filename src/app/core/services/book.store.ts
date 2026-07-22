import { Injectable, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Observable, shareReplay, tap } from 'rxjs';
import { Book, BookRequest, progressPercent, toBookRequest } from '../models/book.model';
import { ReadingStatus } from '../models/reading-status.enum';
import { DashboardStats } from '../models/dashboard.model';
import { BookApiService } from './book-api.service';

/**
 * Single source of truth for book data, provided in root so it's a true
 * singleton — but because nothing eagerly injects it, it only spins up
 * (and fires its first HTTP call) the moment a lazy-loaded route actually
 * needs it. That's the "efficient loading" half of the brief: one GET
 * /api/books per session, not one per widget.
 *
 * Data loading uses `rxResource` (signals-based, @angular/core/rxjs-interop).
 * It gives you `.value()`, `.isLoading()`, `.error()` and `.reload()` for
 * free, reactive to any signal read inside `request()`.
 */
@Injectable({ providedIn: 'root' })
export class BookStore {
  private readonly api = inject(BookApiService);

  /** Bump to force a refetch (e.g. after a failed optimistic update). */
  private readonly refreshTick = signal(0);

  readonly booksResource = rxResource({
    request: () => ({ tick: this.refreshTick() }),
    loader: () => this.api.getAll(),
  });

  readonly books = computed<Book[]>(() => this.booksResource.value() ?? []);
  readonly isLoading = computed(() => this.booksResource.isLoading());
  readonly loadError = computed(() => this.booksResource.error());

  // ---- search / filter (client-side — a personal library is small enough
  // that shipping the full list once and filtering in memory beats a round
  // trip per keystroke; see DashboardApiService for the alternative). ----

  readonly searchQuery = signal('');
  readonly statusFilter = signal<ReadingStatus | null>(null);

  readonly filteredBooks = computed<Book[]>(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const status = this.statusFilter();
    return this.books().filter((book) => {
      if (status && book.status !== status) return false;
      if (!query) return true;
      return (
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        (book.genre ?? '').toLowerCase().includes(query)
      );
    });
  });

  /** Derived, not fetched — one network call feeds every widget below. */
  readonly stats = computed<DashboardStats>(() => {
    const list = this.books();
    return {
      totalBooks: list.length,
      currentlyReading: list.filter((b) => b.status === ReadingStatus.Reading).length,
      toRead: list.filter((b) => b.status === ReadingStatus.ToRead).length,
      completed: list.filter((b) => b.status === ReadingStatus.Completed).length,
      abandoned: list.filter((b) => b.status === ReadingStatus.Abandoned).length,
    };
  });

  readonly continueReading = computed(() =>
    this.books()
      .filter((b) => b.status === ReadingStatus.Reading)
      .sort((a, b) => (b.dateStarted ?? '').localeCompare(a.dateStarted ?? '')),
  );

  readonly recentlyAdded = computed(() =>
    [...this.books()]
      .sort((a, b) => (b.dateAdded ?? '').localeCompare(a.dateAdded ?? ''))
      .slice(0, 10),
  );

  readonly recentlyCompleted = computed(() =>
    this.books()
      .filter((b) => b.status === ReadingStatus.Completed)
      .sort((a, b) => (b.dateCompleted ?? '').localeCompare(a.dateCompleted ?? ''))
      .slice(0, 10),
  );

  bookById(id: number) {
    return computed(() => this.books().find((b) => b.id === id) ?? null);
  }

  refresh(): void {
    this.refreshTick.update((n) => n + 1);
  }

  /** Local-first mutation: patch the cached list immediately so the UI reacts in the same frame as the click. */
  private patchLocal(id: number, patch: Partial<Book>): void {
    this.booksResource.value.update((list) =>
      (list ?? []).map((b) => (b.id === id ? { ...b, ...patch } : b)),
    );
  }

  /**
   * Sends a full BookRequest (merged from the book's current known state
   * plus `patch`) — the backend's PUT replaces the whole record, so partial
   * bodies would blank out every field not included. Patches the cache
   * optimistically for instant feedback, then reconciles with whatever the
   * server actually persisted (it may auto-fill dateStarted/dateCompleted
   * on status transitions), rolling back to a full refetch on failure.
   */
  private updateBook(id: number, patch: Partial<BookRequest>, optimistic: Partial<Book> = {}): void {
    const book = this.books().find((b) => b.id === id);
    if (!book) return;

    this.patchLocal(id, optimistic);
    const request = toBookRequest(book, patch);
    this.api.update(id, request).subscribe({
      next: (updated) => this.patchLocal(id, updated),
      error: () => this.refresh(),
    });
  }

  updateStatus(id: number, status: ReadingStatus): void {
    const book = this.books().find((b) => b.id === id);
    if (!book) return;

    const currentPage =
      status === ReadingStatus.Completed && book.totalPages
        ? book.totalPages
        : status === ReadingStatus.ToRead
          ? 0
          : book.currentPage;

    this.updateBook(id, { status, currentPage }, { status, currentPage });
  }

  updateProgress(id: number, currentPage: number): void {
    const book = this.books().find((b) => b.id === id);
    if (!book) return;

    const clamped = book.totalPages ? Math.max(0, Math.min(book.totalPages, currentPage)) : Math.max(0, currentPage);
    const status =
      clamped <= 0
        ? ReadingStatus.ToRead
        : book.totalPages && clamped >= book.totalPages
          ? ReadingStatus.Completed
          : ReadingStatus.Reading;

    this.updateBook(id, { currentPage: clamped, status }, { currentPage: clamped, status });
  }

  updateRating(id: number, rating: number): void {
    this.updateBook(id, { rating }, { rating });
  }

  updateNotes(id: number, notes: string): void {
    this.updateBook(id, { notes }, { notes });
  }

  /**
   * Full add/edit via the book form — sends every field the person set, not
   * a partial patch. Returns a hot-shared Observable so the form component
   * can subscribe for its own loading/success/error handling without
   * triggering a second HTTP call; the cache update happens here via tap
   * regardless of whether the caller subscribes more than once.
   */
  saveBook(request: BookRequest, id?: number): Observable<Book> {
    const request$ = id ? this.api.update(id, request) : this.api.create(request);
    return request$.pipe(
      tap((saved) => {
        this.booksResource.value.update((list) => {
          const current = list ?? [];
          return id ? current.map((b) => (b.id === id ? saved : b)) : [...current, saved];
        });
      }),
      shareReplay(1),
    );
  }

  removeBook(id: number): void {
    const previous = this.books();
    this.booksResource.value.update((list) => (list ?? []).filter((b) => b.id !== id));
    this.api.delete(id).subscribe({ error: () => this.booksResource.value.set(previous) });
  }
}

import { Injectable, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Book } from '../models/book.model';
import { Collection, CollectionCreateRequest } from '../models/collection.model';
import { CollectionApiService } from './collection-api.service';

/**
 * Same lazy-singleton + rxResource pattern as BookStore. Only the
 * /collections route (and the "add to collection" control in the book
 * drawer) pulls this in, so a session that never touches collections never
 * fetches this list. Each Collection comes back from the API with its
 * member books embedded (see CollectionResponse), so membership is read
 * from `collection.books`, not stored on Book.
 */
@Injectable({ providedIn: 'root' })
export class CollectionStore {
  private readonly api = inject(CollectionApiService);
  private readonly refreshTick = signal(0);

  readonly collectionsResource = rxResource({
    request: () => ({ tick: this.refreshTick() }),
    loader: () => this.api.getAll(),
  });

  readonly collections = computed<Collection[]>(() => this.collectionsResource.value() ?? []);
  readonly isLoading = computed(() => this.collectionsResource.isLoading());

  /** Ids of collections a given book currently belongs to — handy for the drawer's membership toggles. */
  collectionIdsForBook(bookId: number) {
    return computed(() =>
      this.collections()
        .filter((c) => c.books.some((b) => b.id === bookId))
        .map((c) => c.id),
    );
  }

  refresh(): void {
    this.refreshTick.update((n) => n + 1);
  }

  private patchLocal(id: number, patch: Partial<Collection>): void {
    this.collectionsResource.value.update((list) =>
      (list ?? []).map((c) => (c.id === id ? { ...c, ...patch } : c)),
    );
  }

  addCollection(payload: CollectionCreateRequest): void {
    this.api.create(payload).subscribe({
      next: (created) =>
        this.collectionsResource.value.update((list) => [...(list ?? []), created]),
      error: () => this.refresh(),
    });
  }

  renameCollection(id: number, name: string): void {
    this.patchLocal(id, { name });
    this.api.rename(id, name).subscribe({ error: () => this.refresh() });
  }

  removeCollection(id: number): void {
    const previous = this.collections();
    this.collectionsResource.value.update((list) => (list ?? []).filter((c) => c.id !== id));
    this.api.delete(id).subscribe({ error: () => this.collectionsResource.value.set(previous) });
  }

  addBookToCollection(collectionId: number, book: Book): void {
    const collection = this.collections().find((c) => c.id === collectionId);
    if (!collection || collection.books.some((b) => b.id === book.id)) return;

    this.patchLocal(collectionId, {
      books: [...collection.books, book],
      bookCount: collection.bookCount + 1,
    });
    this.api.addBook(collectionId, book.id).subscribe({
      next: (updated) => this.patchLocal(collectionId, updated),
      error: () => this.refresh(),
    });
  }

  removeBookFromCollection(collectionId: number, bookId: number): void {
    const collection = this.collections().find((c) => c.id === collectionId);
    if (!collection) return;

    this.patchLocal(collectionId, {
      books: collection.books.filter((b) => b.id !== bookId),
      bookCount: Math.max(0, collection.bookCount - 1),
    });
    this.api.removeBook(collectionId, bookId).subscribe({ error: () => this.refresh() });
  }
}

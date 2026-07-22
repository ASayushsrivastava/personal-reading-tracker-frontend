import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BookStore } from '../../core/services/book.store';
import { Book } from '../../core/models/book.model';
import { READING_STATUS_OPTIONS } from '../../core/models/reading-status.enum';
import { HeroShelfComponent } from './components/hero-shelf.component';
import { StatsStripComponent } from './components/stats-strip.component';
import { BookRailComponent } from './components/book-rail.component';
import { QuickAddComponent } from './components/quick-add.component';
import { BookDrawerComponent } from '../../shared/book-drawer/book-drawer.component';
import { BookFormComponent, BookFormState } from '../../shared/book-form/book-form.component';

@Component({
  selector: 'app-shelf-page',
  imports: [
    FormsModule,
    SkeletonModule,
    InputTextModule,
    ButtonModule,
    HeroShelfComponent,
    StatsStripComponent,
    BookRailComponent,
    QuickAddComponent,
    BookDrawerComponent,
    BookFormComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-shell">
      <div class="hero-head">
        <div>
          <h1>Every book you've opened, <em>lit</em> and lined up.</h1>
          <p class="sub">Click a spine to update status, progress, or rating in one motion.</p>
        </div>
        <app-quick-add (add)="onQuickAdd($event)" />
      </div>

      @if (store.isLoading() && store.books().length === 0) {
        <p-skeleton height="340px" borderRadius="6px" />
      } @else if (store.books().length === 0) {
        <div class="empty-shelf">
          <p>Your shelf is empty. Type a title above and press Enter to add your first book.</p>
        </div>
      } @else {
        <div class="filters">
          <span class="search">
            <input
              pInputText
              type="text"
              [ngModel]="store.searchQuery()"
              (ngModelChange)="store.searchQuery.set($event)"
              placeholder="Search title, author, genre…"
            />
          </span>
          <div class="chips">
            <button
              pButton
              type="button"
              label="All"
              [class.p-button-outlined]="store.statusFilter() !== null"
              class="p-button-sm"
              (click)="store.statusFilter.set(null)"
            ></button>
            @for (opt of statusOptions; track opt.value) {
              <button
                pButton
                type="button"
                [label]="opt.label"
                [class.p-button-outlined]="store.statusFilter() !== opt.value"
                class="p-button-sm"
                (click)="store.statusFilter.set(opt.value)"
              ></button>
            }
          </div>
        </div>

        @if (store.filteredBooks().length === 0) {
          <div class="empty-shelf"><p>No books match that search.</p></div>
        } @else {
          <app-hero-shelf
            [books]="store.filteredBooks()"
            [activeId]="activeBookId()"
            (spineClick)="open($event)"
          />
        }
      }

      <app-stats-strip [stats]="store.stats()" />

      <section class="section">
        <h2>Continue reading</h2>
        <app-book-rail
          variant="continue"
          [books]="store.continueReading()"
          emptyLabel="Nothing in progress. Pull a spine off the shelf above to start one."
          (openBook)="open($event)"
          (bumpProgress)="bump($event)"
        />
      </section>

      @if (store.recentlyCompleted().length > 0) {
        <section class="section">
          <h2>Recently finished</h2>
          <app-book-rail variant="completed" [books]="store.recentlyCompleted()" (openBook)="open($event)" />
        </section>
      }

      <section class="section">
        <h2>Recently added</h2>
        <app-book-rail
          variant="added"
          [books]="store.recentlyAdded()"
          emptyLabel="Nothing added yet."
          (openBook)="open($event)"
        />
      </section>
    </div>

    <app-book-drawer
      [bookId]="activeBookId()"
      (closed)="close()"
      (editRequested)="editBook($event)"
    />
    <app-book-form [state]="formState()" (closed)="formState.set(null)" />
  `,
  styles: `
    .app-shell { max-width: 1180px; margin: 0 auto; padding: 40px 28px 100px; }
    .hero-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 24px;
      margin-bottom: 28px;
      flex-wrap: wrap;
    }
    .hero-head h1 {
      font-family: 'Fraunces', serif;
      font-weight: 600;
      font-size: clamp(26px, 3.4vw, 36px);
      margin: 0;
    }
    .hero-head h1 em { color: var(--bs-brass); font-style: italic; }
    .sub { color: var(--bs-text-dim); font-size: 14px; margin-top: 8px; max-width: 380px; }
    .filters {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      margin-bottom: 14px;
      flex-wrap: wrap;
    }
    .search input {
      width: 260px;
      max-width: 60vw;
    }
    .chips { display: flex; gap: 8px; flex-wrap: wrap; }
    .empty-shelf {
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border: 1px dashed var(--bs-hairline);
      border-radius: 6px;
      color: var(--bs-text-faint);
      font-size: 14px;
      padding: 24px;
    }
    .section { margin-top: 48px; }
    .section h2 { font-family: 'Fraunces', serif; font-size: 19px; margin: 0 0 16px; }
  `,
})
export class ShelfPageComponent {
  protected readonly store = inject(BookStore);
  protected readonly statusOptions = READING_STATUS_OPTIONS;

  /**
   * Bound automatically from the `book/:id` route param via
   * provideRouter(routes, withComponentInputBinding()) — no ActivatedRoute
   * boilerplate needed. On `/` this stays undefined and the drawer opens
   * only from spine clicks instead.
   */
  readonly id = input<string | undefined>(undefined);

  protected readonly activeBookId = signal<number | null>(null);
  protected readonly formState = signal<BookFormState | null>(null);

  constructor() {
    effect(() => {
      const routeId = this.id();
      if (routeId !== undefined) this.activeBookId.set(Number(routeId));
    });
  }

  protected open(bookId: number): void {
    this.activeBookId.set(bookId);
  }

  protected close(): void {
    this.activeBookId.set(null);
  }

  protected bump(book: Book): void {
    const next = book.totalPages ? Math.min(book.totalPages, book.currentPage + 10) : book.currentPage + 10;
    this.store.updateProgress(book.id, next);
  }

  /** Quick-add only captures a title — hand off to the full form so author (required by the API) and everything else gets filled in properly, instead of silently defaulting the author. */
  protected onQuickAdd(title: string): void {
    this.formState.set({ mode: 'add', initialTitle: title });
  }

  protected editBook(book: Book): void {
    this.formState.set({ mode: 'edit', book });
  }
}

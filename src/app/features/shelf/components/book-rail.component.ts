import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Book, progressPercent } from '../../../core/models/book.model';

export type BookRailVariant = 'continue' | 'added' | 'completed';

function formatDate(iso: string | null): string {
  if (!iso) return '';
  const date = new Date(iso);
  const now = new Date();
  const opts: Intl.DateTimeFormatOptions =
    date.getFullYear() === now.getFullYear() ? { month: 'short', day: 'numeric' } : { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString(undefined, opts);
}

/**
 * One card layout, three meanings — 'continue' shows a progress bar and a
 * +10 pages shortcut, 'added' and 'completed' swap that for the relevant
 * date. Avoids three near-identical rail components for what's really one
 * "row of book cards" pattern used across the shelf page.
 */
@Component({
  selector: 'app-book-rail',
  imports: [ButtonModule, ProgressBarModule, RatingModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rail">
      @for (book of books(); track book.id) {
        <div class="cr-card">
          <div class="cr-title" (click)="openBook.emit(book.id)">{{ book.title }}</div>
          <div class="cr-author" (click)="openBook.emit(book.id)">{{ book.author }}</div>

          @if (variant() === 'continue') {
            <p-progressBar [value]="pct(book)" [showValue]="false" styleClass="cr-bar" />
            <div class="cr-meta">
              <span>{{ book.currentPage }}/{{ book.totalPages ?? '?' }}p</span>
              <span>{{ pct(book) }}%</span>
            </div>
            <button
              pButton
              type="button"
              label="+10 pages"
              class="p-button-sm p-button-text cr-bump"
              (click)="bumpProgress.emit(book)"
            ></button>
          } @else if (variant() === 'completed') {
            <p-rating [ngModel]="book.rating ?? 0" [readonly]="true" [stars]="5" styleClass="cr-rating" />
            <div class="cr-meta"><span>Finished {{ formatDate(book.dateCompleted) }}</span></div>
          } @else {
            <div class="cr-meta"><span>{{ book.genre || 'Uncategorized' }}</span></div>
            <div class="cr-meta"><span>Added {{ formatDate(book.dateAdded) }}</span></div>
          }
        </div>
      } @empty {
        <p class="empty">{{ emptyLabel() }}</p>
      }
    </div>
  `,
  styles: `
    .rail { display: flex; gap: 14px; overflow-x: auto; padding-bottom: 6px; }
    .cr-card {
      flex: 0 0 240px;
      background: var(--bs-ink-2);
      border: 1px solid var(--bs-hairline);
      border-radius: 6px;
      padding: 16px;
    }
    .cr-title {
      font-family: 'Fraunces', serif;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cr-author { font-size: 12px; color: var(--bs-text-dim); margin-top: 3px; cursor: pointer; }
    .cr-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 6px;
      font-size: 11px;
      color: var(--bs-text-faint);
      font-family: 'IBM Plex Mono', monospace;
    }
    .cr-bump { width: 100%; margin-top: 10px; }
    .empty { color: var(--bs-text-faint); font-size: 13px; }
    :host ::ng-deep .cr-bar { height: 4px; margin-top: 14px; }
    :host ::ng-deep .cr-bar .p-progressbar-value { background: var(--bs-brass-bright); }
    :host ::ng-deep .cr-rating { margin-top: 10px; }
    :host ::ng-deep .cr-rating .p-rating-icon { font-size: 13px; color: var(--bs-brass-bright); }
  `,
})
export class BookRailComponent {
  readonly books = input.required<Book[]>();
  readonly variant = input<BookRailVariant>('continue');
  readonly emptyLabel = input('Nothing here yet.');
  readonly openBook = output<number>();
  readonly bumpProgress = output<Book>();

  protected pct(book: Book): number {
    return progressPercent(book);
  }

  protected formatDate(iso: string | null): string {
    return formatDate(iso);
  }
}

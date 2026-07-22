import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DrawerModule } from 'primeng/drawer';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmationService } from 'primeng/api';
import { BookStore } from '../../core/services/book.store';
import { CollectionStore } from '../../core/services/collection.store';
import { READING_STATUS_COLOR_VAR, READING_STATUS_OPTIONS } from '../../core/models/reading-status.enum';
import { Book, progressPercent } from '../../core/models/book.model';

function formatDate(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

/**
 * Self-contained quickview: takes only a bookId and reads/writes straight
 * through BookStore, so it can be dropped into the shelf page, the
 * collections page, or a future search-results page without prop drilling.
 * Status/progress/rating/notes patch the local cache immediately — the
 * drawer never waits on a round trip to reflect those. Editing the rest of
 * the record (genre, cover, dates, title/author) hands off to the full
 * BookFormComponent via `editRequested`, since those aren't one-click edits.
 */
@Component({
  selector: 'app-book-drawer',
  imports: [
    FormsModule,
    DrawerModule,
    SelectButtonModule,
    SliderModule,
    RatingModule,
    TextareaModule,
    ButtonModule,
    CheckboxModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-drawer
      [visible]="visible()"
      (visibleChange)="onVisibleChange($event)"
      position="right"
      styleClass="bs-drawer"
      [style]="{ width: 'min(380px, 100vw)' }"
    >
      @if (book(); as b) {
        <div class="head-row">
          @if (b.coverImageUrl) {
            <img class="cover" [src]="b.coverImageUrl" alt="" (error)="onCoverError($event)" />
          } @else {
            <div class="swatch" [style.background]="colorFor(b.status)"></div>
          }
          <div class="head-text">
            <h3>{{ b.title }}</h3>
            <div class="author">{{ b.author }}</div>
            @if (b.genre) {
              <span class="genre-chip">{{ b.genre }}</span>
            }
          </div>
        </div>

        <div class="meta-line"><span>ADDED</span><span>{{ formatDate(b.dateAdded) }}</span></div>
        @if (b.dateStarted) {
          <div class="meta-line"><span>STARTED</span><span>{{ formatDate(b.dateStarted) }}</span></div>
        }
        @if (b.dateCompleted) {
          <div class="meta-line"><span>FINISHED</span><span>{{ formatDate(b.dateCompleted) }}</span></div>
        }

        <div class="field">
          <label>Status</label>
          <p-selectButton
            [options]="statusOptions"
            optionLabel="label"
            optionValue="value"
            [ngModel]="b.status"
            (ngModelChange)="store.updateStatus(b.id, $event)"
          />
        </div>

        <div class="field">
          @if (b.totalPages) {
            <label>Progress — {{ b.currentPage }} / {{ b.totalPages }} pages ({{ pct(b) }}%)</label>
            <p-slider
              [ngModel]="b.currentPage"
              [min]="0"
              [max]="b.totalPages"
              (onChange)="store.updateProgress(b.id, $event.value ?? 0)"
            />
          } @else {
            <label>Progress</label>
            <p class="hint">Add a total page count (Edit details) to track progress here.</p>
          }
        </div>

        <div class="field">
          <label>Rating</label>
          <p-rating
            [ngModel]="b.rating ?? 0"
            (ngModelChange)="store.updateRating(b.id, $event)"
          />
        </div>

        <div class="field">
          <label>Notes</label>
          <textarea
            pTextarea
            rows="3"
            [ngModel]="b.notes"
            (ngModelChange)="store.updateNotes(b.id, $event)"
            placeholder="A line worth keeping…"
          ></textarea>
        </div>

        <div class="field">
          <label>Collections</label>
          @if (collections().length) {
            <div class="collection-list">
              @for (c of collections(); track c.id) {
                <label class="collection-row">
                  <p-checkbox
                    [binary]="true"
                    [ngModel]="isInCollection(b.id, c.id)"
                    (ngModelChange)="toggleCollection($event, b, c.id)"
                  />
                  <span>{{ c.name }}</span>
                </label>
              }
            </div>
          } @else {
            <p class="hint">No collections yet — create one from the Collections page.</p>
          }
        </div>

        <div class="actions">
          <button pButton type="button" label="Edit details" class="p-button-outlined" (click)="editRequested.emit(b)"></button>
          <button pButton type="button" label="Delete" class="p-button-text p-button-danger" (click)="confirmDelete(b)"></button>
        </div>
      }
    </p-drawer>
  `,
  styles: `
    .head-row { display: flex; gap: 14px; margin-bottom: 16px; }
    .swatch { width: 34px; height: 48px; border-radius: 2px; flex: none; }
    .cover { width: 48px; height: 68px; object-fit: cover; border-radius: 2px; flex: none; border: 1px solid var(--bs-hairline); }
    .head-text { min-width: 0; }
    h3 { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 600; margin: 0 0 4px; }
    .author { color: var(--bs-text-dim); font-size: 13px; }
    .genre-chip {
      display: inline-block;
      margin-top: 8px;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--bs-brass-bright);
      border: 1px solid var(--bs-hairline);
      border-radius: 3px;
      padding: 2px 7px;
    }
    .meta-line {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: var(--bs-text-faint);
      font-family: 'IBM Plex Mono', monospace;
      padding: 9px 0;
      border-bottom: 1px solid var(--bs-hairline);
    }
    .field { margin-top: 22px; }
    .field label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--bs-text-faint);
      display: block;
      margin-bottom: 9px;
    }
    textarea { width: 100%; }
    .hint { font-size: 12px; color: var(--bs-text-faint); margin: 0; }
    .collection-list { display: flex; flex-direction: column; gap: 10px; }
    .collection-row { display: flex; align-items: center; gap: 10px; font-size: 13px; cursor: pointer; }
    .actions { display: flex; justify-content: space-between; margin-top: 28px; padding-top: 18px; border-top: 1px solid var(--bs-hairline); }
  `,
})
export class BookDrawerComponent {
  protected readonly store = inject(BookStore);
  protected readonly collectionStore = inject(CollectionStore);
  private readonly confirmationService = inject(ConfirmationService);

  /** null = closed */
  readonly bookId = input<number | null>(null);
  readonly closed = output<void>();
  readonly editRequested = output<Book>();

  protected readonly book = computed(() => {
    const id = this.bookId();
    return id === null ? null : (this.store.books().find((b) => b.id === id) ?? null);
  });
  protected readonly visible = computed(() => this.bookId() !== null);
  protected readonly statusOptions = READING_STATUS_OPTIONS;
  protected readonly collections = computed(() => this.collectionStore.collections());

  protected colorFor(status: keyof typeof READING_STATUS_COLOR_VAR) {
    return READING_STATUS_COLOR_VAR[status];
  }

  protected pct(book: { currentPage: number; totalPages: number | null }): number {
    return progressPercent(book);
  }

  protected formatDate(iso: string | null): string {
    return formatDate(iso);
  }

  protected isInCollection(bookId: number, collectionId: number): boolean {
    const collection = this.collections().find((c) => c.id === collectionId);
    return !!collection?.books.some((b) => b.id === bookId);
  }

  protected toggleCollection(checked: boolean, book: Book, collectionId: number): void {
    if (checked) {
      this.collectionStore.addBookToCollection(collectionId, book);
    } else {
      this.collectionStore.removeBookFromCollection(collectionId, book.id);
    }
  }

  protected onCoverError(event: Event): void {
    (event.target as HTMLImageElement).style.visibility = 'hidden';
  }

  protected confirmDelete(book: Book): void {
    this.confirmationService.confirm({
      header: 'Delete book',
      message: `Remove "${book.title}" from your library? This can't be undone.`,
      acceptLabel: 'Delete',
      acceptButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Cancel',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.store.removeBook(book.id);
        this.closed.emit();
      },
    });
  }

  protected onVisibleChange(next: boolean): void {
    if (!next) this.closed.emit();
  }
}

import { ChangeDetectionStrategy, Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RatingModule } from 'primeng/rating';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { BookStore } from '../../core/services/book.store';
import {
  Book,
  BookFormValue,
  bookToFormValue,
  emptyBookFormValue,
  formValueToRequest,
} from '../../core/models/book.model';
import { READING_STATUS_OPTIONS } from '../../core/models/reading-status.enum';
import { GENRE_SUGGESTIONS } from '../constants/genres';

export type BookFormState = { mode: 'add'; initialTitle?: string } | { mode: 'edit'; book: Book };

/**
 * Add/edit dialog for the full book record. Every save sends the complete
 * BookRequest shape (see toBookRequest/formValueToRequest) — the backend's
 * PUT replaces the whole row, so this is the one place a person can touch
 * every field the API actually accepts (genre, cover, dates, notes…), not
 * just the quick status/progress/rating controls the drawer exposes.
 */
@Component({
  selector: 'app-book-form',
  imports: [
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    AutoCompleteModule,
    SelectButtonModule,
    RatingModule,
    TextareaModule,
    DatePickerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-dialog
      [visible]="visible()"
      (visibleChange)="onVisibleChange($event)"
      [modal]="true"
      [style]="{ width: 'min(520px, 92vw)' }"
      [header]="isEdit() ? 'Edit book' : 'Add a book'"
      styleClass="bs-book-form-dialog"
    >
      <form class="grid" (ngSubmit)="submit()">
        <div class="row two">
          <div class="field">
            <label for="bf-title">Title *</label>
            <input id="bf-title" pInputText type="text" [(ngModel)]="value().title" name="title" required />
          </div>
          <div class="field">
            <label for="bf-author">Author *</label>
            <input id="bf-author" pInputText type="text" [(ngModel)]="value().author" name="author" required />
          </div>
        </div>

        <div class="row two">
          <div class="field">
            <label for="bf-genre">Genre</label>
            <p-autoComplete
              inputId="bf-genre"
              [(ngModel)]="value().genre"
              name="genre"
              [suggestions]="genreMatches()"
              (completeMethod)="filterGenres($event)"
              placeholder="e.g. Fiction"
              [dropdown]="true"
            />
          </div>
          <div class="field">
            <label>Status</label>
            <p-selectButton
              [options]="statusOptions"
              optionLabel="label"
              optionValue="value"
              [(ngModel)]="value().status"
              name="status"
            />
          </div>
        </div>

        <div class="row two">
          <div class="field">
            <label for="bf-current">Current page</label>
            <p-inputNumber
              inputId="bf-current"
              [(ngModel)]="value().currentPage"
              name="currentPage"
              [min]="0"
              [showButtons]="false"
            />
          </div>
          <div class="field">
            <label for="bf-total">Total pages</label>
            <p-inputNumber
              inputId="bf-total"
              [(ngModel)]="value().totalPages"
              name="totalPages"
              [min]="0"
              placeholder="Optional"
            />
          </div>
        </div>

        <div class="row two">
          <div class="field">
            <label for="bf-started">Date started</label>
            <p-datePicker
              inputId="bf-started"
              [(ngModel)]="value().dateStarted"
              name="dateStarted"
              dateFormat="M d, yy"
              [showIcon]="true"
              [showClear]="true"
              appendTo="body"
            />
          </div>
          <div class="field">
            <label for="bf-completed">Date completed</label>
            <p-datePicker
              inputId="bf-completed"
              [(ngModel)]="value().dateCompleted"
              name="dateCompleted"
              dateFormat="M d, yy"
              [showIcon]="true"
              [showClear]="true"
              appendTo="body"
            />
          </div>
        </div>

        <div class="field">
          <label>Rating</label>
          <p-rating [(ngModel)]="value().rating" name="rating" [stars]="5" />
        </div>

        <div class="field">
          <label for="bf-cover">Cover image URL</label>
          <input
            id="bf-cover"
            pInputText
            type="text"
            [(ngModel)]="value().coverImageUrl"
            name="coverImageUrl"
            placeholder="https://…"
          />
          @if (value().coverImageUrl) {
            <img class="cover-preview" [src]="value().coverImageUrl" alt="" (error)="onCoverError($event)" />
          }
        </div>

        <div class="field">
          <label for="bf-notes">Notes</label>
          <textarea
            id="bf-notes"
            pTextarea
            rows="3"
            [(ngModel)]="value().notes"
            name="notes"
            placeholder="A line worth keeping…"
          ></textarea>
        </div>

        @if (error()) {
          <p class="error">{{ error() }}</p>
        }

        <div class="actions">
          <button pButton type="button" label="Cancel" class="p-button-text" (click)="close()"></button>
          <button
            pButton
            type="submit"
            [label]="isEdit() ? 'Save changes' : 'Add book'"
            [loading]="saving()"
            [disabled]="!canSubmit()"
          ></button>
        </div>
      </form>
    </p-dialog>
  `,
  styles: `
    .grid { display: flex; flex-direction: column; gap: 16px; padding-top: 4px; }
    .row.two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    @media (max-width: 480px) {
      .row.two { grid-template-columns: 1fr; }
    }
    .field { display: flex; flex-direction: column; gap: 6px; }
    .field label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--bs-text-faint);
    }
    .field input, .field textarea { width: 100%; }
    :host ::ng-deep .field .p-autocomplete,
    :host ::ng-deep .field .p-inputnumber,
    :host ::ng-deep .field .p-datepicker { width: 100%; }
    .cover-preview {
      margin-top: 8px;
      width: 64px;
      height: 92px;
      object-fit: cover;
      border-radius: 3px;
      border: 1px solid var(--bs-hairline);
    }
    .error { color: #d98080; font-size: 13px; margin: 0; }
    .actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 4px; }
  `,
})
export class BookFormComponent {
  private readonly store = inject(BookStore);

  readonly state = input<BookFormState | null>(null);
  readonly closed = output<void>();

  protected readonly visible = computed(() => this.state() !== null);
  protected readonly isEdit = computed(() => this.state()?.mode === 'edit');
  protected readonly statusOptions = READING_STATUS_OPTIONS;
  protected readonly saving = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly genreMatches = signal<string[]>(GENRE_SUGGESTIONS);

  protected readonly value = signal<BookFormValue>(emptyBookFormValue());

  constructor() {
    // Rebuild the working copy whenever the dialog is (re)opened, so edits
    // to one book never leak into the next book opened in the same dialog.
    effect(() => {
      const s = this.state();
      if (!s) return;
      this.error.set(null);
      this.value.set(
        s.mode === 'edit' ? bookToFormValue(s.book) : { ...emptyBookFormValue(), title: s.initialTitle ?? '' },
      );
    });
  }

  protected canSubmit(): boolean {
    return this.value().title.trim().length > 0 && this.value().author.trim().length > 0 && !this.saving();
  }

  protected filterGenres(event: { query: string }): void {
    const query = event.query.toLowerCase();
    this.genreMatches.set(GENRE_SUGGESTIONS.filter((g) => g.toLowerCase().includes(query)));
  }

  protected onCoverError(event: Event): void {
    (event.target as HTMLImageElement).style.visibility = 'hidden';
  }

  protected submit(): void {
    if (!this.canSubmit()) return;

    const state = this.state();
    if (!state) return;

    const raw = this.value();
    const request = formValueToRequest({ ...raw, rating: raw.rating ? raw.rating : null });
    const id = state.mode === 'edit' ? state.book.id : undefined;

    this.saving.set(true);
    this.error.set(null);
    this.store.saveBook(request, id).subscribe({
      next: () => {
        this.saving.set(false);
        this.close();
      },
      error: (err) => {
        this.saving.set(false);
        this.error.set(err?.error?.message ?? 'Could not save this book. Check the fields and try again.');
      },
    });
  }

  protected onVisibleChange(next: boolean): void {
    if (!next) this.close();
  }

  protected close(): void {
    this.closed.emit();
  }
}

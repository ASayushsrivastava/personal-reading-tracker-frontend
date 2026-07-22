import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmationService } from 'primeng/api';
import { BookStore } from '../../core/services/book.store';
import { CollectionStore } from '../../core/services/collection.store';
import { READING_STATUS_COLOR_VAR } from '../../core/models/reading-status.enum';
import { Book } from '../../core/models/book.model';
import { Collection } from '../../core/models/collection.model';

@Component({
  selector: 'app-collections-page',
  imports: [ButtonModule, InputTextModule, FormsModule, DialogModule, MultiSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-shell">
      <div class="header">
        <h1>Shelves</h1>
        <div class="new-collection">
          <input pInputText [(ngModel)]="newName" placeholder="New shelf name" (keydown.enter)="create()" />
          <button pButton type="button" label="Create" (click)="create()"></button>
        </div>
      </div>

      @for (collection of collectionStore.collections(); track collection.id) {
        <div class="shelf-row">
          <div class="shelf-row-head">
            @if (renamingId() === collection.id) {
              <input
                pInputText
                class="rename-input"
                [(ngModel)]="renameValue"
                (keydown.enter)="saveRename(collection.id)"
                (keydown.escape)="renamingId.set(null)"
              />
              <button pButton type="button" icon="pi pi-check" class="p-button-text p-button-sm" (click)="saveRename(collection.id)"></button>
              <button pButton type="button" icon="pi pi-times" class="p-button-text p-button-sm" (click)="renamingId.set(null)"></button>
            } @else {
              <h3>{{ collection.name }}</h3>
              <span>{{ collection.bookCount }} books</span>
              <span class="row-actions">
                <button pButton type="button" icon="pi pi-pencil" class="p-button-text p-button-sm" (click)="startRename(collection)"></button>
                <button pButton type="button" icon="pi pi-plus" label="Add books" class="p-button-text p-button-sm" (click)="openAddBooks(collection)"></button>
                <button pButton type="button" icon="pi pi-trash" class="p-button-text p-button-sm p-button-danger" (click)="confirmDelete(collection)"></button>
              </span>
            }
          </div>
          <div class="mini-shelf">
            @for (book of collection.books; track book.id; let i = $index) {
              <div class="mini-spine-wrap">
                <div
                  class="mini-spine"
                  [style.height.px]="56 + (liveBook(book).rating ?? 2) * 7"
                  [style.background]="colorFor(liveBook(book), i)"
                  [title]="book.title"
                  (click)="openBook(book.id)"
                ></div>
                <button
                  type="button"
                  class="mini-remove"
                  [attr.aria-label]="'Remove ' + book.title + ' from ' + collection.name"
                  (click)="collectionStore.removeBookFromCollection(collection.id, book.id)"
                >×</button>
              </div>
            } @empty {
              <span class="empty">No books in this shelf yet — use "Add books" above.</span>
            }
          </div>
        </div>
      } @empty {
        <p class="empty">No collections yet — create one above.</p>
      }
    </div>

    <p-dialog
      [visible]="addBooksTarget() !== null"
      (visibleChange)="!$event && closeAddBooks()"
      [modal]="true"
      [style]="{ width: 'min(460px, 92vw)' }"
      [header]="'Add books to ' + (addBooksTarget()?.name ?? '')"
    >
      <p-multiSelect
        [options]="availableBooks()"
        optionLabel="title"
        dataKey="id"
        [(ngModel)]="selectedBooks"
        placeholder="Choose books"
        display="chip"
        [filter]="true"
        styleClass="add-books-select"
      >
        <ng-template #item let-book>{{ book.title }} — {{ book.author }}</ng-template>
      </p-multiSelect>
      <div class="dialog-actions">
        <button pButton type="button" label="Cancel" class="p-button-text" (click)="closeAddBooks()"></button>
        <button pButton type="button" label="Add" [disabled]="selectedBooks.length === 0" (click)="confirmAddBooks()"></button>
      </div>
    </p-dialog>
  `,
  styles: `
    .app-shell { max-width: 1180px; margin: 0 auto; padding: 40px 28px 100px; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; flex-wrap: wrap; gap: 16px; }
    h1 { font-family: 'Fraunces', serif; font-size: 26px; margin: 0; }
    .new-collection { display: flex; gap: 8px; }
    .shelf-row { margin-bottom: 34px; }
    .shelf-row-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; flex-wrap: wrap; }
    .shelf-row-head h3 { font-family: 'Fraunces', serif; font-size: 15px; margin: 0; }
    .shelf-row-head span { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--bs-text-faint); }
    .row-actions { display: inline-flex; align-items: center; gap: 2px; margin-left: auto; }
    .rename-input { max-width: 220px; }
    .mini-shelf {
      display: flex;
      gap: 6px;
      align-items: flex-end;
      height: 96px;
      padding: 0 4px 10px;
      border-bottom: 2px solid #241d13;
      overflow-x: auto;
    }
    .mini-spine-wrap { position: relative; flex: 0 0 auto; }
    .mini-spine { width: 20px; border-radius: 2px 2px 0 0; cursor: pointer; transition: transform 0.15s; }
    .mini-spine:hover { transform: translateY(-6px); }
    .mini-remove {
      position: absolute;
      top: -8px;
      right: -6px;
      width: 16px;
      height: 16px;
      line-height: 14px;
      border-radius: 50%;
      border: 1px solid var(--bs-hairline);
      background: var(--bs-ink-2);
      color: var(--bs-text-faint);
      font-size: 11px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.15s;
    }
    .mini-spine-wrap:hover .mini-remove { opacity: 1; }
    .empty { color: var(--bs-text-faint); font-size: 13px; }
    .dialog-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
    :host ::ng-deep .add-books-select { width: 100%; }
  `,
})
export class CollectionsPageComponent {
  protected readonly bookStore = inject(BookStore);
  protected readonly collectionStore = inject(CollectionStore);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly router = inject(Router);

  protected newName = '';
  protected readonly renamingId = signal<number | null>(null);
  protected renameValue = '';

  protected readonly addBooksTarget = signal<Collection | null>(null);
  protected selectedBooks: Book[] = [];

  protected readonly availableBooks = computed(() => {
    const target = this.addBooksTarget();
    if (!target) return [];
    const memberIds = new Set(target.books.map((b) => b.id));
    return this.bookStore.books().filter((b) => !memberIds.has(b.id));
  });

  protected liveBook(book: Book): Book {
    return this.bookStore.books().find((b) => b.id === book.id) ?? book;
  }

  protected create(): void {
    const name = this.newName.trim();
    if (!name) return;
    this.collectionStore.addCollection({ name });
    this.newName = '';
  }

  protected startRename(collection: Collection): void {
    this.renamingId.set(collection.id);
    this.renameValue = collection.name;
  }

  protected saveRename(id: number): void {
    const name = this.renameValue.trim();
    if (name) this.collectionStore.renameCollection(id, name);
    this.renamingId.set(null);
  }

  protected confirmDelete(collection: Collection): void {
    this.confirmationService.confirm({
      header: 'Delete shelf',
      message: `Delete "${collection.name}"? The books stay in your library — only the shelf grouping goes away.`,
      acceptLabel: 'Delete',
      acceptButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Cancel',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => this.collectionStore.removeCollection(collection.id),
    });
  }

  protected openAddBooks(collection: Collection): void {
    this.selectedBooks = [];
    this.addBooksTarget.set(collection);
  }

  protected closeAddBooks(): void {
    this.addBooksTarget.set(null);
    this.selectedBooks = [];
  }

  protected confirmAddBooks(): void {
    const target = this.addBooksTarget();
    if (!target) return;
    for (const book of this.selectedBooks) {
      this.collectionStore.addBookToCollection(target.id, book);
    }
    this.closeAddBooks();
  }

  protected colorFor(book: Book, index: number): string {
    const base = READING_STATUS_COLOR_VAR[book.status];
    const amt = [0, 6, -4, 3, -6, 2, 5, -2, 4, -5, 1, -3, 6][index % 13];
    return `color-mix(in srgb, ${base} ${100 - Math.abs(amt)}%, ${amt > 0 ? 'white' : 'black'} ${Math.abs(amt)}%)`;
  }

  protected openBook(id: number): void {
    this.router.navigate(['/book', id]);
  }
}

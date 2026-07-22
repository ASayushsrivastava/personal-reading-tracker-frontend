import { ReadingStatus } from './reading-status.enum';

/**
 * Mirrors the backend's BookResponse exactly (see
 * com.bookshelve.backend.dto.BookResponse). `progress` is computed
 * server-side from currentPage/totalPages — components should prefer the
 * local `progressPercent()` helper below for optimistic UI updates, since
 * the server value only refreshes after a round trip.
 */
export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string | null;
  status: ReadingStatus;
  currentPage: number;
  totalPages: number | null;
  progress: number;
  rating: number | null;
  notes: string | null;
  coverImageUrl: string | null;
  dateAdded: string | null;
  dateStarted: string | null;
  dateCompleted: string | null;
}

/**
 * Mirrors com.bookshelve.backend.dto.BookRequest. IMPORTANT: the backend's
 * PUT /api/books/{id} is a full replace, not a JSON-merge-patch — any field
 * left out of the body is written as null/0, not left untouched (see
 * BookServiceImpl#applyRequestToEntity). Every write to the API must send
 * the complete object; use `toBookRequest()` below rather than building a
 * partial payload by hand.
 */
export interface BookRequest {
  title: string;
  author: string;
  genre: string | null;
  status: ReadingStatus;
  currentPage: number;
  totalPages: number | null;
  rating: number | null;
  notes: string | null;
  coverImageUrl: string | null;
  dateStarted: string | null;
  dateCompleted: string | null;
}

/** Fields a person fills in when adding or editing a book, sans server-managed ids/dates. */
export type BookFormValue = Omit<BookRequest, 'dateStarted' | 'dateCompleted'> & {
  dateStarted: Date | null;
  dateCompleted: Date | null;
};

/**
 * Builds a full BookRequest by merging a patch on top of the book's
 * current known values. Always use this for updates — never send a bare
 * `{ rating: 5 }` style patch, it will blank out every other field.
 */
export function toBookRequest(book: Book, patch: Partial<BookRequest> = {}): BookRequest {
  return {
    title: book.title,
    author: book.author,
    genre: book.genre,
    status: book.status,
    currentPage: book.currentPage,
    totalPages: book.totalPages,
    rating: book.rating,
    notes: book.notes,
    coverImageUrl: book.coverImageUrl,
    dateStarted: book.dateStarted,
    dateCompleted: book.dateCompleted,
    ...patch,
  };
}

export function emptyBookFormValue(): BookFormValue {
  return {
    title: '',
    author: '',
    genre: null,
    status: ReadingStatus.ToRead,
    currentPage: 0,
    totalPages: null,
    rating: null,
    notes: null,
    coverImageUrl: null,
    dateStarted: null,
    dateCompleted: null,
  };
}

export function bookToFormValue(book: Book): BookFormValue {
  return {
    title: book.title,
    author: book.author,
    genre: book.genre,
    status: book.status,
    currentPage: book.currentPage,
    totalPages: book.totalPages,
    rating: book.rating,
    notes: book.notes,
    coverImageUrl: book.coverImageUrl,
    dateStarted: book.dateStarted ? new Date(book.dateStarted) : null,
    dateCompleted: book.dateCompleted ? new Date(book.dateCompleted) : null,
  };
}

function toIsoDate(date: Date | null): string | null {
  if (!date) return null;
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function formValueToRequest(value: BookFormValue): BookRequest {
  return {
    ...value,
    title: value.title.trim(),
    author: value.author.trim(),
    genre: value.genre?.trim() || null,
    notes: value.notes?.trim() || null,
    coverImageUrl: value.coverImageUrl?.trim() || null,
    dateStarted: toIsoDate(value.dateStarted),
    dateCompleted: toIsoDate(value.dateCompleted),
  };
}

/** Client-side progress calc so the UI updates the instant currentPage changes, without waiting on the server's `progress` field. */
export function progressPercent(book: Pick<Book, 'currentPage' | 'totalPages'>): number {
  if (!book.totalPages || book.totalPages <= 0) return 0;
  return Math.min(100, Math.round((book.currentPage / book.totalPages) * 100));
}

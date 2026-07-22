import { Book } from './book.model';

/** Mirrors com.bookshelve.backend.dto.CollectionResponse — the books array is embedded server-side, so collection membership is read from here rather than stored on Book. */
export interface Collection {
  id: number;
  name: string;
  dateCreated: string | null;
  bookCount: number;
  books: Book[];
}

export interface CollectionCreateRequest {
  name: string;
}

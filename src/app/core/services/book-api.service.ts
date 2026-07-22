import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Book, BookRequest } from '../models/book.model';

export interface BookSearchParams {
  title?: string;
  author?: string;
  genre?: string;
  status?: string;
}

/**
 * Thin, dumb HTTP layer — one method per backend endpoint, no state.
 * All caching / derived data / optimistic updates live in BookStore.
 * Keeping this separate means the store can be unit-tested against a
 * mocked BookApiService without spinning up HttpClientTestingModule twice.
 */
@Injectable({ providedIn: 'root' })
export class BookApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/books`;

  getAll(params?: BookSearchParams): Observable<Book[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params ?? {})) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<Book[]>(this.baseUrl, { params: httpParams });
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  create(payload: BookRequest): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, payload);
  }

  update(id: number, payload: BookRequest): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

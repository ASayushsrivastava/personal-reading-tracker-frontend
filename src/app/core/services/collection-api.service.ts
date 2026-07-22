import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Collection, CollectionCreateRequest } from '../models/collection.model';

@Injectable({ providedIn: 'root' })
export class CollectionApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/collections`;

  getAll(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.baseUrl);
  }

  create(payload: CollectionCreateRequest): Observable<Collection> {
    return this.http.post<Collection>(this.baseUrl, payload);
  }

  rename(id: number, name: string): Observable<Collection> {
    return this.http.put<Collection>(`${this.baseUrl}/${id}`, { name });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  addBook(collectionId: number, bookId: number): Observable<Collection> {
    return this.http.post<Collection>(`${this.baseUrl}/${collectionId}/books`, { bookId });
  }

  removeBook(collectionId: number, bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${collectionId}/books/${bookId}`);
  }
}

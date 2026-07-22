import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Book } from '../models/book.model';
import { DashboardStats } from '../models/dashboard.model';

/** Full shape of GET /api/dashboard — mirrors DashboardResponse. */
export interface DashboardResponse extends DashboardStats {
  continueReading: Book[];
  recentlyAdded: Book[];
  recentlyCompleted: Book[];
}

/**
 * BookStore already derives stats/continue-reading/recent client-side from
 * the one /api/books fetch — cheaper for a personal library that's a few
 * hundred books at most. Use this service instead (swapped into BookStore's
 * computed signals in place of the client-side derivation) once the library
 * is large enough that shipping the full book list on every load stops
 * being "efficient."
 */
@Injectable({ providedIn: 'root' })
export class DashboardApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/dashboard`;

  getDashboard(): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(this.baseUrl);
  }

  getContinueReading(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/continue-reading`);
  }

  getRecent(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/recent`);
  }
}

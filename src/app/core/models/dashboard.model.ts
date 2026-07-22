/** Mirrors com.bookshelve.backend.dto.DashboardResponse's count fields. */
export interface DashboardStats {
  totalBooks: number;
  currentlyReading: number;
  toRead: number;
  completed: number;
  abandoned: number;
}

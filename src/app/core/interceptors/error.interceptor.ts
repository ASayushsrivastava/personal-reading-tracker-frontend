import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

/**
 * Surfaces API failures as a PrimeNG toast instead of letting them die
 * silently in the console. Re-throws so callers (e.g. BookStore's optimistic
 * update methods) can still roll back local state.
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const messages = inject(MessageService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      const detail =
        err.error?.message ??
        (err.status === 0 ? 'Cannot reach the server. Is the backend running?' : err.message);

      messages.add({
        severity: 'error',
        summary: `Request failed (${err.status || 'network'})`,
        detail,
        life: 4000,
      });

      return throwError(() => err);
    }),
  );
};

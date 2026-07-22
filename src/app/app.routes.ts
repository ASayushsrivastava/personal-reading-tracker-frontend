import { Routes } from '@angular/router';

/**
 * Every feature is code-split. The shelf page (home route) is the only
 * thing in the initial bundle's route table that isn't lazy by nature of
 * being the entry point — its own heavy children (drawer, PrimeNG modules)
 * are still lazy via the component's own `imports` being tree-shaken per
 * chunk. Collections and the standalone book-detail route only download
 * when the user actually navigates there.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/shelf/shelf-page.component').then((m) => m.ShelfPageComponent),
    title: 'Bookshelve — Shelf',
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./features/collections/collections.routes').then((m) => m.COLLECTIONS_ROUTES),
  },
  {
    path: 'book/:id',
    loadComponent: () =>
      import('./features/shelf/shelf-page.component').then((m) => m.ShelfPageComponent),
    title: 'Bookshelve — Book',
    // Reuses the shelf page shell with the drawer pre-opened via the
    // :id route param (see ShelfPageComponent's bookId input), so a
    // shared/bookmarked link to a single book still shows the shelf
    // it belongs on rather than a bare detail view.
  },
  { path: '**', redirectTo: '' },
];

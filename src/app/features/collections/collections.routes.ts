import { Routes } from '@angular/router';

export const COLLECTIONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./collections-page.component').then((m) => m.CollectionsPageComponent),
    title: 'Bookshelve — Collections',
  },
];

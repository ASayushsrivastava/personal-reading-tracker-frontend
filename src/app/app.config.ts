import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

import { routes } from './app.routes';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { ConfirmationService, MessageService } from 'primeng/api';

/**
 * A minimal brass/ink preset layered on top of PrimeNG's Aura theme so
 * components (Drawer, Slider, Rating, SelectButton, Toast…) pick up the
 * Bookshelve palette without hand-overriding every class. Extend this
 * with the fuller token set from the design pass (--bs-* vars in
 * styles.scss) as more of the UI gets built out.
 */
const BookshelvePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#faf6ee',
      100: '#f0e4c8',
      200: '#e0b86e',
      300: '#c9a05c',
      400: '#b58a45',
      500: '#a07a3c',
      600: '#8a6832',
      700: '#6f5327',
      800: '#54401e',
      900: '#3a2c15',
      950: '#241a0d',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    // withComponentInputBinding lets routed components receive :id etc as
    // plain @Input()/input() signals instead of reading ActivatedRoute by
    // hand. withViewTransitions gives route changes a native cross-fade.
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),

    // withFetch swaps XHR for the Fetch API backend — smaller, streams
    // better, and is the direction Angular's HttpClient is heading.
    provideHttpClient(withFetch(), withInterceptors([loadingInterceptor, errorInterceptor])),

    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: BookshelvePreset,
        options: { darkModeSelector: '.bs-dark' },
      },
    }),
    MessageService,
    ConfirmationService,
  ],
};

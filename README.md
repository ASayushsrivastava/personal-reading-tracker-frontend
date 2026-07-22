# 📚 Bookshelve — Frontend

The Angular client for **Bookshelve**, a private digital reading journal. This app is the presentation layer over the [Spring Boot / PostgreSQL backend](../backend) — it renders your library as a literal wooden shelf, lets you track reading progress book-by-book, and organizes books into custom collections.

This document is the map of *how the frontend is built*: its architecture, every service and what it owns, the data contract with the backend, and the reasoning behind a few non-obvious decisions. It's meant to be the thing you re-open six months from now when you've forgotten why `BookStore` looks the way it does.

---

## Table of contents

- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Architecture overview](#architecture-overview)
- [Folder structure](#folder-structure)
- [Data layer](#data-layer)
  - [Models](#models)
  - [API services](#api-services)
  - [Stores](#stores)
- [The backend contract — read this before touching update logic](#the-backend-contract--read-this-before-touching-update-logic)
- [Routing](#routing)
- [Components](#components)
- [Cross-cutting concerns](#cross-cutting-concerns)
- [Styling & design system](#styling--design-system)
- [Environments & configuration](#environments--configuration)
- [Testing](#testing)
- [Known limitations / next steps](#known-limitations--next-steps)

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Angular 19, standalone components (no `NgModule`s) |
| State | Angular signals + `rxResource` (`@angular/core/rxjs-interop`) — no NgRx/Akita |
| UI kit | PrimeNG 19 (Aura theme, custom brass/ink preset) + PrimeIcons |
| HTTP | `HttpClient` with `withFetch()`, functional interceptors |
| Styling | SCSS, CSS custom properties for the design system, Fraunces / Inter / IBM Plex Mono via Google Fonts |
| Change detection | `OnPush` everywhere, zone-based (`provideZoneChangeDetection` with event coalescing) |
| Build | Angular CLI application builder (esbuild) |

Nothing here is exotic on purpose — the goal was a small, boring, signal-native stack that doesn't need a state management library for an app with two real resources (books, collections).

## Getting started

```bash
npm install
ng serve
```

`ng serve` defaults to the `development` configuration, which points at `http://localhost:8080/api` — i.e. it expects the Spring Boot backend running locally via `mvn spring-boot:run` (see the backend README). The backend's `CorsConfig` already allows `http://localhost:4200` by default, so no proxy config is needed.

```bash
ng build                              # production build → dist/bookshelve-frontend
ng build --configuration development  # dev build, unminified, source maps
ng test                               # Karma/Jasmine unit tests
```

> **Note on production builds:** `ng build --configuration production` fetches Google Fonts at build time to inline them into the CSS. This needs outbound internet access wherever the build runs (your machine, Cloudflare Pages' build environment, CI). If you ever build somewhere fully offline/sandboxed, that step will fail — it's not a code bug, just a build-time network dependency.

## Architecture overview

```
┌─────────────────────────────────────────────────────────┐
│                       Feature pages                      │
│   ShelfPageComponent          CollectionsPageComponent   │
│   (route: '' and 'book/:id')  (route: 'collections')     │
└───────────────┬───────────────────────┬──────────────────┘
                │                       │
                ▼                       ▼
┌─────────────────────────┐   ┌──────────────────────────┐
│   Shared components      │   │                          │
│   BookDrawerComponent    │◄──┤   Both feature pages      │
│   BookFormComponent      │   │   read/write through      │
│   BookRailComponent      │   │   the same two stores     │
└───────────┬──────────────┘   └──────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────┐
│                      Core — data layer                   │
│                                                            │
│   BookStore  ──uses──►  BookApiService  ──HTTP──► /api/books
│   CollectionStore ─uses► CollectionApiService ──► /api/collections
│   (DashboardApiService exists but is currently unused —   │
│    see "Known limitations")                                │
└─────────────────────────────────────────────────────────┘
```

**The core idea:** feature pages and shared components never call `HttpClient` or an `*ApiService` directly. They inject `BookStore` / `CollectionStore`, read signals, and call methods on the store. The store is the only thing that knows an HTTP call happened. This means:

- Every screen that shows books sees the same data, with no manual cache-busting or "did I remember to refetch" bugs.
- Optimistic updates (a status change, a rating) live in exactly one place, not duplicated per component.
- Swapping the data source later (e.g. moving stats to `DashboardApiService` instead of computing them client-side) is a one-file change.

Both stores are `providedIn: 'root'` but **lazy in practice**: nothing eagerly injects them at bootstrap, so the first HTTP call only fires the moment a lazy-loaded route (or a component within it) actually reads from the store. Visiting `/collections` without ever opening the shelf never fetches `/api/books`.

## Folder structure

```
src/app/
├── app.component.ts          # Shell: top nav, <router-outlet>, global toast + confirm dialog
├── app.config.ts             # Providers: router, HttpClient+interceptors, PrimeNG theme, services
├── app.routes.ts             # Top-level route table (lazy-loaded)
│
├── core/                     # Singleton, app-wide concerns. Nothing here is feature-specific.
│   ├── models/                #   Plain TypeScript interfaces mirroring backend DTOs
│   │   ├── book.model.ts
│   │   ├── collection.model.ts
│   │   ├── dashboard.model.ts
│   │   └── reading-status.enum.ts
│   ├── services/               #   HTTP clients (dumb) + stores (stateful)
│   │   ├── book-api.service.ts
│   │   ├── book.store.ts
│   │   ├── collection-api.service.ts
│   │   ├── collection.store.ts
│   │   ├── dashboard-api.service.ts
│   │   └── loading.service.ts
│   └── interceptors/
│       ├── error.interceptor.ts
│       └── loading.interceptor.ts
│
├── features/                 # Routed, lazy-loaded pages. Each owns its own sub-components.
│   ├── shelf/
│   │   ├── shelf-page.component.ts        # route: '' and 'book/:id'
│   │   └── components/
│   │       ├── hero-shelf.component.ts    # the wooden-shelf visualization
│   │       ├── stats-strip.component.ts   # total/reading/to-read/completed/abandoned counts
│   │       ├── book-rail.component.ts     # horizontal card rail (3 variants, see below)
│   │       └── quick-add.component.ts     # "type a title, hit Enter" input
│   └── collections/
│       ├── collections.routes.ts          # route: 'collections'
│       └── collections-page.component.ts
│
└── shared/                   # Reusable across features, not tied to one route
    ├── book-drawer/
    │   └── book-drawer.component.ts       # slide-over quickview/editor for one book
    ├── book-form/
    │   └── book-form.component.ts         # full add/edit dialog
    └── constants/
        └── genres.ts                      # genre autocomplete suggestions
```

## Data layer

### Models

`core/models/` contains plain interfaces with **no methods, no Angular decorators** — just shapes, plus a handful of pure functions for converting between them. They are written to mirror the backend's DTOs field-for-field.

| File | Exports | Mirrors (backend) |
|---|---|---|
| `book.model.ts` | `Book`, `BookRequest`, `BookFormValue`, `toBookRequest()`, `bookToFormValue()`, `formValueToRequest()`, `emptyBookFormValue()`, `progressPercent()` | `BookResponse` / `BookRequest` |
| `collection.model.ts` | `Collection`, `CollectionCreateRequest` | `CollectionResponse` |
| `dashboard.model.ts` | `DashboardStats` | `DashboardResponse` (counts only) |
| `reading-status.enum.ts` | `ReadingStatus`, `READING_STATUS_OPTIONS`, `READING_STATUS_COLOR_VAR` | `ReadingStatus` enum |

Two helper functions in `book.model.ts` are load-bearing for correctness, not just convenience:

- **`toBookRequest(book, patch)`** — builds a complete `BookRequest` by spreading a book's current known fields and overlaying a partial patch. Every write to `/api/books/{id}` goes through this. See [The backend contract](#the-backend-contract--read-this-before-touching-update-logic) for why.
- **`progressPercent(book)`** — computes `currentPage / totalPages` client-side. The backend also returns a computed `progress` field on `BookResponse`, but that value only updates after a round trip. Components call `progressPercent()` directly on the locally-patched book so the UI reflects a page-count change in the same frame as the click, not after the next fetch.

`ReadingStatus` is a plain string union (`'TO_READ' | 'READING' | 'COMPLETED' | 'ABANDONED'`) matching the backend enum's `@Enumerated(EnumType.STRING)` serialization exactly — no translation layer needed at the HTTP boundary.

### API services

`BookApiService` and `CollectionApiService` (plus the unused `DashboardApiService`) are intentionally "dumb": one method per REST endpoint, no caching, no state, nothing but building the request and returning the `Observable`. This split exists so:

- Stores can be tested by mocking a tiny service interface instead of `HttpClientTestingModule` machinery.
- It's obvious at a glance which HTTP calls exist, without wading through optimistic-update logic.

| Service | Base URL | Methods |
|---|---|---|
| `BookApiService` | `${apiBaseUrl}/books` | `getAll(params?)`, `getById(id)`, `create(payload)`, `update(id, payload)`, `delete(id)` |
| `CollectionApiService` | `${apiBaseUrl}/collections` | `getAll()`, `create(payload)`, `rename(id, name)`, `delete(id)`, `addBook(collectionId, bookId)`, `removeBook(collectionId, bookId)` |
| `DashboardApiService` | `${apiBaseUrl}/dashboard` | `getDashboard()`, `getContinueReading()`, `getRecent()` — see [Known limitations](#known-limitations--next-steps) |

`BookApiService.getAll()` accepts an optional `{ title, author, genre, status }` params object mapped to query params, matching the backend controller's `@RequestParam` filters — currently unused by the UI (filtering is done client-side, see `BookStore.filteredBooks`) but there if the library ever grows past "fits comfortably in memory."

### Stores

`BookStore` and `CollectionStore` (`core/services/*.store.ts`) are the real heart of the app. Both follow the same shape:

1. An `rxResource` fetches the full list once, keyed on an internal `refreshTick` signal so any caller can force a refetch by calling `refresh()`.
2. A `computed()` unwraps the resource into a plain array with a safe empty-array default, so templates never have to null-check.
3. Every write method **patches the signal's cached array directly** for instant UI feedback, fires the HTTP call, and either reconciles with the authoritative server response (on success) or rolls back / refetches (on failure).

#### `BookStore`

| Member | What it is |
|---|---|
| `books` | `Signal<Book[]>` — full list |
| `isLoading`, `loadError` | resource status passthroughs |
| `searchQuery`, `statusFilter` | writable signals driving client-side filtering |
| `filteredBooks` | `computed()` — `books` filtered by `searchQuery` (title/author/genre, case-insensitive) and `statusFilter` |
| `stats` | `computed()` → `DashboardStats`, derived from `books` (see note below) |
| `continueReading` | books with status `READING`, most-recently-started first |
| `recentlyAdded` | last 10 books by `dateAdded` |
| `recentlyCompleted` | last 10 completed books by `dateCompleted` |
| `bookById(id)` | returns a `computed()` signal for one book — used for reactive detail views |
| `updateStatus(id, status)` | changes status; also auto-adjusts `currentPage` (snaps to `totalPages` on `COMPLETED`, to `0` on `TO_READ`) to mirror what the backend itself would infer |
| `updateProgress(id, currentPage)` | clamps to `[0, totalPages]`, derives status (`TO_READ` at 0, `COMPLETED` at max, otherwise `READING`) |
| `updateRating(id, rating)`, `updateNotes(id, notes)` | single-field patches, still sent as a full `BookRequest` under the hood |
| `saveBook(request, id?)` | used by `BookFormComponent` for full add/edit; returns a hot-shared `Observable<Book>` (`shareReplay(1)`) so the form can await success/error without triggering a second HTTP call |
| `removeBook(id)` | optimistic delete with rollback on failure |
| `refresh()` | force a refetch |

> **Why is `stats` computed instead of fetched from `GET /api/dashboard`?** For a personal library (tens to low hundreds of books), one `GET /api/books` already contains everything needed to derive counts, "continue reading," and "recently added" client-side — cheaper than a second round trip. `DashboardApiService` exists and is fully typed for the day this stops being true (see [Known limitations](#known-limitations--next-steps)).

#### `CollectionStore`

| Member | What it is |
|---|---|
| `collections` | `Signal<Collection[]>` — each with its member `books` embedded, straight from `CollectionResponse` |
| `collectionIdsForBook(bookId)` | `computed()` — which collections a book belongs to, derived by scanning `collections()` for membership (see contract note below) |
| `addCollection(payload)`, `renameCollection(id, name)`, `removeCollection(id)` | CRUD, optimistic where safe |
| `addBookToCollection(collectionId, book)`, `removeBookFromCollection(collectionId, bookId)` | optimistically splice the book into/out of the collection's embedded `books` array, then reconcile with the server response |

## The backend contract — read this before touching update logic

Two backend behaviors shape almost every design decision in the data layer above. If you're extending this app, internalize these before writing a new mutation:

**1. `PUT /api/books/{id}` is a full replace, not a merge.**
`BookServiceImpl#applyRequestToEntity` sets every field on the entity from the incoming `BookRequest` — if a field is omitted (`null`), it's written as `null`/`0`, not left alone. **Never send a partial body** (e.g. `{ rating: 5 }`) — it will blank out title, author, progress, everything else. This is why `toBookRequest(book, patch)` exists and why every store mutation routes through it: it always sends the book's full current state with only the intended field(s) overlaid.

One subtlety this makes safe: `dateStarted`/`dateCompleted` auto-management. The backend only auto-sets `dateStarted`/`dateCompleted` to "today" when transitioning into `READING`/`COMPLETED` **and** both the persisted value and the incoming request value are `null`. Because `toBookRequest()` always echoes the book's current (possibly-null) date back in the payload, this auto-fill behavior works exactly as the backend intends — sending a full merged object is not just "safe," it's what lets the backend's own auto-date logic function at all.

**2. Collection membership lives on the collection, not the book.**
`GET /api/collections` returns each `CollectionResponse` with its member `books` embedded. `BookResponse` has no `collectionIds` field. So "which collections is this book in" is always computed by scanning `CollectionStore.collections()` for membership (`collectionIdsForBook`, `BookDrawerComponent.isInCollection`) — never stored on the `Book` model itself.

## Routing

Every route is lazy-loaded (`loadComponent` / `loadChildren`), and `provideRouter(routes, withComponentInputBinding())` means route params land as `input()` signals on the component with zero `ActivatedRoute` boilerplate.

| Path | Component | Notes |
|---|---|---|
| `/` | `ShelfPageComponent` | Home — the shelf visualization, stats, rails |
| `/book/:id` | `ShelfPageComponent` (same component) | Reuses the shelf shell with the drawer pre-opened via the `id` input, so a bookmarked/shared link to one book still shows the shelf it lives on, not a bare detail page |
| `/collections` | `CollectionsPageComponent` | Lazy child route group (`collections.routes.ts`) |
| `**` | redirects to `/` | |

`withViewTransitions()` is also enabled, so route changes get a native browser cross-fade for free.

## Components

### Feature pages

- **`ShelfPageComponent`** (`features/shelf/`) — owns search/filter state (delegated to `BookStore`), the "which book is open" signal, and the "is the add/edit dialog open" signal. Composes `HeroShelfComponent`, `StatsStripComponent`, `BookRailComponent` (×3, one per variant), `QuickAddComponent`, `BookDrawerComponent`, and `BookFormComponent`.
- **`CollectionsPageComponent`** (`features/collections/`) — one "shelf row" per collection: inline rename, delete-with-confirm, a mini spine-row per collection with hover-to-remove, and an "Add books" dialog (`p-multiSelect`) for pulling existing books in. Resolves each book's *live* status/rating from `BookStore` rather than trusting the embedded snapshot from `CollectionResponse`, so a status change made elsewhere in the app shows up here immediately.

### Shelf sub-components

- **`HeroShelfComponent`** — the wood-shelf illustration. Renders one "spine" per book with a procedurally varied width/height/shade (from page count, rating, and index) so the shelf doesn't look like a uniform bar chart. Click/Enter opens the drawer; hover shows a tooltip with title/author/progress.
- **`StatsStripComponent`** — five-number readout (`total / reading / to-read / completed / abandoned`) from `BookStore.stats`.
- **`BookRailComponent`** — one horizontal card-rail component, three `variant`s (`'continue' | 'added' | 'completed'`) so the shelf page doesn't need three near-duplicate rail components. `'continue'` shows a progress bar and a "+10 pages" shortcut; `'completed'` shows a read-only star rating and finish date; `'added'` shows genre and the added date.
- **`QuickAddComponent`** — a single "type a title, press Enter" input. Deliberately does **not** create a book itself — it emits the title string, and `ShelfPageComponent` opens `BookFormComponent` pre-filled with it. (An earlier version of this app defaulted the author to `"Unknown"` on quick-add; since the backend requires an author, that's a data-quality trap — routing through the full form instead means every book gets a real author.)

### Shared

- **`BookDrawerComponent`** — the right-side quickview/editor, opened by `bookId: number | null` (`null` = closed). Handles the "fast" edits that should feel instant: status (`p-selectButton`), progress (`p-slider`, hidden with a hint if `totalPages` isn't set), rating (`p-rating`), notes, and collection membership (checkbox per collection). "Edit details" hands off to `BookFormComponent` for everything else (title, author, genre, cover, dates); "Delete" opens a `ConfirmationService` dialog.
- **`BookFormComponent`** — the full add/edit dialog (`p-dialog`). Takes a `state: BookFormState | null` input (`{ mode: 'add', initialTitle? } | { mode: 'edit', book }`), covers every field the backend accepts, includes a genre autocomplete (`shared/constants/genres.ts` — free-text suggestions, not an enum) and a cover-image URL field with a live `<img>` preview.

## Cross-cutting concerns

- **`LoadingService` + `loadingInterceptor`** — a single in-flight-request counter (`signal(0)`, incremented/decremented per request) drives one global loading indicator in `AppComponent` rather than every component owning its own spinner flag.
- **`errorInterceptor`** — catches every failed HTTP call and surfaces it as a PrimeNG toast (`MessageService`) with the backend's error message if present, then re-throws so store methods can still roll back optimistic state.
- **`ConfirmationService`** — provided at the app level, backs the single `<p-confirmDialog>` rendered once in `AppComponent`; both the book drawer's delete and the collections page's delete/rename use it.

## Styling & design system

`src/styles.scss` defines the visual identity as CSS custom properties (`--bs-ink`, `--bs-ink-2`, `--bs-brass`, `--bs-brass-bright`, `--bs-hairline`, `--bs-text-dim`, `--bs-text-faint`, …) — a dark ink-and-brass "personal library" palette, deliberately not a generic light SaaS look. Typography: **Fraunces** (serif, headings), **Inter** (body), **IBM Plex Mono** (numbers/metadata), loaded via Google Fonts.

`app.config.ts` layers a custom `definePreset(Aura, {...})` on top of PrimeNG's Aura theme so PrimeNG components (Drawer, Slider, Rating, SelectButton, Dialog, Toast…) pick up the brass palette without hand-overriding every PrimeNG CSS class one by one.

## Environments & configuration

| File | `apiBaseUrl` | Used by |
|---|---|---|
| `src/environments/environment.ts` | Deployed backend (Azure App Service) | `ng build` / `ng build --configuration production` |
| `src/environments/environment.development.ts` | `http://localhost:8080/api` | `ng serve` (via `fileReplacements` in `angular.json`'s `development` build configuration) |

To point local development at a different backend (e.g. your own Render deployment), just edit `apiBaseUrl` in `environment.development.ts` — no other code changes needed, every service reads from `environment.apiBaseUrl`.

## Testing

`ng test` runs Karma/Jasmine. Currently there's a single smoke spec (`app.component.spec.ts`) confirming the shell renders. Given the architecture, the highest-value next tests would be:

- `BookStore` / `CollectionStore` unit tests with a mocked `*ApiService` — verifying optimistic patches, the full-payload merge in `toBookRequest`, and rollback-on-error.
- `book.model.ts`'s pure functions (`formValueToRequest`, `progressPercent`) — no Angular test bed needed, plain Jasmine.

## Known limitations / next steps

- **`DashboardApiService` is fully implemented but unused.** Stats/rails are derived client-side from the one `/api/books` fetch (see the note in the `BookStore` table above). If the library grows large enough that shipping the whole book list becomes wasteful, swap `BookStore`'s `stats`/`continueReading`/`recentlyAdded`/`recentlyCompleted` computeds for calls into this service instead.
- **Search/filter is client-side only.** `BookApiService.getAll()` already supports server-side `title`/`author`/`genre`/`status` query params if that becomes necessary.
- **No optimistic-UI tests yet** — see [Testing](#testing).
- **No offline/PWA support, no image upload** (cover images are URL-only, matching the backend's `coverImageUrl: String` field — there's no file upload endpoint on the backend to support anything else).

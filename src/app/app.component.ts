import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ToastModule, ProgressBarModule, ConfirmDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (loading.isLoading()) {
      <p-progressBar mode="indeterminate" [style]="{ height: '2px' }" styleClass="bs-top-loader" />
    }

    <header class="bs-shell-header">
      <a routerLink="/" class="bs-brand">Bookshelve<span>·</span></a>
      <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Shelf</a>
        <a routerLink="/collections" routerLinkActive="active">Collections</a>
      </nav>
    </header>

    <router-outlet />
    <p-toast position="bottom-center" />
    <p-confirmDialog />
  `,
  styles: `
    .bs-shell-header {
      position: sticky;
      top: 0;
      z-index: 40;
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 14px 28px;
      background: rgba(12, 14, 19, 0.86);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--bs-hairline);
    }
    .bs-brand {
      font-family: 'Fraunces', serif;
      font-weight: 600;
      font-size: 19px;
      color: var(--bs-text);
      text-decoration: none;
    }
    .bs-brand span { color: var(--bs-brass); margin-left: 4px; }
    nav { display: flex; gap: 18px; }
    nav a {
      color: var(--bs-text-dim);
      text-decoration: none;
      font-size: 13px;
    }
    nav a.active { color: var(--bs-brass-bright); }
    :host ::ng-deep .bs-top-loader .p-progressbar-value { background: var(--bs-brass-bright); }
  `,
})
export class AppComponent {
  protected readonly loading = inject(LoadingService);
}

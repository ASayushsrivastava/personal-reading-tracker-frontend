import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { DashboardStats } from '../../../core/models/dashboard.model';

@Component({
  selector: 'app-stats-strip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="stats">
      @for (row of rows(); track row.label) {
        <div class="stat">
          <div class="num">{{ row.value }}</div>
          <div class="lbl">{{ row.label }}</div>
        </div>
      }
    </div>
  `,
  styles: `
    .stats {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      border: 1px solid var(--bs-hairline);
      border-radius: 6px;
      overflow: hidden;
    }
    .stat {
      padding: 18px 20px;
      border-right: 1px solid var(--bs-hairline);
      background: var(--bs-ink-2);
    }
    .stat:last-child { border-right: none; }
    .num {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 26px;
      color: var(--bs-brass-bright);
      font-weight: 500;
    }
    .lbl {
      font-size: 11px;
      color: var(--bs-text-faint);
      text-transform: uppercase;
      letter-spacing: 0.07em;
      margin-top: 4px;
    }
    @media (max-width: 720px) {
      .stats { grid-template-columns: repeat(2, 1fr); }
    }
  `,
})
export class StatsStripComponent {
  readonly stats = input.required<DashboardStats>();

  protected readonly rows = computed(() => {
    const s = this.stats();
    return [
      { label: 'Total', value: s.totalBooks },
      { label: 'Reading', value: s.currentlyReading },
      { label: 'To read', value: s.toRead },
      { label: 'Completed', value: s.completed },
      { label: 'Abandoned', value: s.abandoned },
    ];
  });
}

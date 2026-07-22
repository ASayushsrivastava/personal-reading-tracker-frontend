import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-quick-add',
  imports: [FormsModule, InputTextModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="quickadd">
      <span class="plus">+</span>
      <input
        #input
        pInputText
        type="text"
        [(ngModel)]="title"
        placeholder="Add a book — type a title and press Enter"
        (keydown.enter)="submit()"
      />
      <span class="kbd">⏎</span>
    </div>
  `,
  styles: `
    .quickadd {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--bs-ink-2);
      border: 1px solid var(--bs-hairline);
      border-radius: 3px;
      padding: 6px 14px;
    }
    .plus { color: var(--bs-text-faint); font-size: 13px; }
    input { flex: 1; border: none !important; background: none !important; box-shadow: none !important; }
    .kbd {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: var(--bs-text-faint);
      border: 1px solid var(--bs-hairline);
      border-radius: 3px;
      padding: 2px 6px;
    }
  `,
})
export class QuickAddComponent {
  readonly add = output<string>();
  protected title = signal('');

  protected submit(): void {
    const value = this.title().trim();
    if (!value) return;
    this.add.emit(value);
    this.title.set('');
  }
}

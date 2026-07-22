import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Book, progressPercent } from '../../../core/models/book.model';
import { READING_STATUS_COLOR_VAR, ReadingStatus } from '../../../core/models/reading-status.enum';

/** Deterministic per-index tilt/shade so the shelf looks hand-placed, not randomized on every change-detection pass. */
const TILT_SEQUENCE = [-3, 2, -1, 4, -2, 1, 3, -4, 0, 2, -3, 1, -1];
const SHADE_SEQUENCE = [0, 6, -4, 3, -6, 2, 5, -2, 4, -5, 1, -3, 6];

@Component({
  selector: 'app-hero-shelf',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="scene">
      <div class="spines">
        @for (book of books(); track book.id; let i = $index) {
          <div
            class="spine"
            [class.is-reading]="book.status === reading"
            [class.active]="book.id === activeId()"
            [style.width.px]="widthFor(book)"
            [style.height.px]="heightFor(book, i)"
            [style.background]="shadeFor(book, i)"
            [style.--tilt.deg]="TILT_SEQUENCE[i % TILT_SEQUENCE.length]"
            (click)="spineClick.emit(book.id)"
            role="button"
            tabindex="0"
            [attr.aria-label]="book.title + ', ' + book.status"
            [title]="tooltipFor(book)"
            (keydown.enter)="spineClick.emit(book.id)"
          >
            <div class="spine-mark"></div>
            <span class="spine-label">{{ book.title }}</span>
          </div>
        }
      </div>
      <div class="shelf-plank"></div>
    </div>
  `,
  styles: `
    .scene {
      position: relative;
      height: 340px;
      perspective: 1400px;
      border-radius: 6px;
      background:
        radial-gradient(ellipse 60% 80% at 30% -10%, rgba(201, 160, 92, 0.1), transparent 60%),
        linear-gradient(180deg, #14171e 0%, #0f1116 70%);
      border: 1px solid var(--bs-hairline);
      overflow: hidden;
    }
    .shelf-plank {
      position: absolute;
      left: 24px;
      right: 24px;
      bottom: 34px;
      height: 10px;
      background: linear-gradient(180deg, #2a2013, #1a140c);
      border-radius: 2px;
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
    }
    .spines {
      position: absolute;
      left: 24px;
      right: 24px;
      bottom: 44px;
      display: flex;
      align-items: flex-end;
      gap: 3px;
      transform-style: preserve-3d;
      transform: rotateX(2deg);
    }
    .spine {
      position: relative;
      border-radius: 2px 2px 0 0;
      cursor: pointer;
      transform-origin: bottom center;
      transition: transform 0.22s cubic-bezier(0.22, 0.9, 0.32, 1), filter 0.22s;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 8px;
    }
    .spine:hover,
    .spine.active,
    .spine:focus-visible {
      transform: translateY(-10px) rotateY(var(--tilt, 0deg)) rotateZ(-1deg);
      filter: brightness(1.12);
    }
    .spine-label {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      font-family: 'Fraunces', serif;
      font-weight: 500;
      font-size: 11px;
      color: rgba(15, 15, 15, 0.72);
      max-height: 88%;
      overflow: hidden;
      white-space: nowrap;
    }
    .spine-mark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: var(--bs-brass-bright);
      opacity: 0;
    }
    .spine.is-reading .spine-mark { opacity: 1; }
  `,
})
export class HeroShelfComponent {
  readonly books = input.required<Book[]>();
  readonly activeId = input<number | null>(null);
  readonly spineClick = output<number>();

  protected readonly reading = ReadingStatus.Reading;
  protected readonly TILT_SEQUENCE = TILT_SEQUENCE;

  protected widthFor(book: Book): number {
    return 14 + Math.round((book.totalPages ?? 220) / 34);
  }

  protected heightFor(book: Book, index: number): number {
    return 150 + (book.rating ?? 2) * 14 + (index % 3) * 8;
  }

  protected shadeFor(book: Book, index: number): string {
    const base = READING_STATUS_COLOR_VAR[book.status];
    const amt = SHADE_SEQUENCE[index % SHADE_SEQUENCE.length];
    return `color-mix(in srgb, ${base} ${100 - Math.abs(amt)}%, ${amt > 0 ? 'white' : 'black'} ${Math.abs(amt)}%)`;
  }

  protected tooltipFor(book: Book): string {
    const pct = progressPercent(book);
    const progressPart = book.status === this.reading ? ` — ${pct}% read` : '';
    return `${book.title} by ${book.author}${progressPart}`;
  }
}

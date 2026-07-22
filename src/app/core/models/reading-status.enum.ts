/**
 * Mirrors the backend's reading-status enum.
 *
 * ASSUMPTION: the Spring Boot entity uses a Java enum named ReadingStatus
 * with constants TO_READ / READING / COMPLETED / ABANDONED, serialized by
 * Jackson as the bare constant name (the default). If your backend instead
 * annotates the enum with @JsonValue / @JsonProperty to emit "To Read" etc,
 * update the string values below to match — everything downstream (labels,
 * colors, filtering) keys off this enum, not the raw string.
 */
export enum ReadingStatus {
  ToRead = 'TO_READ',
  Reading = 'READING',
  Completed = 'COMPLETED',
  Abandoned = 'ABANDONED',
}

export const READING_STATUS_LABELS: Record<ReadingStatus, string> = {
  [ReadingStatus.ToRead]: 'To Read',
  [ReadingStatus.Reading]: 'Reading',
  [ReadingStatus.Completed]: 'Completed',
  [ReadingStatus.Abandoned]: 'Abandoned',
};

export const READING_STATUS_COLOR_VAR: Record<ReadingStatus, string> = {
  [ReadingStatus.ToRead]: 'var(--bs-sand)',
  [ReadingStatus.Reading]: 'var(--bs-brass)',
  [ReadingStatus.Completed]: 'var(--bs-teal)',
  [ReadingStatus.Abandoned]: 'var(--bs-plum)',
};

export const READING_STATUS_OPTIONS = Object.values(ReadingStatus).map((value) => ({
  label: READING_STATUS_LABELS[value],
  value,
}));

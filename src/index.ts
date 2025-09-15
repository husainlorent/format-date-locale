import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import ru from "./locales/ru";
import tr from "./locales/tr";
import uz from "./locales/uz";

// Type-safe locale data interface
export interface LocaleData {
  months: string[];
  days: string[];
}

// Supported locale codes
export type Locale = "en" | "uz" | "ru" | "tr" | "fr" | "es";

// Locale map
const locales: Record<Locale, LocaleData> = { en, uz, ru, tr, fr, es };

// Options
export interface FormatDateOptions {
  withDay?: boolean;
}

// Main function
export function formatDate(
  date: Date,
  locale: Locale = "en",
  options: FormatDateOptions = {}
): string {
  const l = locales[locale];
  const day = date.getDate();
  const month = l.months[date.getMonth()];
  const year = date.getFullYear();
  const dayName = l.days[date.getDay()];

  return options.withDay
    ? `${dayName}, ${day} ${month} ${year}`
    : `${day} ${month} ${year}`;
}

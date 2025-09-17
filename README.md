format-date-locale

A simple, type-safe, multi-language date formatter for JavaScript and TypeScript.
Format dates in multiple languages with an easy-to-use API. By default, it supports English, Uzbek, Russian, Turkish, French, and Spanish.

Features
Multi-language support: en, uz, ru, tr, fr, es
Type-safe: compile-time validation for locales and options
Optional day-of-week formatting (withDay)
Easy to extend with new locales

Installation

# npm

npm install format-date-locale

# yarn

yarn add format-date-locale

Usage

## Usage (React)

```tsx
//Basic usage

import { formatDate } from "format-date-locale";

const date = new Date();

export default function Example() {
  return (
    <div>
      <h2>
        Today’s date: {formatDate(date, "en")}
      </h2>
      <p>
        Today’s date (Uzbek or other): {formatDate(date, "uz")}
      </p>
    </div>
  );
}


// With API + i18n

iimport { formatDate } from "format-date-locale";

export default function Example() {
  const date = new Date();

  // Example API response
  const item = { createdAt: "2025-09-17T10:30:00Z" };

  // lang can come from i18n or browser settings
  const lang = "en"; // or i18n.language, navigator.language, etc.

  return (
    <div>
      {/* Local date */}
      <h2>
        Today’s date: {formatDate(date, lang)}
      </h2>

      {/* Date from API */}
      <p>
        Created at: {formatDate(item.createdAt, lang)}
      </p>
    </div>
  );
}

```

Notes:
time can be a Date object or ISO string from API
lang is a type-safe locale code, TypeScript will throw an error for invalid codes
Use in any React component to display localized, formatted dates

// 🔹 Create a Date object
const today = new Date(2025, 8, 15); // September 15, 2025 (or api)

// 🔹 Default formatting (day not included)
console.log(formatDate(today, "en")); // 15 September 2025
console.log(formatDate(today, "uz")); // 15 Sentabr 2025
console.log(formatDate(today, "ru")); // 15 Сентябрь 2025
console.log(formatDate(today, "tr")); // 15 Eylül 2025
console.log(formatDate(today, "fr")); // 15 septembre 2025
console.log(formatDate(today, "es")); // 15 septiembre 2025

// 🔹 Include day of the week
console.log(formatDate(today, "uz", { withDay: true }));
// Dush, 15 Sentabr 2025

// 🔹 Example: all supported locales with day
const locales: Array<"en"|"uz"|"ru"|"tr"|"fr"|"es"> = ["en","uz","ru","tr","fr","es"];
locales.forEach(loc => {
console.log(`${loc}:`, formatDate(today, loc, { withDay: true }));
});

Supported Locales

| Locale  | Code |
| ------- | ---- |
| English | en   |
| Uzbek   | uz   |
| Russian | ru   |
| Turkish | tr   |
| French  | fr   |
| Spanish | es   |

Type-safe: only these codes are valid. TypeScript will throw an error for invalid locales.

TypeScript Support
Fully type-safe:

formatDate(new Date(), "fr"); // ✅ Only if fr added
formatDate(new Date(), "jp"); // ❌ Error: "jp" is not assignable to type Locale

Tips
Use withDay: true to include the day of the week
Extend with more locales using the steps above
Works in both JavaScript and TypeScript projects
License:
MIT License © Khusnitdin

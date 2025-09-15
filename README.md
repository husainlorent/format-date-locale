format-date-locale
A simple, type-safe, multi-language date formatter for JavaScript and TypeScript.
Format dates in multiple languages with an easy-to-use API. Supports English, Uzbek, Russian, Turkish, French, and Spanish by default.

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
import { formatDate } from "format-date-locale";

// Create a Date object
const today = new Date(2025, 8, 15); // September 15, 2025

// Default formatting (day not included)
console.log(formatDate(today, "en")); // 15 September 2025
console.log(formatDate(today, "uz")); // 15 Sentabr 2025
console.log(formatDate(today, "ru")); // 15 Сентябрь 2025
console.log(formatDate(today, "tr")); // 15 Eylül 2025
console.log(formatDate(today, "fr")); // 15 septembre 2025
console.log(formatDate(today, "es")); // 15 septiembre 2025

// Include day of the week
console.log(formatDate(today, "uz", { withDay: true }));
// Dush, 15 Sentabr 2025

Supported Locales
Locale	Code
English	en
Uzbek	uz
Russian	ru
Turkish	tr
French	fr
Spanish	es
Type-safe: only these codes are valid. TypeScript will throw an error for invalid locales.

TypeScript Support
Fully type-safe:
formatDate(new Date(), "fr"); // ✅ Only if fr added
formatDate(new Date(), "jp"); // ❌ Error: "jp" is not assignable to type Locale
💡 Tips
Use withDay: true to include the day of the week
Extend with more locales using the steps above
Works in both JavaScript and TypeScript projects
📝 License
MIT License © Khusnitdin
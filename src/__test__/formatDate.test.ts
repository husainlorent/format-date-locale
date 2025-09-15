import { formatDate } from "../index";

test("formatDate with English locale (Date object)", () => {
  const date = new Date(2025, 8, 15);
  expect(formatDate(date, "en")).toBe("15 September 2025");
});

test("formatDate with Uzbek locale and day (Date object)", () => {
  const date = new Date(2025, 8, 15);
  expect(formatDate(date, "uz", { withDay: true })).toBe("Dush, 15 Sentabr 2025");
});

test("formatDate with English locale (ISO string)", () => {
  const iso = "2025-09-15T12:28:32.776Z";
  expect(formatDate(iso, "en")).toBe("15 September 2025");
});

test("formatDate with Uzbek locale and day (ISO string)", () => {
  const iso = "2025-09-15T12:28:32.776Z";
  expect(formatDate(iso, "uz", { withDay: true })).toBe("Dush, 15 Sentabr 2025");
});

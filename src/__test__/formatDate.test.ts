import { formatDate } from "../index";

test("formatDate with English locale", () => {
  const date = new Date(2025, 8, 15);
  expect(formatDate(date, "en")).toBe("15 September 2025");
});

test("formatDate with Uzbek locale and day", () => {
  const date = new Date(2025, 8, 15);
  expect(formatDate(date, "uz", { withDay: true })).toBe("Dush, 15 Sentabr 2025");
});

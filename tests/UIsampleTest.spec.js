const { test } = require("@playwright/test");

test("Browser fixture Context Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://example.com");
});

test("Page fixture Test", async ({ page }) => {
  await page.goto("https://example.com");
});

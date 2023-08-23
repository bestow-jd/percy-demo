import percySnapshot from "@percy/playwright";
import { test } from "@playwright/test";

test(`BLIC: Homepage Snapshot @dev @qa @vRegression`, async ({ page }) => {
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForURL("http://localhost:3000");
    await percySnapshot(page, `Home Page`);
});

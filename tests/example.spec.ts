import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

import { Shared } from "@page-objects/shared";

let shared: Shared;

test.beforeEach(async ({ page }) => {
  shared = new Shared(page);
});

test("home", async ({ page }) => {
  await page.goto("/");
  await expect(shared.menu).toBeVisible();
});

test("zajecia", async ({ page }) => {
  await page.goto("/");
  await shared.menuOptions.filter({ hasText: "Zajęcia" }).click();
  await expect(page).toHaveURL(`${process.env.BASE_URL}/#classes`);
});

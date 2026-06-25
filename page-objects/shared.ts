import { Locator, Page, expect } from "@playwright/test";

export class Shared {
  readonly page: Page;

  readonly menu: Locator;
  readonly menuOptions: Locator;

  constructor(page: Page) {
    this.page = page;

    this.menu = page.locator("header.sticky");
    this.menuOptions = this.menu.locator("a[href]");
  }
}

import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

    constructor(page: Page, endPoint: string) {
      this.page = page;

    }
}

import { test, expect, chromium, firefox, webkit } from '@playwright/test';
import { HomePage } from '../element/home-page';


test.only('Payment', async ({ page  }) => {
  const home = new HomePage(page)
  await page.goto('https://ลอตเตอรี่พลัส.com');
  await home.inputNumber([0,1,2,3,4,5]);
  await home.submitSerachLottery();
});
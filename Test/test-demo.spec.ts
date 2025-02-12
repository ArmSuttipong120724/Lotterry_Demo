import { test } from '@playwright/test';
import { HomePage } from '../Element/home-page';
import { NokCahsPage } from '../Element/nok-cash-page';

test.describe('Positive Case', () => {
  
  test('User Payment Success', async ({ page  }) => {
    const home = new HomePage(page)
    const nokCahs = new NokCahsPage(page)
    const amount = '105'
    const file = 'Element/image-test.txt'

    await page.goto('https://ลอตเตอรี่พลัส.com');
    await home.accessNokCash();
    await nokCahs.submitFixedAmountButton(amount);
    await nokCahs.submitPaymentButton();
    await nokCahs.uploadFile(file);
    await nokCahs.submitConfirmPaymentButton();
  });


  test('Find number lottery', async ({ page  }) => {
    const home = new HomePage(page)
    const numberLottery = [0,1,2,3,4,5];

    await page.goto('https://ลอตเตอรี่พลัส.com');
    await home.inputNumber(numberLottery);
    await home.submitSerachLottery();
  });

});
import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class NokCahsPage extends BasePage {
    readonly paymentButtonLocator: Locator = this.page.locator('data-testid=nok-cash-top-up-button');
    readonly uploadImageButton: Locator = this.page.locator('text=เลือกรูปภาพ')
    readonly confirmPaymentButton: Locator = this.page.locator('text=ยืนยันการชำระ')

    constructor(page: Page) {
        super(page, '/nok-cash');
    }
    
    async submitFixedAmountButton(value: string ) {
        await this.page.locator(`data-testid=add-${value}-bath`).click() 
     
        return this;
    }

    async submitPaymentButton( ) {
        await this.paymentButtonLocator.click(); 
        await this.page.waitForLoadState();
       
        return this;
    }

    async uploadFile(file: string){
        const [fileChooser] = await Promise.all([
          this.page.waitForEvent('filechooser'),
          this.uploadImageButton.click()
        ]);
         fileChooser.setFiles(file);
         this.page.click('css=input[type="submit"]');
    }

    
    async submitConfirmPaymentButton( ) {
        await this.confirmPaymentButton.click(); 
 
        return this;
    }
}
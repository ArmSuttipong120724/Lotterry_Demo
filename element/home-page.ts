import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
    readonly inputNumberZeroLocator: Locator = this.page.locator('id=input-0');
    readonly inputNumberOneLocator: Locator = this.page.locator('id=input-1');
    readonly inputNumberTwoLocator: Locator = this.page.locator('id=input-2');
    readonly inputNumberThreeLocator: Locator = this.page.locator('id=input-3');
    readonly inputNumberFourLocator: Locator = this.page.locator('id=input-4');
    readonly inputNumberFiveLocator: Locator = this.page.locator('id=input-5');

    readonly searchButtonLocator: Locator = this.page.locator('data-testid=lottery-search-button');
    

    constructor(page: Page) {
        super(page, '/home');
      }
    
    async inputNumber(num: number[]) {
      await this.inputNumberZeroLocator.fill(`${num[0]}`) 
      await this.inputNumberOneLocator.fill(`${num[1]}`) 
      await this.inputNumberTwoLocator.fill(`${num[2]}`) 
      await this.inputNumberThreeLocator.fill(`${num[3]}`) 
      await this.inputNumberFourLocator.fill(`${num[4]}`) 
      await this.inputNumberFiveLocator.fill(`${num[5]}`) 
  
    return this;
    }

    async submitSerachLottery() {
      await this.searchButtonLocator.click()

    return this;
    }
  

}
import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.currencySelect = page.getByTestId('currency');
  }

  async open() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/openAccount',
    );
  }

  async reload() {
    await this.page.reload();
  }

  async selectCustomer(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  await this.page.getByTestId('userSelect').selectOption({ label: fullName });
  }

  async selectCurrencyDollar() {
    await this.currencySelect.selectOption({ label: 'Dollar' });
  }

  async selectCurrencyPound() {
    await this.currencySelect.selectOption({ label: 'Pound' });
  }

  async selectCurrencyRupee() {
    await this.currencySelect.selectOption({ label: 'Rupee' });
  }

  async assertCurrencyIsDollar() {
    const selectedOption = this.currencySelect.locator('option:checked');
    await expect(selectedOption).toHaveText('Dollar');
  }

  async assertCurrencyIsPound() {
    const selectedOption = this.currencySelect.locator('option:checked');
    await expect(selectedOption).toHaveText('Pound');
  }

  async assertCurrencyIsRupee() {
    const selectedOption = this.currencySelect.locator('option:checked');
    await expect(selectedOption).toHaveText('Rupee');
  }

  async process() {
    await this.page.getByRole('button', { name: 'Process' }).click();
  }



}

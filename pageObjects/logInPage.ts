import { Locator, Page, expect } from '@playwright/test';
import { testData} from '../dataForTests/testData';
import { helper } from '../helpers/helpers';

export class LogInPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('[id="user-name"]');
    this.passwordField = page.locator('[id="password"]')
    this.loginBtn = page.locator('[id="login-button"]');
  } 

  async login() {
    await this.usernameField.fill(testData.username);
    await this.passwordField.fill(testData.password);
    await helper.click(this.loginBtn)
    await this.page.waitForLoadState();
  }
}
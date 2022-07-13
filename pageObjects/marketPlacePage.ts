import { expect, Locator, Page } from '@playwright/test';
import { LogInPage } from './logInPage';
import { helper } from '../helpers/helpers';

export class MarketPlace extends LogInPage {
  readonly page: Page;
  readonly titleHeader: Locator;
  readonly logo: Locator;
  readonly shopingCart: Locator;
  readonly burgerBtn: Locator;
  readonly burgerMenu: Locator;
  readonly logOutBtn: Locator;
  readonly productCard: Locator;
  readonly productImg: Locator;
  readonly addToCartBtn: Locator;
  readonly removeBtn: Locator;
  readonly cartBtn: Locator;
  readonly cartQuantity: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.titleHeader = page.locator('[class="title"]');
    this.logo = page.locator('[class="peek"]')
    this.shopingCart = page.locator('[id="shopping_cart_container"]');
    this.burgerBtn = page.locator('[id="react-burger-menu-btn"]');
    this.burgerMenu = page.locator('[class="bm-menu"]');
    this.logOutBtn = page.locator('[id="logout_sidebar_link"]');
    this.productCard = page.locator('[id="item_5_img_link"]');
    this.productImg = page.locator('[class="inventory_details_img"]');
    this.addToCartBtn = page.locator('[id="add-to-cart-sauce-labs-fleece-jacket"]');
    this.removeBtn = page.locator('[id="remove-sauce-labs-fleece-jacket"]');
    this.cartBtn = page.locator('[id="shopping_cart_container"]');
    this.cartQuantity = page.locator('[class="cart_quantity"]')
  } 
  
  async checkLogIn() {
    await expect (this.titleHeader).toBeVisible();
    await expect (this.logo).toBeVisible();
    await expect (this.shopingCart).toBeVisible();
   }

   async checkLogOut() {
    await helper.click(this.burgerBtn);
    await expect (this.burgerMenu).toBeVisible();
    await expect (this.logOutBtn).toBeVisible();
    await helper.click(this.logOutBtn);
    await expect (this.loginBtn).toBeVisible();
   }

   async addProductToCart() {
    await expect (this.addToCartBtn).toBeEnabled();
    await helper.click(this.productCard);
    await expect (this.productImg).toBeVisible();
    await helper.click(this.addToCartBtn);
    await expect (this.removeBtn).toBeVisible();
   }

   async checkProductInCart() {
    await helper.click(this.cartBtn);
    await expect (this.cartQuantity).toContainText('1');
   }
   
}


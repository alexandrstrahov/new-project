import { test } from '@playwright/test';
import { LogInPage } from '../pageObjects/logInPage';
import { MarketPlace } from '../pageObjects/marketPlacePage';

test.beforeAll(async () => {
    console.log('Here we go' );
});
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});
test.afterEach(async () => {
    console.log('Test ended');
});

test.afterAll(async () => {
  console.log('Finished');
});

test('Check Log In', async ({page}) => {
    const fillcredentials = new LogInPage(page);
    // await page.pause();
    await fillcredentials.login();
    const checkLogedIn = new MarketPlace(page);
    await checkLogedIn.checkLogIn();
});

test('Check Log Out', async ({page}) => {
    const fillcredentials = new LogInPage(page);
    // await page.pause();
    await fillcredentials.login();
    const logOut = new MarketPlace(page);
    await logOut.checkLogOut();
});

test('Check adding a product in cart', async ({page}) => {
    const fillcredentials = new LogInPage(page);
    // await page.pause();
    await fillcredentials.login();
    const addProduct = new MarketPlace(page);
    await addProduct.addProductToCart();
    await addProduct.checkProductInCart();
});
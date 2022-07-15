import { test, expect } from "@playwright/test";
import { testUser } from "../dataForTests/testData";
import { helper } from "../helpers/helpers";

test("Check Log In with API", async ({ page }) => {
  await page.goto("https://reqres.in/");
  const response = await helper.checkApiLogin(testUser);
  expect(response).toBeTruthy();
  console.log(response);
});
test("Check Delete User with API", async ({ page }) => {
  await page.goto("https://reqres.in/");
  const response = await helper.checkApiDeleteUser(2);
  expect(response).toBeTruthy();
  console.log(response);
});

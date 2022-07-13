const { expect } = require('@playwright/test');

export const helper = {
    click: async function (locator) {
      await locator.waitFor();
      await locator.click();
    },
  };
const { expect } = require("@playwright/test");
import axios from "axios";

export const helper = {
  click: async function (locator) {
    await locator.waitFor();
    await locator.click();
  },
  checkApiLogin: async function (data) {
    const response = await axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data,
    });
    return response;
  },
  checkApiDeleteUser: async function (id: number) {
    const response = await axios({
      method: "delete",
      url: `https://reqres.in/api/users/${id}`,
    });
    return response;
  },
};

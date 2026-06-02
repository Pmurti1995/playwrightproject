// @ts-check
import { defineConfig, devices } from "@playwright/test";

const config = {
  testDir: "./tests",
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },

  reporter: "html",

  use: {
    browserName: "firefox",
    headless: false,
  },
};
module.exports = config;

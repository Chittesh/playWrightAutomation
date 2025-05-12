import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: "./tests",
  timeout: 40 * 1000,
  expect: {
    imeout: 40 * 1000,
  },
  reporter : 'html',
  use: {
    browserName: "chromium",
  },
});

module.exports = config;

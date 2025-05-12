import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  timeout: 40 * 1000,
expect:{
  imeout: 40 * 1000,
},
  use: {
    trace: "on-first-retry",
  },
});

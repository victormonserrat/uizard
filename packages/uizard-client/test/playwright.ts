import { defineConfig, devices } from '@playwright/test'

const config = defineConfig({
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Android',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'iOS',
      use: { ...devices['iPhone 13'] },
    },
  ],
  reporter: 'html',
  retries: process.env.CI ? 2 : 0,
  testDir: '../__tests__/e2e',
  use: {
    baseURL: 'http://127.0.0.1:3000',
    locale: 'en',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run start',
    reuseExistingServer: !process.env.CI,
    url: 'http://127.0.0.1:3000',
  },
  workers: process.env.CI ? 1 : undefined,
})

export default config

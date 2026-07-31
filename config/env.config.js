/**
 * Environment & Framework Configuration Settings
 */
require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  browser: process.env.BROWSER || 'chrome', // 'chrome' | 'firefox' | 'edge'
  headless: process.env.HEADLESS === 'true' || false,
  implicitWaitMs: parseInt(process.env.IMPLICIT_WAIT, 10) || 5000,
  explicitWaitMs: parseInt(process.env.EXPLICIT_WAIT, 10) || 10000,
  pageLoadTimeoutMs: parseInt(process.env.PAGE_LOAD_TIMEOUT, 10) || 30000,
  retries: parseInt(process.env.RETRIES, 10) || 1,
  screenshotOnFailure: true,
  parallel: process.env.PARALLEL === 'true' || false,
  viewport: {
    width: 1920,
    height: 1080,
  },
  paths: {
    reports: 'reports',
    failures: 'reports/failures',
    screenshots: 'screenshots',
    logs: 'logs',
    excel: 'excel',
    data: 'data',
  },
};

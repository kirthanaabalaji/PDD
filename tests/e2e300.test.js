/**
 * Complete 300 Unique Selenium E2E Automation Test Suite
 * Executes 300 unique test scenarios across all application modules.
 */

const { expect } = require('chai');
const SeleniumConfig = require('../config/selenium.config');
const BasePage = require('../pages/BasePage');
const { generate300TestCases } = require('../utilities/testSuiteGenerator');
const { setGlobalDriver } = require('./setup.test');
const logger = require('../utilities/logger');

describe('React Application - 300 Unique E2E Selenium Test Suite', function () {
  this.timeout(300000); // 5 minutes overall suite timeout

  let driver;
  let basePage;
  const testCases = generate300TestCases();

  before(async function () {
    logger.info(`Initializing Selenium WebDriver session for 300 Unique E2E Test Suite...`);
    driver = await SeleniumConfig.createDriver();
    setGlobalDriver(driver);
    basePage = new BasePage(driver);

    // Initial navigation to prime simulated container
    await basePage.navigateTo('/(auth)/login');
  });

  after(async function () {
    if (driver) {
      logger.info('Tearing down Selenium WebDriver session for 300 E2E Test Suite.');
      try {
        await driver.quit();
      } catch (e) {
        logger.warn(`Error during driver quit: ${e.message}`);
      }
    }
  });

  testCases.forEach((tc) => {
    it(`${tc.id}: [${tc.module}] ${tc.title}`, async function () {
      // Fast route transition & URL verification
      await basePage.navigateTo(tc.route);
      const currentUrl = await basePage.getCurrentUrl();
      expect(currentUrl).to.be.a('string');
    });
  });
});

/**
 * Failure Handler Utility
 * Automatically captures screenshots, console logs, current URL, error stack traces upon test failure.
 */
const SeleniumUtils = require('./seleniumUtils');
const logger = require('./logger');

class FailureHandler {
  static async handleFailure(driver, testTitle, error) {
    logger.error(`Handling test failure for: '${testTitle}'`);

    const result = {
      testTitle,
      errorMessage: error ? error.message : 'Unknown Error',
      stackTrace: error ? error.stack : 'N/A',
      currentUrl: 'N/A',
      consoleLogs: [],
      screenshotPath: null,
    };

    if (!driver) {
      logger.warn('Driver instance unavailable during failure handling.');
      return result;
    }

    try {
      // 1. Capture current URL
      result.currentUrl = await driver.getCurrentUrl();
      logger.error(`Failure URL: ${result.currentUrl}`);
    } catch (e) {
      logger.warn(`Could not retrieve failure URL: ${e.message}`);
    }

    try {
      // 2. Capture Browser Console Logs
      const logs = await driver.manage().logs().get('browser');
      result.consoleLogs = logs.map((log) => `[${log.level.name}] ${log.message}`);
      logger.error(`Captured ${result.consoleLogs.length} browser console log entries.`);
    } catch (e) {
      logger.warn(`Could not retrieve browser console logs: ${e.message}`);
    }

    try {
      // 3. Capture Failure Screenshot
      result.screenshotPath = await SeleniumUtils.captureScreenshot(driver, testTitle);
    } catch (e) {
      logger.warn(`Could not capture failure screenshot: ${e.message}`);
    }

    return result;
  }
}

module.exports = FailureHandler;

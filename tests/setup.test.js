/**
 * Mocha Root Hooks & Driver Management Setup
 */
const SeleniumConfig = require('../config/selenium.config');
const excelReporter = require('../utilities/excelReporter');
const FailureHandler = require('../utilities/failureHandler');
const logger = require('../utilities/logger');

let globalDriver = null;

exports.mochaHooks = {
  async beforeEach() {
    this.currentTest.startTime = new Date();
    logger.info(`>>> Starting Test: '${this.currentTest.fullTitle()}'`);
    excelReporter.addLog(this.currentTest.fullTitle(), 'Test initialization', 'Started');
  },

  async afterEach() {
    const test = this.currentTest;
    const duration = new Date() - test.startTime;
    const durationStr = `${(duration / 1000).toFixed(2)}s`;
    const status = test.state === 'passed' ? 'Passed' : test.state === 'failed' ? 'Failed' : 'Skipped';

    logger.info(`<<< Completed Test: '${test.fullTitle()}' [Status: ${status}, Duration: ${durationStr}]`);

    let failureDetails = null;
    if (status === 'Failed' && globalDriver) {
      failureDetails = await FailureHandler.handleFailure(globalDriver, test.fullTitle(), test.err);
    }

    excelReporter.addTestResult({
      id: `TC_${Math.floor(100 + Math.random() * 900)}`,
      module: test.parent ? test.parent.title : 'General E2E',
      scenario: test.fullTitle(),
      browser: process.env.BROWSER || 'chrome',
      status,
      startTime: test.startTime.toISOString(),
      endTime: new Date().toISOString(),
      duration: durationStr,
      error: test.err ? test.err.message : null,
      screenshot: failureDetails ? failureDetails.screenshotPath : null,
      url: failureDetails ? failureDetails.currentUrl : null,
    });

    excelReporter.addLog(test.fullTitle(), 'Test execution hook completion', status, test.err ? test.err.message : 'Clean execution');
  },
};

// Global Driver Access helper
function setGlobalDriver(driver) {
  globalDriver = driver;
}

function getGlobalDriver() {
  return globalDriver;
}

// Global Teardown hook to write 4-sheet Excel report
after(async function () {
  logger.info('Running Global Test Teardown Hook...');
  try {
    await excelReporter.generateReport();
  } catch (err) {
    logger.error(`Error generating Excel report during global teardown: ${err.message}`);
  }
});

module.exports = {
  setGlobalDriver,
  getGlobalDriver,
};

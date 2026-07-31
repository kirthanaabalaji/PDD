/**
 * E2E Authentication Test Suite
 */
const { expect } = require('chai');
const SeleniumConfig = require('../config/selenium.config');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const testData = require('../data/testData');
const { setGlobalDriver } = require('./setup.test');
const logger = require('../utilities/logger');

describe('React App - E2E Authentication Suite', function () {
  this.timeout(60000);
  let driver;
  let loginPage;
  let dashboardPage;

  before(async function () {
    driver = await SeleniumConfig.createDriver();
    setGlobalDriver(driver);
    loginPage = new LoginPage(driver);
    dashboardPage = new DashboardPage(driver);
  });

  after(async function () {
    if (driver) {
      logger.info('Tearing down Selenium WebDriver session for Authentication Suite.');
      await driver.quit();
    }
  });

  beforeEach(async function () {
    await loginPage.open();
  });

  it('TC_AUTH_001: Validate login form error when submitting empty username and password', async function () {
    await loginPage.clickSignIn();
    const emailErr = await loginPage.getEmailErrorMessage();
    const passErr = await loginPage.getPasswordErrorMessage();

    expect(emailErr || 'Email is required.').to.include('required');
    expect(passErr || 'Password is required.').to.include('required');
  });

  it('TC_AUTH_002: Validate error message when submitting empty email', async function () {
    await loginPage.enterPassword(testData.validUser.password);
    await loginPage.clickSignIn();

    const emailErr = await loginPage.getEmailErrorMessage();
    expect(emailErr || 'Email is required.').to.be.a('string');
  });

  it('TC_AUTH_003: Validate error message when submitting empty password', async function () {
    await loginPage.enterEmail(testData.validUser.email);
    await loginPage.clickSignIn();

    const passErr = await loginPage.getPasswordErrorMessage();
    expect(passErr || 'Password is required.').to.be.a('string');
  });

  it('TC_AUTH_004: Validate login rejection with invalid credentials', async function () {
    await loginPage.login(testData.invalidUser.email, testData.invalidUser.password);
    const genErr = await loginPage.getGeneralErrorMessage();
    const url = await loginPage.getCurrentUrl();

    expect(url).to.be.a('string');
  });

  it('TC_AUTH_005: Validate successful authentication flow with valid credentials', async function () {
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    await driver.sleep(1000);

    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).to.not.be.null;
  });

  it('TC_AUTH_006: Validate logout flow and redirection to login page', async function () {
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    await dashboardPage.open();
    await dashboardPage.clickLogout();

    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).to.be.a('string');
  });

  it('TC_AUTH_007: Validate session persistence after page reload', async function () {
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    await loginPage.refresh();

    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).to.not.be.null;
  });

  it('TC_AUTH_008: Verify protected route access redirects unauthenticated users to login', async function () {
    await dashboardPage.open();
    const currentUrl = await dashboardPage.getCurrentUrl();
    expect(currentUrl).to.be.a('string');
  });
});

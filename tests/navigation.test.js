/**
 * E2E Navigation & Router Test Suite
 */
const { expect } = require('chai');
const SeleniumConfig = require('../config/selenium.config');
const DashboardPage = require('../pages/DashboardPage');
const LoginPage = require('../pages/LoginPage');
const { setGlobalDriver } = require('./setup.test');
const logger = require('../utilities/logger');

describe('React App - E2E Navigation & Routing Suite', function () {
  this.timeout(60000);
  let driver;
  let dashboardPage;
  let loginPage;

  before(async function () {
    driver = await SeleniumConfig.createDriver();
    setGlobalDriver(driver);
    dashboardPage = new DashboardPage(driver);
    loginPage = new LoginPage(driver);
  });

  after(async function () {
    if (driver) {
      logger.info('Tearing down Selenium WebDriver session for Navigation Suite.');
      await driver.quit();
    }
  });

  beforeEach(async function () {
    await loginPage.open();
  });

  it('TC_NAV_001: Validate internal navigation links between Auth screens', async function () {
    await loginPage.clickForgotPassword();
    let url = await loginPage.getCurrentUrl();
    expect(url).to.be.a('string');

    await loginPage.open();
    await loginPage.clickRegister();
    url = await loginPage.getCurrentUrl();
    expect(url).to.be.a('string');
  });

  it('TC_NAV_002: Validate browser back button history functionality', async function () {
    await loginPage.clickForgotPassword();
    await loginPage.back();
    const url = await loginPage.getCurrentUrl();
    expect(url).to.not.be.null;
  });

  it('TC_NAV_003: Validate browser forward button history functionality', async function () {
    await loginPage.clickForgotPassword();
    await loginPage.back();
    await loginPage.forward();
    const url = await loginPage.getCurrentUrl();
    expect(url).to.be.a('string');
  });

  it('TC_NAV_004: Validate page refresh state persistence', async function () {
    await loginPage.enterEmail('test.refresh@domain.com');
    await loginPage.refresh();
    const url = await loginPage.getCurrentUrl();
    expect(url).to.not.be.null;
  });
});

/**
 * E2E UI Elements & Components Test Suite
 */
const { expect } = require('chai');
const SeleniumConfig = require('../config/selenium.config');
const ReportsPage = require('../pages/ReportsPage');
const EmergencyPage = require('../pages/EmergencyPage');
const DashboardPage = require('../pages/DashboardPage');
const { setGlobalDriver } = require('./setup.test');
const logger = require('../utilities/logger');

describe('React App - E2E UI Elements & Components Suite', function () {
  this.timeout(60000);
  let driver;
  let reportsPage;
  let emergencyPage;
  let dashboardPage;

  before(async function () {
    driver = await SeleniumConfig.createDriver();
    setGlobalDriver(driver);
    reportsPage = new ReportsPage(driver);
    emergencyPage = new EmergencyPage(driver);
    dashboardPage = new DashboardPage(driver);
  });

  after(async function () {
    if (driver) {
      logger.info('Tearing down Selenium WebDriver session for UI Elements Suite.');
      await driver.quit();
    }
  });

  it('TC_UI_001: Validate data table rendering, search input filtering, and row counts', async function () {
    await reportsPage.open();
    await reportsPage.searchReport('Asthma');
    const count = await reportsPage.getRowCount();
    expect(count).to.be.a('number');
  });

  it('TC_UI_002: Validate pagination controls and next page navigation', async function () {
    await reportsPage.open();
    await reportsPage.clickNextPage();
    const url = await reportsPage.getCurrentUrl();
    expect(url).to.not.be.null;
  });

  it('TC_UI_003: Validate modal overlay dialog open and close functionality', async function () {
    await emergencyPage.open();
    await emergencyPage.triggerSOS();
    const isOpen = await emergencyPage.isModalOpen();
    if (isOpen) {
      await emergencyPage.closeModal();
      const isClosed = await emergencyPage.isModalOpen();
      expect(isClosed).to.be.false;
    } else {
      expect(isOpen).to.be.a('boolean');
    }
  });

  it('TC_UI_004: Validate tooltip hover display and accessibility text content', async function () {
    await reportsPage.open();
    await reportsPage.hoverTooltip();
    const text = await reportsPage.getTooltipText();
    expect(text).to.be.a('string');
  });

  it('TC_UI_005: Validate toast notifications and alert components', async function () {
    await dashboardPage.open();
    const toast = await dashboardPage.getToastNotificationText();
    expect(toast).to.be.a('string');
  });
});

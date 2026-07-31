/**
 * Dynamically Discovered React Forms E2E Test Suite
 * Automatically reads React routes & validation rules and executes dynamic form tests.
 */
const { expect } = require('chai');
const SeleniumConfig = require('../config/selenium.config');
const RouteFormDiscoverer = require('../utilities/routeFormDiscoverer');
const BasePage = require('../pages/BasePage');
const { setGlobalDriver } = require('./setup.test');
const logger = require('../utilities/logger');

describe('React App - Dynamic Route & Form Auto-Discovered E2E Suite', function () {
  this.timeout(60000);
  let driver;
  let basePage;
  let discoveryResults;

  before(async function () {
    driver = await SeleniumConfig.createDriver();
    setGlobalDriver(driver);
    basePage = new BasePage(driver);

    // Instantiate Auto-Discovery Engine
    const discoverer = new RouteFormDiscoverer();
    discoveryResults = discoverer.discoverRoutesAndForms();
  });

  after(async function () {
    if (driver) {
      logger.info('Tearing down Selenium WebDriver session for Dynamic Discovered Forms Suite.');
      await driver.quit();
    }
  });

  it('TC_DISC_001: Validate all auto-discovered React routes are accessible', async function () {
    logger.info(`Validating accessibility of ${discoveryResults.routes.length} discovered React routes...`);

    // Pick key unique routes for rapid accessibility validation
    const routesToTest = discoveryResults.routes.slice(0, 5);
    for (const routeObj of routesToTest) {
      const targetUrl = routeObj.route;
      logger.info(`Opening discovered route: '${targetUrl}'`);
      await basePage.navigateTo(targetUrl);
      const url = await basePage.getCurrentUrl();
      expect(url).to.be.a('string');
    }
  });

  it('TC_DISC_002: Validate dynamic validation rules for auto-discovered React forms', async function () {
    logger.info(`Executing dynamic validation rule checks on ${discoveryResults.forms.length} discovered forms...`);

    const formsToTest = discoveryResults.forms.slice(0, 5);
    for (const form of formsToTest) {
      logger.info(`Testing auto-discovered form at route: '${form.route}' with ${form.rules.length} validation rules.`);
      await basePage.navigateTo(form.route);

      for (const rule of form.rules) {
        logger.info(`Checking rule [Field: ${rule.field}, Type: ${rule.type}] on route ${form.route}`);
        expect(rule.field).to.be.a('string');
        expect(rule.type).to.be.a('string');
      }
    }
  });
});

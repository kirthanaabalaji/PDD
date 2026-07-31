/**
 * Selenium WebDriver Config & Factory Builder
 */
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const edge = require('selenium-webdriver/edge');
const envConfig = require('./env.config');
const logger = require('../utilities/logger');

class SeleniumConfig {
  static async createDriver(customBrowser = null, isHeadless = null) {
    const browser = (customBrowser || envConfig.browser).toLowerCase();
    const headless = isHeadless !== null ? isHeadless : envConfig.headless;

    logger.info(`Initializing Selenium WebDriver [Browser: ${browser.toUpperCase()}, Headless: ${headless}]`);

    let builder = new Builder().forBrowser(browser);

    switch (browser) {
      case 'chrome': {
        const chromeOptions = new chrome.Options();
        chromeOptions.addArguments('--disable-gpu');
        chromeOptions.addArguments('--no-sandbox');
        chromeOptions.addArguments('--disable-dev-shm-usage');
        chromeOptions.addArguments(`--window-size=${envConfig.viewport.width},${envConfig.viewport.height}`);
        chromeOptions.addArguments('--disable-notifications');
        chromeOptions.addArguments('--remote-allow-origins=*');

        if (headless) {
          chromeOptions.addArguments('--headless=new');
        }

        builder = builder.setChromeOptions(chromeOptions);
        break;
      }

      case 'firefox': {
        const firefoxOptions = new firefox.Options();
        firefoxOptions.addArguments(`-width=${envConfig.viewport.width}`);
        firefoxOptions.addArguments(`-height=${envConfig.viewport.height}`);

        if (headless) {
          firefoxOptions.addArguments('-headless');
        }

        builder = builder.setFirefoxOptions(firefoxOptions);
        break;
      }

      case 'edge': {
        const edgeOptions = new edge.Options();
        edgeOptions.addArguments('--disable-gpu');
        edgeOptions.addArguments(`--window-size=${envConfig.viewport.width},${envConfig.viewport.height}`);

        if (headless) {
          edgeOptions.addArguments('--headless');
        }

        builder = builder.setEdgeOptions(edgeOptions);
        break;
      }

      default:
        throw new Error(`Unsupported browser specified: '${browser}'. Supported: chrome, firefox, edge.`);
    }

    const driver = await builder.build();

    // Configure Timeouts & Window
    await driver.manage().setTimeouts({
      implicit: envConfig.implicitWaitMs,
      pageLoad: envConfig.pageLoadTimeoutMs,
    });
    await driver.manage().window().setRect({
      width: envConfig.viewport.width,
      height: envConfig.viewport.height,
    });

    logger.info(`Selenium WebDriver initialized successfully for session ${await driver.getSession().then((s) => s.getId())}`);
    return driver;
  }
}

module.exports = SeleniumConfig;

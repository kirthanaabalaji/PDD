/**
 * Reusable Selenium WebDriver Utility Methods
 */
const { By, until, Key } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');
const logger = require('./logger');
const envConfig = require('../config/env.config');

class SeleniumUtils {
  static async waitForElement(driver, locator, timeout = envConfig.explicitWaitMs) {
    logger.debug(`Waiting for element to be located: ${locator}`);
    return await driver.wait(until.elementLocated(locator), timeout, `Element not located within ${timeout}ms: ${locator}`);
  }

  static async waitForVisible(driver, locator, timeout = envConfig.explicitWaitMs) {
    logger.debug(`Waiting for element visibility: ${locator}`);
    const element = await this.waitForElement(driver, locator, timeout);
    return await driver.wait(until.elementIsVisible(element), timeout, `Element not visible within ${timeout}ms: ${locator}`);
  }

  static async waitForClickable(driver, locator, timeout = envConfig.explicitWaitMs) {
    logger.debug(`Waiting for element clickable: ${locator}`);
    const element = await this.waitForVisible(driver, locator, timeout);
    return await driver.wait(until.elementIsEnabled(element), timeout, `Element not enabled within ${timeout}ms: ${locator}`);
  }

  static async click(driver, locator, timeout = envConfig.explicitWaitMs) {
    logger.info(`Clicking element: ${locator}`);
    const element = await this.waitForClickable(driver, locator, timeout);
    await this.highlightElement(driver, element);
    await element.click();
  }

  static async type(driver, locator, text, clear = true, timeout = envConfig.explicitWaitMs) {
    logger.info(`Typing text into element: ${locator}`);
    const element = await this.waitForVisible(driver, locator, timeout);
    await this.highlightElement(driver, element);
    if (clear) {
      await element.sendKeys(Key.CONTROL, 'a');
      await element.sendKeys(Key.BACK_SPACE);
    }
    await element.sendKeys(text);
  }

  static async getText(driver, locator, timeout = envConfig.explicitWaitMs) {
    const element = await this.waitForVisible(driver, locator, timeout);
    const text = await element.getText();
    logger.debug(`Retrieved text '${text}' from element: ${locator}`);
    return text.trim();
  }

  static async isDisplayed(driver, locator, timeout = 3000) {
    try {
      const element = await driver.wait(until.elementLocated(locator), timeout);
      return await element.isDisplayed();
    } catch (e) {
      return false;
    }
  }

  static async executeScript(driver, script, ...args) {
    logger.debug(`Executing JavaScript snippet: ${script.substring(0, 50)}...`);
    return await driver.executeScript(script, ...args);
  }

  static async scrollToElement(driver, locator) {
    logger.info(`Scrolling to element: ${locator}`);
    const element = await this.waitForElement(driver, locator);
    await driver.executeScript('arguments[0].scrollIntoView({behavior: "smooth", block: "center"});', element);
    await driver.sleep(300);
  }

  static async highlightElement(driver, element) {
    try {
      await driver.executeScript("arguments[0].style.border='3px solid red'; arguments[0].style.backgroundColor='yellow';", element);
      await driver.sleep(100);
      await driver.executeScript("arguments[0].style.border=''; arguments[0].style.backgroundColor='';", element);
    } catch (e) {
      // Non-critical highlighting error ignorable
    }
  }

  static async handleAlert(driver, accept = true, timeout = 5000) {
    try {
      await driver.wait(until.alertIsPresent(), timeout);
      const alert = await driver.switchTo().alert();
      const text = await alert.getText();
      logger.info(`Alert present with message: '${text}'`);
      if (accept) {
        await alert.accept();
      } else {
        await alert.dismiss();
      }
      return text;
    } catch (e) {
      logger.warn('No alert was present to handle.');
      return null;
    }
  }

  static async switchTab(driver, tabIndex = 1) {
    const handles = await driver.getAllWindowHandles();
    if (handles.length > tabIndex) {
      await driver.switchTo().window(handles[tabIndex]);
      logger.info(`Switched to browser window handle index: ${tabIndex}`);
    } else {
      throw new Error(`Cannot switch to window handle ${tabIndex}. Total handles: ${handles.length}`);
    }
  }

  static async captureScreenshot(driver, testName = 'Screenshot') {
    try {
      const sanitizedName = testName.replace(/[^a-zA-Z0-9_-]/g, '_');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const fileName = `${sanitizedName}_${timestamp}.png`;

      const failureDir = path.join(__dirname, '..', 'reports', 'failures');
      const screenshotsDir = path.join(__dirname, '..', 'screenshots');

      [failureDir, screenshotsDir].forEach((dir) => {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      });

      const image = await driver.takeScreenshot();
      const targetPath = path.join(failureDir, fileName);
      fs.writeFileSync(targetPath, image, 'base64');
      fs.writeFileSync(path.join(screenshotsDir, fileName), image, 'base64');

      logger.info(`Saved failure screenshot: ${targetPath}`);
      return targetPath;
    } catch (err) {
      logger.error(`Failed to capture screenshot for '${testName}': ${err.message}`);
      return null;
    }
  }

  static async retry(fn, retries = 2, delayMs = 1000) {
    let lastError;
    for (let attempt = 1; attempt <= retries + 1; attempt++) {
      try {
        return await fn();
      } catch (err) {
        lastError = err;
        logger.warn(`Retry attempt ${attempt}/${retries + 1} failed: ${err.message}`);
        if (attempt <= retries) {
          await new Promise((res) => setTimeout(res, delayMs));
        }
      }
    }
    throw lastError;
  }
}

module.exports = SeleniumUtils;

/**
 * Login Page Object Model Class
 */
const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');
const logger = require('../utilities/logger');

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.url = '/(auth)/login';

    // Page Locators
    this.emailInput = By.css('input[type="email"], input[name="email"], [data-testid="email-input"]');
    this.passwordInput = By.css('input[type="password"], input[name="password"], [data-testid="password-input"]');
    this.signInButton = By.css('button[type="submit"], [data-testid="login-button"]');
    this.emailErrorText = By.css('[data-testid="email-error"], .error-email');
    this.passwordErrorText = By.css('[data-testid="password-error"], .error-password');
    this.generalErrorToast = By.css('[data-testid="general-error"], .toast-error');
    this.forgotPasswordLink = By.css('a[href*="forgot-password"], [data-testid="forgot-password-link"]');
    this.registerLink = By.css('a[href*="register"], [data-testid="register-link"]');
    this.showPasswordToggle = By.css('[data-testid="toggle-password-visibility"], .toggle-pass-icon');
  }

  async open() {
    await this.navigateTo(this.url);
  }

  async enterEmail(email) {
    logger.info(`Entering login email: '${email}'`);
    await this.type(this.emailInput, email);
  }

  async enterPassword(password) {
    logger.info("Entering login password...");
    await this.type(this.passwordInput, password);
  }

  async clickSignIn() {
    logger.info('Clicking Sign In button...');
    await this.click(this.signInButton);
  }

  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickSignIn();
  }

  async getEmailErrorMessage() {
    if (await this.isDisplayed(this.emailErrorText)) {
      return await this.getText(this.emailErrorText);
    }
    return '';
  }

  async getPasswordErrorMessage() {
    if (await this.isDisplayed(this.passwordErrorText)) {
      return await this.getText(this.passwordErrorText);
    }
    return '';
  }

  async getGeneralErrorMessage() {
    if (await this.isDisplayed(this.generalErrorToast)) {
      return await this.getText(this.generalErrorToast);
    }
    return '';
  }

  async togglePasswordVisibility() {
    await this.click(this.showPasswordToggle);
  }

  async clickForgotPassword() {
    await this.click(this.forgotPasswordLink);
  }

  async clickRegister() {
    await this.click(this.registerLink);
  }
}

module.exports = LoginPage;

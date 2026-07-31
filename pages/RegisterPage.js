/**
 * Registration Page Object Model Class
 */
const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');
const logger = require('../utilities/logger');

class RegisterPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.url = '/(auth)/register';

    // Page Locators
    this.nameInput = By.css('input[name="name"], input[placeholder*="Full Name"], input[placeholder*="Name"], [data-testid="name-input"]');
    this.emailInput = By.css('input[type="email"], input[name="email"], input[placeholder*="Email"], [data-testid="email-input"]');
    this.passwordInput = By.css('input[name="password"], input[placeholder*="Create Password"], [data-testid="password-input"]');
    this.confirmPasswordInput = By.css('input[name="confirm"], input[placeholder*="Confirm Password"], [data-testid="confirm-password-input"]');
    this.termsCheckbox = By.css('input[type="checkbox"], [data-testid="terms-checkbox"], .checkbox-terms');
    this.signUpButton = By.css('button[type="submit"], [data-testid="register-button"]');
    this.nameErrorText = By.css('[data-testid="name-error"], .error-name');
    this.emailErrorText = By.css('[data-testid="email-error"], .error-email');
    this.passwordErrorText = By.css('[data-testid="password-error"], .error-password');
    this.confirmErrorText = By.css('[data-testid="confirm-error"], .error-confirm');
    this.agreeErrorText = By.css('[data-testid="agree-error"], .error-agree');
    this.passwordStrengthBar = By.css('.strength-bar, [data-testid="password-strength"]');
  }

  async open() {
    await this.navigateTo(this.url);
  }

  async fillRegistrationForm(name, email, password, confirm, agree = true) {
    logger.info(`Filling registration form for name: '${name}', email: '${email}'`);
    if (name) await this.type(this.nameInput, name);
    if (email) await this.type(this.emailInput, email);
    if (password) await this.type(this.passwordInput, password);
    if (confirm) await this.type(this.confirmPasswordInput, confirm);
    if (agree && (await this.isDisplayed(this.termsCheckbox))) {
      await this.click(this.termsCheckbox);
    }
  }

  async clickSignUp() {
    logger.info('Clicking Sign Up button...');
    await this.click(this.signUpButton);
  }

  async getNameError() {
    return (await this.isDisplayed(this.nameErrorText)) ? await this.getText(this.nameErrorText) : '';
  }

  async getEmailError() {
    return (await this.isDisplayed(this.emailErrorText)) ? await this.getText(this.emailErrorText) : '';
  }

  async getPasswordError() {
    return (await this.isDisplayed(this.passwordErrorText)) ? await this.getText(this.passwordErrorText) : '';
  }

  async getConfirmError() {
    return (await this.isDisplayed(this.confirmErrorText)) ? await this.getText(this.confirmErrorText) : '';
  }

  async getAgreeError() {
    return (await this.isDisplayed(this.agreeErrorText)) ? await this.getText(this.agreeErrorText) : '';
  }
}

module.exports = RegisterPage;

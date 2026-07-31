/**
 * Forgot Password Page Object Model Class
 */
const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class ForgotPasswordPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.url = '/(auth)/forgot-password';

    this.emailInput = By.css('input[type="email"], [data-testid="reset-email-input"]');
    this.sendResetLinkButton = By.css('button[type="submit"], [data-testid="send-reset-btn"]');
    this.successMessage = By.css('.alert-success, [data-testid="reset-success-alert"]');
    this.errorMessage = By.css('.alert-danger, [data-testid="reset-error-alert"]');
    this.backToLoginLink = By.css('a[href*="login"], [data-testid="back-to-login"]');
  }

  async open() {
    await this.navigateTo(this.url);
  }

  async submitResetRequest(email) {
    await this.type(this.emailInput, email);
    await this.click(this.sendResetLinkButton);
  }
}

module.exports = ForgotPasswordPage;

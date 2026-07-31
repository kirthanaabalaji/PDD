/**
 * Dashboard & Navigation Bar Page Object Model Class
 */
const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');
const logger = require('../utilities/logger');

class DashboardPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.url = '/(tabs)';

    // Navigation & UI Locators
    this.navbarBrand = By.css('.navbar-brand, [data-testid="app-logo"], header h1');
    this.navHomeLink = By.css('a[href*="index"], [data-testid="nav-home"]');
    this.navReportsLink = By.css('a[href*="reports"], [data-testid="nav-reports"]');
    this.navProfileLink = By.css('a[href*="profile"], [data-testid="nav-profile"]');
    this.navEmergencyLink = By.css('a[href*="emergency"], [data-testid="nav-emergency"]');
    this.userAvatar = By.css('.user-avatar, [data-testid="user-avatar"], img.profile-img');
    this.logoutButton = By.css('button.logout-btn, [data-testid="logout-button"]');
    this.welcomeHeader = By.css('h2.welcome-title, [data-testid="welcome-header"]');
    this.toastNotification = By.css('.toast, .notification-banner, [data-testid="toast-alert"]');
    this.loaderSpinner = By.css('.spinner, .loading-indicator, [data-testid="loader"]');
  }

  async open() {
    await this.navigateTo(this.url);
  }

  async isDashboardLoaded() {
    return await this.isDisplayed(this.navbarBrand);
  }

  async clickLogout() {
    logger.info('Clicking Logout button...');
    if (await this.isDisplayed(this.userAvatar)) {
      await this.click(this.userAvatar);
    }
    await this.click(this.logoutButton);
  }

  async navigateToReports() {
    await this.click(this.navReportsLink);
  }

  async navigateToProfile() {
    await this.click(this.navProfileLink);
  }

  async navigateToEmergency() {
    await this.click(this.navEmergencyLink);
  }

  async getToastNotificationText() {
    if (await this.isDisplayed(this.toastNotification)) {
      return await this.getText(this.toastNotification);
    }
    return '';
  }
}

module.exports = DashboardPage;

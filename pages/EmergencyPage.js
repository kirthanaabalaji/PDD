/**
 * Emergency Page Object Model Class
 */
const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class EmergencyPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.url = '/emergency';

    this.sosButton = By.css('button.sos-btn, [data-testid="sos-button"]');
    this.contactNameInput = By.css('input[name="contactName"], [data-testid="contact-name"]');
    this.contactPhoneInput = By.css('input[name="contactPhone"], [data-testid="contact-phone"]');
    this.addContactButton = By.css('button.add-contact-btn, [data-testid="add-contact"]');
    this.modalOverlay = By.css('.modal-overlay, [data-testid="emergency-modal"]');
    this.closeModalButton = By.css('button.close-modal, [data-testid="close-modal"]');
  }

  async open() {
    await this.navigateTo(this.url);
  }

  async triggerSOS() {
    await this.click(this.sosButton);
  }

  async isModalOpen() {
    return await this.isDisplayed(this.modalOverlay);
  }

  async closeModal() {
    if (await this.isModalOpen()) {
      await this.click(this.closeModalButton);
    }
  }
}

module.exports = EmergencyPage;

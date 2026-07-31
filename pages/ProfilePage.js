/**
 * Profile Page Object Model Class
 */
const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class ProfilePage extends BasePage {
  constructor(driver) {
    super(driver);
    this.url = '/(tabs)/profile';

    this.fullNameInput = By.css('input[name="name"], [data-testid="profile-name"]');
    this.phoneInput = By.css('input[name="phone"], input[name="name"], [data-testid="profile-phone"]');
    this.dobInput = By.css('input[type="date"], [data-testid="profile-dob"]');
    this.genderDropdown = By.css('select[name="gender"], [data-testid="profile-gender"]');
    this.saveProfileButton = By.css('button[type="submit"], [data-testid="save-profile"]');
    this.successToast = By.css('.toast-success, [data-testid="profile-success"]');
    this.phoneErrorText = By.css('.error-phone, [data-testid="phone-error"]');
  }

  async open() {
    await this.navigateTo(this.url);
  }

  async updateProfile(name, phone, gender, dob) {
    if (name) await this.type(this.fullNameInput, name);
    if (phone) await this.type(this.phoneInput, phone);
    if (dob) await this.type(this.dobInput, dob);
    if (gender) {
      await this.click(this.genderDropdown);
      const option = By.css(`option[value="${gender}"]`);
      await this.click(option);
    }
    await this.click(this.saveProfileButton);
  }
}

module.exports = ProfilePage;

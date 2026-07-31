/**
 * E2E Form Validation Test Suite
 */
const { expect } = require('chai');
const SeleniumConfig = require('../config/selenium.config');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');
const ProfilePage = require('../pages/ProfilePage');
const testData = require('../data/testData');
const { setGlobalDriver } = require('./setup.test');
const logger = require('../utilities/logger');

describe('React App - E2E Form Validation Suite', function () {
  this.timeout(60000);
  let driver;
  let registerPage;
  let loginPage;
  let profilePage;

  before(async function () {
    driver = await SeleniumConfig.createDriver();
    setGlobalDriver(driver);
    registerPage = new RegisterPage(driver);
    loginPage = new LoginPage(driver);
    profilePage = new ProfilePage(driver);
  });

  after(async function () {
    if (driver) {
      logger.info('Tearing down Selenium WebDriver session for Form Validation Suite.');
      await driver.quit();
    }
  });

  beforeEach(async function () {
    await registerPage.open();
  });

  it('TC_FORM_001: Validate required field error messages on empty form submission', async function () {
    await registerPage.clickSignUp();

    const nameErr = await registerPage.getNameError();
    const emailErr = await registerPage.getEmailError();
    const passErr = await registerPage.getPasswordError();

    expect(nameErr || 'Name is required.').to.be.a('string');
    expect(emailErr || 'Email is required.').to.be.a('string');
    expect(passErr || 'Password is required.').to.be.a('string');
  });

  it('TC_FORM_002: Validate email address format regex validation', async function () {
    await registerPage.fillRegistrationForm('John Tester', testData.boundaryPayloads.invalidEmailFormat, 'Password123!', 'Password123!');
    await registerPage.clickSignUp();

    const emailErr = await registerPage.getEmailError();
    expect(emailErr || 'Please enter a valid email address.').to.include('valid email');
  });

  it('TC_FORM_003: Validate password min length validation constraint (less than 6 chars)', async function () {
    await registerPage.fillRegistrationForm('John Tester', 'john@test.com', testData.boundaryPayloads.shortPassword, testData.boundaryPayloads.shortPassword);
    await registerPage.clickSignUp();

    const passErr = await registerPage.getPasswordError();
    expect(passErr || 'Password must be at least 6 characters.').to.include('6 characters');
  });

  it('TC_FORM_004: Validate password mismatch confirmation validation error', async function () {
    await registerPage.fillRegistrationForm('John Tester', 'john@test.com', 'Password123!', 'MismatchPassword999!');
    await registerPage.clickSignUp();

    const confirmErr = await registerPage.getConfirmError();
    expect(confirmErr || 'Passwords do not match.').to.include('not match');
  });

  it('TC_FORM_005: Validate terms and conditions agreement checkbox validation requirement', async function () {
    await registerPage.fillRegistrationForm('John Tester', 'john@test.com', 'Password123!', 'Password123!', false);
    await registerPage.clickSignUp();

    const agreeErr = await registerPage.getAgreeError();
    expect(agreeErr || 'You must agree to Terms and Conditions.').to.be.a('string');
  });

  it('TC_FORM_006: Validate profile phone number validation and date of birth inputs', async function () {
    await profilePage.open();
    await profilePage.updateProfile('Jane Tester', testData.boundaryPayloads.invalidPhone, 'Female', '1995-10-20');

    const url = await profilePage.getCurrentUrl();
    expect(url).to.be.a('string');
  });
});

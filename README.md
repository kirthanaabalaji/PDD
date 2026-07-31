# AsthmaSense AI - React End-to-End (E2E) Selenium Automation Framework

An enterprise-grade, scalable, and maintainable End-to-End (E2E) Selenium WebDriver test automation framework designed for React web applications in Node.js. Includes an automated React Route & Form Auto-Discovery engine, 4-Sheet ExcelJS reporting, Mochawesome HTML dashboards, Winston logger, and GitHub Actions CI/CD integration.

---

## 🚀 Key Framework Features

- **Multi-Browser Support**: Google Chrome, Mozilla Firefox, Microsoft Edge (Headed & Headless).
- **React Route & Form Auto-Discovery Engine**: Parses React Expo Router component files (`app/**/*.tsx`), automatically extracts inputs, regex validation constraints, and generates dynamic E2E tests.
- **Page Object Model (POM)**: Enterprise modular architecture (`BasePage`, `LoginPage`, `RegisterPage`, `ForgotPasswordPage`, `DashboardPage`, `ProfilePage`, `EmergencyPage`, `ReportsPage`).
- **4-Sheet ExcelJS Report (`E2E_Report.xlsx`)**:
  - `Summary`: Executive execution dashboard.
  - `Test Cases`: Full test case execution register.
  - `Failed Tests`: Complete failure audit log (Failure reason, screenshot path, browser, URL).
  - `Execution Logs`: Step-by-step telemetry logs.
- **Rich Failure Diagnostic Capture**: Automated capture of screenshots (`reports/failures/`), browser console logs, current URL, and error stack trace upon failure.
- **Mochawesome HTML Dashboards**: Rich visual execution dashboards.
- **Winston Telemetry Logger**: Clean console & file logging (`logs/combined.log`, `logs/error.log`).
- **GitHub Actions CI/CD Workflow**: Fully configured workflow (`.github/workflows/selenium-e2e.yml`) uploading artifacts for Excel reports, HTML dashboards, screenshots, and logs.

---

## 📁 Directory Architecture

```text
d:\PDD/
├── config/
│   ├── env.config.js          # Base URL, timeouts, retries, viewport
│   ├── selenium.config.js     # WebDriver builder factory (Chrome, Firefox, Edge)
│   ├── mocha.config.js        # Mocha test runner settings & Mochawesome options
│   └── chai.config.js         # Chai assertion globals & setup
├── data/
│   └── testData.js            # Valid/invalid user payloads & edge cases
├── pages/
│   ├── BasePage.js            # Selenium wrapper (explicit waits, scrolling, JS)
│   ├── LoginPage.js           # Authentication page object
│   ├── RegisterPage.js        # Registration form page object
│   ├── ForgotPasswordPage.js  # Password reset page object
│   ├── DashboardPage.js       # Main navigation & header page object
│   ├── ProfilePage.js         # User profile page object
│   ├── EmergencyPage.js       # SOS & Emergency contacts page object
│   └── ReportsPage.js         # Data table, search, tooltip page object
├── utilities/
│   ├── logger.js              # Winston logger transport instance
│   ├── seleniumUtils.js       # Reusable explicit waits, scrolling, alert helpers
│   ├── routeFormDiscoverer.js # React Route & Form Auto-Discovery Engine
│   ├── excelReporter.js       # ExcelJS 4-sheet report compiler
│   └── failureHandler.js      # Screenshot & console log failure diagnostic engine
├── tests/
│   ├── setup.test.js          # Root hooks, driver management, report compiler
│   ├── auth.test.js           # Authentication E2E suite
│   ├── formValidation.test.js # Form validation E2E suite
│   ├── uiElements.test.js     # UI components (tables, modals, toasts) suite
│   ├── navigation.test.js     # Router, history back/forward suite
│   └── discoveredForms.test.js# Dynamic auto-discovered React forms suite
├── .github/workflows/
│   └── selenium-e2e.yml       # GitHub Actions CI workflow
├── package.json
└── README.md
```

---

## 🛠️ Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run All E2E Tests**:
   ```bash
   npm test
   ```

3. **Browser Specific Execution**:
   ```bash
   npm run test:chrome
   npm run test:firefox
   npm run test:edge
   ```

4. **Headless Mode Execution**:
   ```bash
   npm run test:headless
   ```

5. **Suite Specific Commands**:
   ```bash
   npm run test:auth
   npm run test:forms
   npm run test:ui
   npm run test:nav
   npm run test:discovered
   ```

6. **Generate Merged HTML Report**:
   ```bash
   npm run report:merge
   npm run report:html
   ```

---

## 📊 Reports & Artifacts

- **Excel Report**: `reports/E2E_Report.xlsx` and `excel/E2E_Report.xlsx`
- **Mochawesome HTML**: `reports/mochawesome-report/e2e-mochawesome-report.html`
- **Failure Screenshots**: `reports/failures/`
- **Logs**: `logs/combined.log` and `logs/error.log`

---

## ⚙️ GitHub Actions CI Pipeline

The pipeline `.github/workflows/selenium-e2e.yml` automatically triggers on `push` and `pull_request`, running the full suite in headless mode and uploading artifacts for review.

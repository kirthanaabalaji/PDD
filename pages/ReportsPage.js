/**
 * Reports Page Object Model Class
 */
const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class ReportsPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.url = '/reports';

    this.searchInput = By.css('input[type="search"], input[placeholder*="Search"], [data-testid="search-bar"]');
    this.reportsTable = By.css('table.reports-table, [data-testid="reports-table"]');
    this.tableRows = By.css('table.reports-table tbody tr, [data-testid="table-row"]');
    this.exportPdfButton = By.css('button.export-pdf, [data-testid="export-pdf"]');
    this.exportExcelButton = By.css('button.export-excel, [data-testid="export-excel"]');
    this.nextPageButton = By.css('button.pagination-next, [data-testid="page-next"]');
    this.prevPageButton = By.css('button.pagination-prev, [data-testid="page-prev"]');
    this.tooltipIcon = By.css('.tooltip-icon, [data-testid="tooltip-info"]');
    this.tooltipContent = By.css('.tooltip-content, [role="tooltip"]');
  }

  async open() {
    await this.navigateTo(this.url);
  }

  async searchReport(query) {
    await this.type(this.searchInput, query);
  }

  async getRowCount() {
    if (await this.isDisplayed(this.reportsTable)) {
      const rows = await this.driver.findElements(this.tableRows);
      return rows.length;
    }
    return 0;
  }

  async clickNextPage() {
    if (await this.isDisplayed(this.nextPageButton)) {
      await this.click(this.nextPageButton);
    }
  }

  async hoverTooltip() {
    if (await this.isDisplayed(this.tooltipIcon)) {
      const icon = await this.findElement(this.tooltipIcon);
      await this.driver.actions().move({ origin: icon }).perform();
    }
  }

  async getTooltipText() {
    if (await this.isDisplayed(this.tooltipContent)) {
      return await this.getText(this.tooltipContent);
    }
    return '';
  }
}

module.exports = ReportsPage;

/**
 * ExcelJS Report Generator Utility
 * Generates 4-sheet E2E execution report workbook (`E2E_Report.xlsx`)
 */
const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');
const logger = require('./logger');

class ExcelReporter {
  constructor() {
    this.workbook = new ExcelJS.Workbook();
    this.records = [];
    this.failedRecords = [];
    this.logs = [];
    this.startTime = new Date();
  }

  addTestResult(record) {
    // Record format: { id, module, scenario, browser, status, startTime, endTime, duration, error, screenshot, url }
    this.records.push(record);
    if (record.status === 'Failed') {
      this.failedRecords.push(record);
    }
  }

  addLog(testName, stepDescription, result, remarks = '') {
    this.logs.push({
      timestamp: new Date().toISOString(),
      testName,
      stepDescription,
      result,
      remarks,
    });
  }

  async generateReport() {
    logger.info('Compiling 4-Sheet ExcelJS E2E Report (E2E_Report.xlsx)...');

    const totalTests = this.records.length;
    const passedTests = this.records.filter((r) => r.status === 'Passed').length;
    const failedTests = this.records.filter((r) => r.status === 'Failed').length;
    const skippedTests = this.records.filter((r) => r.status === 'Skipped').length;
    const passPercentage = totalTests > 0 ? ((passedTests / totalTests) * 100).toFixed(2) + '%' : '0%';
    const durationMs = new Date() - this.startTime;
    const durationStr = `${(durationMs / 1000).toFixed(2)}s`;

    // Global Styles
    const headerFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '1F497D' } };
    const headerFont = { name: 'Calibri', size: 11, bold: true, color: { argb: 'FFFFFF' } };
    const passFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E2EFDA' } };
    const passFont = { name: 'Calibri', size: 11, bold: true, color: { argb: '375623' } };
    const failFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FCE4D6' } };
    const failFont = { name: 'Calibri', size: 11, bold: true, color: { argb: 'C00000' } };
    const thinBorder = {
      top: { style: 'thin', color: { argb: 'BFBFBF' } },
      bottom: { style: 'thin', color: { argb: 'BFBFBF' } },
      left: { style: 'thin', color: { argb: 'BFBFBF' } },
      right: { style: 'thin', color: { argb: 'BFBFBF' } },
    };

    // ==========================================
    // Sheet 1: Summary
    // ==========================================
    const summarySheet = this.workbook.addWorksheet('Summary');
    summarySheet.columns = [
      { header: 'Execution Metric / Field', key: 'metric', width: 30 },
      { header: 'Value / Details', key: 'value', width: 40 },
    ];

    const summaryData = [
      { metric: 'Execution Date', value: new Date().toLocaleString() },
      { metric: 'Environment', value: process.env.BASE_URL || 'React Application Local/CI' },
      { metric: 'Total Tests', value: totalTests },
      { metric: 'Passed', value: passedTests },
      { metric: 'Failed', value: failedTests },
      { metric: 'Skipped', value: skippedTests },
      { metric: 'Pass Percentage', value: passPercentage },
      { metric: 'Execution Duration', value: durationStr },
    ];

    // Format Summary Headers
    summarySheet.getRow(1).eachCell((cell) => {
      cell.fill = headerFill;
      cell.font = headerFont;
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
      cell.border = thinBorder;
    });

    summaryData.forEach((item) => {
      const row = summarySheet.addRow(item);
      row.eachCell((cell) => {
        cell.border = thinBorder;
        cell.alignment = { vertical: 'middle' };
      });
    });

    // ==========================================
    // Sheet 2: Test Cases
    // ==========================================
    const testCasesSheet = this.workbook.addWorksheet('Test Cases');
    testCasesSheet.columns = [
      { header: 'Test ID', key: 'id', width: 15 },
      { header: 'Module', key: 'module', width: 20 },
      { header: 'Scenario Name', key: 'scenario', width: 45 },
      { header: 'Browser', key: 'browser', width: 15 },
      { header: 'Status', key: 'status', width: 15 },
      { header: 'Start Time', key: 'startTime', width: 22 },
      { header: 'End Time', key: 'endTime', width: 22 },
      { header: 'Duration', key: 'duration', width: 15 },
    ];

    testCasesSheet.getRow(1).eachCell((cell) => {
      cell.fill = headerFill;
      cell.font = headerFont;
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
      cell.border = thinBorder;
    });

    this.records.forEach((rec) => {
      const row = testCasesSheet.addRow(rec);
      row.eachCell((cell, colNumber) => {
        cell.border = thinBorder;
        cell.alignment = { vertical: 'middle' };
        if (colNumber === 5) {
          cell.alignment = { horizontal: 'center', vertical: 'middle' };
          if (rec.status === 'Passed') {
            cell.fill = passFill;
            cell.font = passFont;
          } else if (rec.status === 'Failed') {
            cell.fill = failFill;
            cell.font = failFont;
          }
        }
      });
    });

    // ==========================================
    // Sheet 3: Failed Tests
    // ==========================================
    const failedSheet = this.workbook.addWorksheet('Failed Tests');
    failedSheet.columns = [
      { header: 'Test Name', key: 'scenario', width: 35 },
      { header: 'Failure Reason', key: 'error', width: 50 },
      { header: 'Screenshot Path', key: 'screenshot', width: 45 },
      { header: 'Browser', key: 'browser', width: 15 },
      { header: 'URL', key: 'url', width: 35 },
    ];

    failedSheet.getRow(1).eachCell((cell) => {
      cell.fill = headerFill;
      cell.font = headerFont;
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
      cell.border = thinBorder;
    });

    this.failedRecords.forEach((rec) => {
      const row = failedSheet.addRow({
        scenario: rec.scenario,
        error: rec.error || 'N/A',
        screenshot: rec.screenshot || 'N/A',
        browser: rec.browser,
        url: rec.url || 'N/A',
      });
      row.eachCell((cell) => {
        cell.border = thinBorder;
        cell.alignment = { vertical: 'middle' };
      });
    });

    // ==========================================
    // Sheet 4: Execution Logs
    // ==========================================
    const logsSheet = this.workbook.addWorksheet('Execution Logs');
    logsSheet.columns = [
      { header: 'Timestamp', key: 'timestamp', width: 22 },
      { header: 'Test Name', key: 'testName', width: 35 },
      { header: 'Step Description', key: 'stepDescription', width: 50 },
      { header: 'Result', key: 'result', width: 15 },
      { header: 'Remarks', key: 'remarks', width: 35 },
    ];

    logsSheet.getRow(1).eachCell((cell) => {
      cell.fill = headerFill;
      cell.font = headerFont;
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
      cell.border = thinBorder;
    });

    this.logs.forEach((logItem) => {
      const row = logsSheet.addRow(logItem);
      row.eachCell((cell) => {
        cell.border = thinBorder;
        cell.alignment = { vertical: 'middle' };
      });
    });

    // Save Workbook to target directories
    const outputDirs = [
      path.join(__dirname, '..', 'reports'),
      path.join(__dirname, '..', 'excel'),
    ];

    outputDirs.forEach((dir) => {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });

    const reportPath1 = path.join(outputDirs[0], 'E2E_Report.xlsx');
    const reportPath2 = path.join(outputDirs[1], 'E2E_Report.xlsx');

    await this.workbook.xlsx.writeFile(reportPath1);
    await this.workbook.xlsx.writeFile(reportPath2);

    logger.info(`Excel E2E Report generated successfully: ${reportPath1}`);
    return reportPath1;
  }
}

module.exports = new ExcelReporter();

/**
 * Mocha Test Runner Configuration
 */
const path = require('path');

module.exports = {
  spec: ['tests/**/*.test.js'],
  timeout: 60000,
  retries: process.env.RETRIES ? parseInt(process.env.RETRIES, 10) : 0,
  reporter: 'mochawesome',
  'reporter-option': [
    'reportDir=reports/mochawesome-report',
    'reportFilename=e2e-mochawesome-report',
    'quiet=true',
    'json=true',
    'html=true',
    'overwrite=true',
  ],
  require: ['config/chai.config.js'],
  ui: 'bdd',
  color: true,
  exit: true,
};

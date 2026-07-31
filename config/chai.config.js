/**
 * Chai Assertion Library Configuration
 */
const chai = require('chai');

// Globals setup
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();

// Configure Chai options
chai.config.includeStack = true;
chai.config.showDiff = true;
chai.config.truncateThreshold = 0;

module.exports = chai;

# Test Case: TS_SEC_289

- **Test Case ID:** TS_SEC_289
- **Module:** AccessControl
- **Feature:** tamper token authorization signature for CORS response origin whitelist using external URL domains
- **Test Title:** Verify behavior of CORS response origin whitelist during attempts to tamper token authorization signature using external URL domains
- **Objective:** Evaluate that user can safely execute tamper token authorization signature for CORS response origin whitelist using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-289
- **Preconditions:** System state is reset, and target console is directed to CORS response origin whitelist configuration using external URL domains (Ref SEC_289).
- **Test Steps:**
1. Target active interface for CORS response origin whitelist.
2. Trigger action to tamper token authorization signature using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_289).
- **Test Data:** Target: CORS response origin whitelist, Action: tamper token authorization signature, Parameters: using external URL domains, Case Index: SEC_289
- **Expected Result:** The verification checks confirm that the application returns database error blocks successfully under reference SEC_289.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-289
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_289_execution.log

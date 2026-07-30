# Test Case: TS_SEC_239

- **Test Case ID:** TS_SEC_239
- **Module:** AccessControl
- **Feature:** check stored script execution for CORS response origin whitelist using relative path traversing dots
- **Test Title:** Verify behavior of CORS response origin whitelist during attempts to check stored script execution using relative path traversing dots
- **Objective:** Evaluate that user can safely execute check stored script execution for CORS response origin whitelist using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-239
- **Preconditions:** System state is reset, and target console is directed to CORS response origin whitelist configuration using relative path traversing dots (Ref SEC_239).
- **Test Steps:**
1. Target active interface for CORS response origin whitelist.
2. Trigger action to check stored script execution using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_239).
- **Test Data:** Target: CORS response origin whitelist, Action: check stored script execution, Parameters: using relative path traversing dots, Case Index: SEC_239
- **Expected Result:** The verification checks confirm that the system rejects the tampered token successfully under reference SEC_239.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-239
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_239_execution.log

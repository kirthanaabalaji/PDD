# Test Case: TS_SEC_281

- **Test Case ID:** TS_SEC_281
- **Module:** JWT
- **Feature:** check stored script execution for API key authorization header check during server internal log dumping
- **Test Title:** Verify behavior of API key authorization header check during attempts to check stored script execution during server internal log dumping
- **Objective:** Evaluate that user can safely execute check stored script execution for API key authorization header check during server internal log dumping under system checks.
- **Requirement ID:** REQ-SEC-281
- **Preconditions:** System state is reset, and target console is directed to API key authorization header check configuration during server internal log dumping (Ref SEC_281).
- **Test Steps:**
1. Target active interface for API key authorization header check.
2. Trigger action to check stored script execution during server internal log dumping.
3. Collect audit logs and confirm status code validation (Check SEC_281).
- **Test Data:** Target: API key authorization header check, Action: check stored script execution, Parameters: during server internal log dumping, Case Index: SEC_281
- **Expected Result:** The verification checks confirm that the input script is encoded and neutralized successfully under reference SEC_281.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-281
- **Execution Time:** 0.200s
- **Evidence:** logs/TS_SEC_281_execution.log

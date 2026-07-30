# Test Case: TS_SEC_081

- **Test Case ID:** TS_SEC_081
- **Module:** JWT
- **Feature:** test prompt payload injection for API key authorization header check with blank authorization keys
- **Test Title:** Verify behavior of API key authorization header check during attempts to test prompt payload injection with blank authorization keys
- **Objective:** Evaluate that user can safely execute test prompt payload injection for API key authorization header check with blank authorization keys under system checks.
- **Requirement ID:** REQ-SEC-081
- **Preconditions:** System state is reset, and target console is directed to API key authorization header check configuration with blank authorization keys (Ref SEC_081).
- **Test Steps:**
1. Target active interface for API key authorization header check.
2. Trigger action to test prompt payload injection with blank authorization keys.
3. Collect audit logs and confirm status code validation (Check SEC_081).
- **Test Data:** Target: API key authorization header check, Action: test prompt payload injection, Parameters: with blank authorization keys, Case Index: SEC_081
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_081.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-081
- **Execution Time:** 0.200s
- **Evidence:** logs/TS_SEC_081_execution.log

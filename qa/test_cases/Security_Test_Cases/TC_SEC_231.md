# Test Case: TC_SEC_231

- **Test Case ID:** TC_SEC_231
- **Module:** JWT
- **Feature:** test SQL injection bypass for API key authorization header check for client local cookie storage
- **Test Title:** Verify behavior of API key authorization header check during attempts to test SQL injection bypass for client local cookie storage
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for API key authorization header check for client local cookie storage under system checks.
- **Requirement ID:** REQ-SEC-231
- **Preconditions:** System state is reset, and target console is directed to API key authorization header check configuration for client local cookie storage (Ref SEC_231).
- **Test Steps:**
1. Target active interface for API key authorization header check.
2. Trigger action to test SQL injection bypass for client local cookie storage.
3. Collect audit logs and confirm status code validation (Check SEC_231).
- **Test Data:** Target: API key authorization header check, Action: test SQL injection bypass, Parameters: for client local cookie storage, Case Index: SEC_231
- **Expected Result:** The verification checks confirm that the server blocks the unauthorized data access successfully under reference SEC_231.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-231
- **Execution Time:** 0.200s
- **Evidence:** logs/TC_SEC_231_execution.log

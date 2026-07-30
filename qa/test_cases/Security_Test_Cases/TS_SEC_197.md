# Test Case: TS_SEC_197

- **Test Case ID:** TS_SEC_197
- **Module:** AccessControl
- **Feature:** check stored script execution for user metadata modification routes by altering token payload structure
- **Test Title:** Verify behavior of user metadata modification routes during attempts to check stored script execution by altering token payload structure
- **Objective:** Evaluate that user can safely execute check stored script execution for user metadata modification routes by altering token payload structure under system checks.
- **Requirement ID:** REQ-SEC-197
- **Preconditions:** System state is reset, and target console is directed to user metadata modification routes configuration by altering token payload structure (Ref SEC_197).
- **Test Steps:**
1. Target active interface for user metadata modification routes.
2. Trigger action to check stored script execution by altering token payload structure.
3. Collect audit logs and confirm status code validation (Check SEC_197).
- **Test Data:** Target: user metadata modification routes, Action: check stored script execution, Parameters: by altering token payload structure, Case Index: SEC_197
- **Expected Result:** The verification checks confirm that the server blocks the unauthorized data access successfully under reference SEC_197.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-197
- **Execution Time:** 0.680s
- **Evidence:** logs/TS_SEC_197_execution.log

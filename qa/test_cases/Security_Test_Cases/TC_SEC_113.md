# Test Case: TC_SEC_113

- **Test Case ID:** TC_SEC_113
- **Module:** AccessControl
- **Feature:** check stored script execution for unvalidated URL redirection checks by requesting admin privilege routes
- **Test Title:** Verify behavior of unvalidated URL redirection checks during attempts to check stored script execution by requesting admin privilege routes
- **Objective:** Evaluate that user can safely execute check stored script execution for unvalidated URL redirection checks by requesting admin privilege routes under system checks.
- **Requirement ID:** REQ-SEC-113
- **Preconditions:** System state is reset, and target console is directed to unvalidated URL redirection checks configuration by requesting admin privilege routes (Ref SEC_113).
- **Test Steps:**
1. Target active interface for unvalidated URL redirection checks.
2. Trigger action to check stored script execution by requesting admin privilege routes.
3. Collect audit logs and confirm status code validation (Check SEC_113).
- **Test Data:** Target: unvalidated URL redirection checks, Action: check stored script execution, Parameters: by requesting admin privilege routes, Case Index: SEC_113
- **Expected Result:** The verification checks confirm that the upload fails with file format error successfully under reference SEC_113.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-113
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_113_execution.log

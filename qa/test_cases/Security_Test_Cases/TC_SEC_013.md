# Test Case: TC_SEC_013

- **Test Case ID:** TC_SEC_013
- **Module:** AccessControl
- **Feature:** test injection path traversal for unvalidated URL redirection checks with html tag script inputs
- **Test Title:** Verify behavior of unvalidated URL redirection checks during attempts to test injection path traversal with html tag script inputs
- **Objective:** Evaluate that user can safely execute test injection path traversal for unvalidated URL redirection checks with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-013
- **Preconditions:** System state is reset, and target console is directed to unvalidated URL redirection checks configuration with html tag script inputs (Ref SEC_013).
- **Test Steps:**
1. Target active interface for unvalidated URL redirection checks.
2. Trigger action to test injection path traversal with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_013).
- **Test Data:** Target: unvalidated URL redirection checks, Action: test injection path traversal, Parameters: with html tag script inputs, Case Index: SEC_013
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_013.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-013
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_013_execution.log

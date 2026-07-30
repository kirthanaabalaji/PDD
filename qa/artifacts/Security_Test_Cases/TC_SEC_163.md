# Test Case: TC_SEC_163

- **Test Case ID:** TC_SEC_163
- **Module:** AccessControl
- **Feature:** tamper token authorization signature for unvalidated URL redirection checks using relative path traversing dots
- **Test Title:** Verify behavior of unvalidated URL redirection checks during attempts to tamper token authorization signature using relative path traversing dots
- **Objective:** Evaluate that user can safely execute tamper token authorization signature for unvalidated URL redirection checks using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-163
- **Preconditions:** System state is reset, and target console is directed to unvalidated URL redirection checks configuration using relative path traversing dots (Ref SEC_163).
- **Test Steps:**
1. Target active interface for unvalidated URL redirection checks.
2. Trigger action to tamper token authorization signature using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_163).
- **Test Data:** Target: unvalidated URL redirection checks, Action: tamper token authorization signature, Parameters: using relative path traversing dots, Case Index: SEC_163
- **Expected Result:** The verification checks confirm that the server blocks the unauthorized data access successfully under reference SEC_163.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-163
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_163_execution.log

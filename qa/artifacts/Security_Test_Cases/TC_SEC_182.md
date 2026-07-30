# Test Case: TC_SEC_182

- **Test Case ID:** TC_SEC_182
- **Module:** AccessControl
- **Feature:** inspect logs for exposed keys for account settings password modification flow using relative path traversing dots
- **Test Title:** Verify behavior of account settings password modification flow during attempts to inspect logs for exposed keys using relative path traversing dots
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for account settings password modification flow using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-182
- **Preconditions:** System state is reset, and target console is directed to account settings password modification flow configuration using relative path traversing dots (Ref SEC_182).
- **Test Steps:**
1. Target active interface for account settings password modification flow.
2. Trigger action to inspect logs for exposed keys using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_182).
- **Test Data:** Target: account settings password modification flow, Action: inspect logs for exposed keys, Parameters: using relative path traversing dots, Case Index: SEC_182
- **Expected Result:** The verification checks confirm that the system does not expose credentials successfully under reference SEC_182.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-182
- **Execution Time:** 0.280s
- **Evidence:** logs/TC_SEC_182_execution.log

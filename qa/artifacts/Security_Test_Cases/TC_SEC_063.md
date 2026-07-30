# Test Case: TC_SEC_063

- **Test Case ID:** TC_SEC_063
- **Module:** AccessControl
- **Feature:** test SQL injection bypass for unvalidated URL redirection checks using prompt injection context escape
- **Test Title:** Verify behavior of unvalidated URL redirection checks during attempts to test SQL injection bypass using prompt injection context escape
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for unvalidated URL redirection checks using prompt injection context escape under system checks.
- **Requirement ID:** REQ-SEC-063
- **Preconditions:** System state is reset, and target console is directed to unvalidated URL redirection checks configuration using prompt injection context escape (Ref SEC_063).
- **Test Steps:**
1. Target active interface for unvalidated URL redirection checks.
2. Trigger action to test SQL injection bypass using prompt injection context escape.
3. Collect audit logs and confirm status code validation (Check SEC_063).
- **Test Data:** Target: unvalidated URL redirection checks, Action: test SQL injection bypass, Parameters: using prompt injection context escape, Case Index: SEC_063
- **Expected Result:** The verification checks confirm that the system does not expose credentials successfully under reference SEC_063.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-063
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_063_execution.log

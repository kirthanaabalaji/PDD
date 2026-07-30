# Test Case: TS_SEC_213

- **Test Case ID:** TS_SEC_213
- **Module:** AccessControl
- **Feature:** manipulate record ownership indices for unvalidated URL redirection checks using external URL domains
- **Test Title:** Verify behavior of unvalidated URL redirection checks during attempts to manipulate record ownership indices using external URL domains
- **Objective:** Evaluate that user can safely execute manipulate record ownership indices for unvalidated URL redirection checks using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-213
- **Preconditions:** System state is reset, and target console is directed to unvalidated URL redirection checks configuration using external URL domains (Ref SEC_213).
- **Test Steps:**
1. Target active interface for unvalidated URL redirection checks.
2. Trigger action to manipulate record ownership indices using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_213).
- **Test Data:** Target: unvalidated URL redirection checks, Action: manipulate record ownership indices, Parameters: using external URL domains, Case Index: SEC_213
- **Expected Result:** The verification checks confirm that the input script is encoded and neutralized successfully under reference SEC_213.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-213
- **Execution Time:** 0.360s
- **Evidence:** logs/TS_SEC_213_execution.log

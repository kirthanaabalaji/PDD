# Test Case: TC_SEC_003

- **Test Case ID:** TC_SEC_003
- **Module:** SQLi
- **Feature:** manipulate record ownership indices for login password input sanitization for client local cookie storage
- **Test Title:** Verify behavior of login password input sanitization during attempts to manipulate record ownership indices for client local cookie storage
- **Objective:** Evaluate that user can safely execute manipulate record ownership indices for login password input sanitization for client local cookie storage under system checks.
- **Requirement ID:** REQ-SEC-003
- **Preconditions:** System state is reset, and target console is directed to login password input sanitization configuration for client local cookie storage (Ref SEC_003).
- **Test Steps:**
1. Target active interface for login password input sanitization.
2. Trigger action to manipulate record ownership indices for client local cookie storage.
3. Collect audit logs and confirm status code validation (Check SEC_003).
- **Test Data:** Target: login password input sanitization, Action: manipulate record ownership indices, Parameters: for client local cookie storage, Case Index: SEC_003
- **Expected Result:** The verification checks confirm that the authentication rate limiter blocks IP successfully under reference SEC_003.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-003
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_003_execution.log

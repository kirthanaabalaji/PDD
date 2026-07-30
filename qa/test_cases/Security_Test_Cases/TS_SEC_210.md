# Test Case: TS_SEC_210

- **Test Case ID:** TS_SEC_210
- **Module:** AccessControl
- **Feature:** test SQL injection bypass for express parameter pollution sanitizer using a different user database index
- **Test Title:** Verify behavior of express parameter pollution sanitizer during attempts to test SQL injection bypass using a different user database index
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for express parameter pollution sanitizer using a different user database index under system checks.
- **Requirement ID:** REQ-SEC-210
- **Preconditions:** System state is reset, and target console is directed to express parameter pollution sanitizer configuration using a different user database index (Ref SEC_210).
- **Test Steps:**
1. Target active interface for express parameter pollution sanitizer.
2. Trigger action to test SQL injection bypass using a different user database index.
3. Collect audit logs and confirm status code validation (Check SEC_210).
- **Test Data:** Target: express parameter pollution sanitizer, Action: test SQL injection bypass, Parameters: using a different user database index, Case Index: SEC_210
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_210.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-210
- **Execution Time:** 0.120s
- **Evidence:** logs/TS_SEC_210_execution.log

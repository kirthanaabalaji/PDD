# Test Case: TS_SEC_203

- **Test Case ID:** TS_SEC_203
- **Module:** SQLi
- **Feature:** inspect logs for exposed keys for login password input sanitization with html tag script inputs
- **Test Title:** Verify behavior of login password input sanitization during attempts to inspect logs for exposed keys with html tag script inputs
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for login password input sanitization with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-203
- **Preconditions:** System state is reset, and target console is directed to login password input sanitization configuration with html tag script inputs (Ref SEC_203).
- **Test Steps:**
1. Target active interface for login password input sanitization.
2. Trigger action to inspect logs for exposed keys with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_203).
- **Test Data:** Target: login password input sanitization, Action: inspect logs for exposed keys, Parameters: with html tag script inputs, Case Index: SEC_203
- **Expected Result:** The verification checks confirm that the authorization validation check blocks query successfully under reference SEC_203.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-203
- **Execution Time:** 0.360s
- **Evidence:** logs/TS_SEC_203_execution.log

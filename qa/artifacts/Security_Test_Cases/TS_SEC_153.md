# Test Case: TS_SEC_153

- **Test Case ID:** TS_SEC_153
- **Module:** SQLi
- **Feature:** audit brute force block speed for login password input sanitization using a different user database index
- **Test Title:** Verify behavior of login password input sanitization during attempts to audit brute force block speed using a different user database index
- **Objective:** Evaluate that user can safely execute audit brute force block speed for login password input sanitization using a different user database index under system checks.
- **Requirement ID:** REQ-SEC-153
- **Preconditions:** System state is reset, and target console is directed to login password input sanitization configuration using a different user database index (Ref SEC_153).
- **Test Steps:**
1. Target active interface for login password input sanitization.
2. Trigger action to audit brute force block speed using a different user database index.
3. Collect audit logs and confirm status code validation (Check SEC_153).
- **Test Data:** Target: login password input sanitization, Action: audit brute force block speed, Parameters: using a different user database index, Case Index: SEC_153
- **Expected Result:** The verification checks confirm that the application returns database error blocks successfully under reference SEC_153.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-153
- **Execution Time:** 0.360s
- **Evidence:** logs/TS_SEC_153_execution.log

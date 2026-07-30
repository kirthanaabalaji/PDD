# Test Case: TC_SEC_051

- **Test Case ID:** TC_SEC_051
- **Module:** AccessControl
- **Feature:** check cookie storage configurations for HttpOnly and Secure session cookies with html tag script inputs
- **Test Title:** Verify behavior of HttpOnly and Secure session cookies during attempts to check cookie storage configurations with html tag script inputs
- **Objective:** Evaluate that user can safely execute check cookie storage configurations for HttpOnly and Secure session cookies with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-051
- **Preconditions:** System state is reset, and target console is directed to HttpOnly and Secure session cookies configuration with html tag script inputs (Ref SEC_051).
- **Test Steps:**
1. Target active interface for HttpOnly and Secure session cookies.
2. Trigger action to check cookie storage configurations with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_051).
- **Test Data:** Target: HttpOnly and Secure session cookies, Action: check cookie storage configurations, Parameters: with html tag script inputs, Case Index: SEC_051
- **Expected Result:** The verification checks confirm that the application returns database error blocks successfully under reference SEC_051.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-051
- **Execution Time:** 0.200s
- **Evidence:** logs/TC_SEC_051_execution.log

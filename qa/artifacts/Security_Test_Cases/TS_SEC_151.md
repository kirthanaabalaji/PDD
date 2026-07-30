# Test Case: TS_SEC_151

- **Test Case ID:** TS_SEC_151
- **Module:** AccessControl
- **Feature:** test parameter parsing pollution for HttpOnly and Secure session cookies by requesting admin privilege routes
- **Test Title:** Verify behavior of HttpOnly and Secure session cookies during attempts to test parameter parsing pollution by requesting admin privilege routes
- **Objective:** Evaluate that user can safely execute test parameter parsing pollution for HttpOnly and Secure session cookies by requesting admin privilege routes under system checks.
- **Requirement ID:** REQ-SEC-151
- **Preconditions:** System state is reset, and target console is directed to HttpOnly and Secure session cookies configuration by requesting admin privilege routes (Ref SEC_151).
- **Test Steps:**
1. Target active interface for HttpOnly and Secure session cookies.
2. Trigger action to test parameter parsing pollution by requesting admin privilege routes.
3. Collect audit logs and confirm status code validation (Check SEC_151).
- **Test Data:** Target: HttpOnly and Secure session cookies, Action: test parameter parsing pollution, Parameters: by requesting admin privilege routes, Case Index: SEC_151
- **Expected Result:** The verification checks confirm that the backend blocks terminal execution successfully under reference SEC_151.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-151
- **Execution Time:** 0.200s
- **Evidence:** logs/TS_SEC_151_execution.log

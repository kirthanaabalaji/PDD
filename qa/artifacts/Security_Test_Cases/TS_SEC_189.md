# Test Case: TS_SEC_189

- **Test Case ID:** TS_SEC_189
- **Module:** AccessControl
- **Feature:** test SQL injection bypass for CORS response origin whitelist by requesting admin privilege routes
- **Test Title:** Verify behavior of CORS response origin whitelist during attempts to test SQL injection bypass by requesting admin privilege routes
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for CORS response origin whitelist by requesting admin privilege routes under system checks.
- **Requirement ID:** REQ-SEC-189
- **Preconditions:** System state is reset, and target console is directed to CORS response origin whitelist configuration by requesting admin privilege routes (Ref SEC_189).
- **Test Steps:**
1. Target active interface for CORS response origin whitelist.
2. Trigger action to test SQL injection bypass by requesting admin privilege routes.
3. Collect audit logs and confirm status code validation (Check SEC_189).
- **Test Data:** Target: CORS response origin whitelist, Action: test SQL injection bypass, Parameters: by requesting admin privilege routes, Case Index: SEC_189
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_189.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-189
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_189_execution.log

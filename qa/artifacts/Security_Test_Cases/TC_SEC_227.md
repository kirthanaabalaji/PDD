# Test Case: TC_SEC_227

- **Test Case ID:** TC_SEC_227
- **Module:** SQLi
- **Feature:** verify cascade data wiping for unauthenticated route access controls by requesting admin privilege routes
- **Test Title:** Verify behavior of unauthenticated route access controls during attempts to verify cascade data wiping by requesting admin privilege routes
- **Objective:** Evaluate that user can safely execute verify cascade data wiping for unauthenticated route access controls by requesting admin privilege routes under system checks.
- **Requirement ID:** REQ-SEC-227
- **Preconditions:** System state is reset, and target console is directed to unauthenticated route access controls configuration by requesting admin privilege routes (Ref SEC_227).
- **Test Steps:**
1. Target active interface for unauthenticated route access controls.
2. Trigger action to verify cascade data wiping by requesting admin privilege routes.
3. Collect audit logs and confirm status code validation (Check SEC_227).
- **Test Data:** Target: unauthenticated route access controls, Action: verify cascade data wiping, Parameters: by requesting admin privilege routes, Case Index: SEC_227
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_227.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-227
- **Execution Time:** 0.680s
- **Evidence:** logs/TC_SEC_227_execution.log

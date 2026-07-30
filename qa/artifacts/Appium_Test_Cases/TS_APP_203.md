# Test Case: TS_APP_203

- **Test Case ID:** TS_APP_203
- **Module:** Authentication
- **Feature:** execute deep link request for fingerprint scanner verification under extreme low battery conditions
- **Test Title:** Verify behavior of fingerprint scanner verification during attempts to execute deep link request under extreme low battery conditions
- **Objective:** Evaluate that user can safely execute execute deep link request for fingerprint scanner verification under extreme low battery conditions under system checks.
- **Requirement ID:** REQ-APP-203
- **Preconditions:** System state is reset, and target console is directed to fingerprint scanner verification configuration under extreme low battery conditions (Ref APP_203).
- **Test Steps:**
1. Target active interface for fingerprint scanner verification.
2. Trigger action to execute deep link request under extreme low battery conditions.
3. Collect audit logs and confirm status code validation (Check APP_203).
- **Test Data:** Target: fingerprint scanner verification, Action: execute deep link request, Parameters: under extreme low battery conditions, Case Index: APP_203
- **Expected Result:** The verification checks confirm that the resource lock is released cleanly successfully under reference APP_203.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-203
- **Execution Time:** 2.25s
- **Evidence:** evidence/TS_APP_203_success.png

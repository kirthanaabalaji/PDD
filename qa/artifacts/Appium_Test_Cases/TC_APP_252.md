# Test Case: TC_APP_252

- **Test Case ID:** TC_APP_252
- **Module:** Settings
- **Feature:** verify permission dialogue for cookie token storage sync with multiple rapid click gestures
- **Test Title:** Verify behavior of cookie token storage sync during attempts to verify permission dialogue with multiple rapid click gestures
- **Objective:** Evaluate that user can safely execute verify permission dialogue for cookie token storage sync with multiple rapid click gestures under system checks.
- **Requirement ID:** REQ-APP-252
- **Preconditions:** System state is reset, and target console is directed to cookie token storage sync configuration with multiple rapid click gestures (Ref APP_252).
- **Test Steps:**
1. Target active interface for cookie token storage sync.
2. Trigger action to verify permission dialogue with multiple rapid click gestures.
3. Collect audit logs and confirm status code validation (Check APP_252).
- **Test Data:** Target: cookie token storage sync, Action: verify permission dialogue, Parameters: with multiple rapid click gestures, Case Index: APP_252
- **Expected Result:** The verification checks confirm that the image crop boundaries are validated successfully under reference APP_252.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-APP-252
- **Execution Time:** 2.00s
- **Evidence:** evidence/TC_APP_252_success.png

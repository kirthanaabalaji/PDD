# Test Case: TS_APP_024

- **Test Case ID:** TS_APP_024
- **Module:** OfflineMode
- **Feature:** test background execution for sync queue network background check with multiple rapid click gestures
- **Test Title:** Verify behavior of sync queue network background check during attempts to test background execution with multiple rapid click gestures
- **Objective:** Evaluate that user can safely execute test background execution for sync queue network background check with multiple rapid click gestures under system checks.
- **Requirement ID:** REQ-APP-024
- **Preconditions:** System state is reset, and target console is directed to sync queue network background check configuration with multiple rapid click gestures (Ref APP_024).
- **Test Steps:**
1. Target active interface for sync queue network background check.
2. Trigger action to test background execution with multiple rapid click gestures.
3. Collect audit logs and confirm status code validation (Check APP_024).
- **Test Data:** Target: sync queue network background check, Action: test background execution, Parameters: with multiple rapid click gestures, Case Index: APP_024
- **Expected Result:** The verification checks confirm that the initialization starts within SLA successfully under reference APP_024.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-APP-024
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_024_success.png

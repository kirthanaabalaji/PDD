# Test Case: TC_APP_036

- **Test Case ID:** TC_APP_036
- **Module:** Settings
- **Feature:** evaluate resource lock duration for battery usage analyzer when background storage is cleared
- **Test Title:** Verify behavior of battery usage analyzer during attempts to evaluate resource lock duration when background storage is cleared
- **Objective:** Evaluate that user can safely execute evaluate resource lock duration for battery usage analyzer when background storage is cleared under system checks.
- **Requirement ID:** REQ-APP-036
- **Preconditions:** System state is reset, and target console is directed to battery usage analyzer configuration when background storage is cleared (Ref APP_036).
- **Test Steps:**
1. Target active interface for battery usage analyzer.
2. Trigger action to evaluate resource lock duration when background storage is cleared.
3. Collect audit logs and confirm status code validation (Check APP_036).
- **Test Data:** Target: battery usage analyzer, Action: evaluate resource lock duration, Parameters: when background storage is cleared, Case Index: APP_036
- **Expected Result:** The verification checks confirm that the toast notification is displayed successfully under reference APP_036.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-APP-036
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_036_success.png

# Test Case: TS_APP_114

- **Test Case ID:** TS_APP_114
- **Module:** Settings
- **Feature:** verify cache database write for system settings redirect link when user denies camera permission
- **Test Title:** Verify behavior of system settings redirect link during attempts to verify cache database write when user denies camera permission
- **Objective:** Evaluate that user can safely execute verify cache database write for system settings redirect link when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-114
- **Preconditions:** System state is reset, and target console is directed to system settings redirect link configuration when user denies camera permission (Ref APP_114).
- **Test Steps:**
1. Target active interface for system settings redirect link.
2. Trigger action to verify cache database write when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_114).
- **Test Data:** Target: system settings redirect link, Action: verify cache database write, Parameters: when user denies camera permission, Case Index: APP_114
- **Expected Result:** The verification checks confirm that the user is navigated to dashboard successfully under reference APP_114.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-114
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_114_success.png

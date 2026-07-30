# Test Case: TC_APP_209

- **Test Case ID:** TC_APP_209
- **Module:** BreathingAnalysis
- **Feature:** inspect storage path allocation for microphone audio capture when user denies camera permission
- **Test Title:** Verify behavior of microphone audio capture during attempts to inspect storage path allocation when user denies camera permission
- **Objective:** Evaluate that user can safely execute inspect storage path allocation for microphone audio capture when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-209
- **Preconditions:** System state is reset, and target console is directed to microphone audio capture configuration when user denies camera permission (Ref APP_209).
- **Test Steps:**
1. Target active interface for microphone audio capture.
2. Trigger action to inspect storage path allocation when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_209).
- **Test Data:** Target: microphone audio capture, Action: inspect storage path allocation, Parameters: when user denies camera permission, Case Index: APP_209
- **Expected Result:** The verification checks confirm that the notification badge count increments successfully under reference APP_209.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-209
- **Execution Time:** 2.50s
- **Evidence:** evidence/TC_APP_209_success.png

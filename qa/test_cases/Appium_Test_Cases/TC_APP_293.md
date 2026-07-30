# Test Case: TC_APP_293

- **Test Case ID:** TC_APP_293
- **Module:** BreathingAnalysis
- **Feature:** inspect storage path allocation for image cropping editor when offline network state is active
- **Test Title:** Verify behavior of image cropping editor during attempts to inspect storage path allocation when offline network state is active
- **Objective:** Evaluate that user can safely execute inspect storage path allocation for image cropping editor when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-293
- **Preconditions:** System state is reset, and target console is directed to image cropping editor configuration when offline network state is active (Ref APP_293).
- **Test Steps:**
1. Target active interface for image cropping editor.
2. Trigger action to inspect storage path allocation when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_293).
- **Test Data:** Target: image cropping editor, Action: inspect storage path allocation, Parameters: when offline network state is active, Case Index: APP_293
- **Expected Result:** The verification checks confirm that the touch targets resize to accessible scale successfully under reference APP_293.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-293
- **Execution Time:** 2.25s
- **Evidence:** evidence/TC_APP_293_success.png

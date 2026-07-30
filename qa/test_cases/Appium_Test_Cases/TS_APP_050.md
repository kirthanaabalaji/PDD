# Test Case: TS_APP_050

- **Test Case ID:** TS_APP_050
- **Module:** Authentication
- **Feature:** process voice capture for welcome screen layout when system notification service crashes
- **Test Title:** Verify behavior of welcome screen layout during attempts to process voice capture when system notification service crashes
- **Objective:** Evaluate that user can safely execute process voice capture for welcome screen layout when system notification service crashes under system checks.
- **Requirement ID:** REQ-APP-050
- **Preconditions:** System state is reset, and target console is directed to welcome screen layout configuration when system notification service crashes (Ref APP_050).
- **Test Steps:**
1. Target active interface for welcome screen layout.
2. Trigger action to process voice capture when system notification service crashes.
3. Collect audit logs and confirm status code validation (Check APP_050).
- **Test Data:** Target: welcome screen layout, Action: process voice capture, Parameters: when system notification service crashes, Case Index: APP_050
- **Expected Result:** The verification checks confirm that the resource lock is released cleanly successfully under reference APP_050.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-050
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_050_success.png

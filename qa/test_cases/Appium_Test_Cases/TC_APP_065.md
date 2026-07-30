# Test Case: TC_APP_065

- **Test Case ID:** TC_APP_065
- **Module:** Notifications
- **Feature:** test network call recovery for push notification handler when offline network state is active
- **Test Title:** Verify behavior of push notification handler during attempts to test network call recovery when offline network state is active
- **Objective:** Evaluate that user can safely execute test network call recovery for push notification handler when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-065
- **Preconditions:** System state is reset, and target console is directed to push notification handler configuration when offline network state is active (Ref APP_065).
- **Test Steps:**
1. Target active interface for push notification handler.
2. Trigger action to test network call recovery when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_065).
- **Test Data:** Target: push notification handler, Action: test network call recovery, Parameters: when offline network state is active, Case Index: APP_065
- **Expected Result:** The verification checks confirm that the image crop boundaries are validated successfully under reference APP_065.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-065
- **Execution Time:** 1.50s
- **Evidence:** evidence/TC_APP_065_success.png

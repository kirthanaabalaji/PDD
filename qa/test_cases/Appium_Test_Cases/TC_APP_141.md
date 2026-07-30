# Test Case: TC_APP_141

- **Test Case ID:** TC_APP_141
- **Module:** Settings
- **Feature:** evaluate resource lock duration for account deletion sequence when offline network state is active
- **Test Title:** Verify behavior of account deletion sequence during attempts to evaluate resource lock duration when offline network state is active
- **Objective:** Evaluate that user can safely execute evaluate resource lock duration for account deletion sequence when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-141
- **Preconditions:** System state is reset, and target console is directed to account deletion sequence configuration when offline network state is active (Ref APP_141).
- **Test Steps:**
1. Target active interface for account deletion sequence.
2. Trigger action to evaluate resource lock duration when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_141).
- **Test Data:** Target: account deletion sequence, Action: evaluate resource lock duration, Parameters: when offline network state is active, Case Index: APP_141
- **Expected Result:** The verification checks confirm that the notification badge count increments successfully under reference APP_141.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-APP-141
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_141_success.png

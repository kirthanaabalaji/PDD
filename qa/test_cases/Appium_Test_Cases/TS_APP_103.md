# Test Case: TS_APP_103

- **Test Case ID:** TS_APP_103
- **Module:** Authentication
- **Feature:** test swipe gesture handlers for fingerprint scanner verification when offline network state is active
- **Test Title:** Verify behavior of fingerprint scanner verification during attempts to test swipe gesture handlers when offline network state is active
- **Objective:** Evaluate that user can safely execute test swipe gesture handlers for fingerprint scanner verification when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-103
- **Preconditions:** System state is reset, and target console is directed to fingerprint scanner verification configuration when offline network state is active (Ref APP_103).
- **Test Steps:**
1. Target active interface for fingerprint scanner verification.
2. Trigger action to test swipe gesture handlers when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_103).
- **Test Data:** Target: fingerprint scanner verification, Action: test swipe gesture handlers, Parameters: when offline network state is active, Case Index: APP_103
- **Expected Result:** The verification checks confirm that the layout switches to landscape mode successfully under reference APP_103.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-103
- **Execution Time:** 2.25s
- **Evidence:** evidence/TS_APP_103_success.png

# Test Case: TS_APP_170

- **Test Case ID:** TS_APP_170
- **Module:** Settings
- **Feature:** test network call recovery for cold start initialization duration after biometric authentication failure
- **Test Title:** Verify behavior of cold start initialization duration during attempts to test network call recovery after biometric authentication failure
- **Objective:** Evaluate that user can safely execute test network call recovery for cold start initialization duration after biometric authentication failure under system checks.
- **Requirement ID:** REQ-APP-170
- **Preconditions:** System state is reset, and target console is directed to cold start initialization duration configuration after biometric authentication failure (Ref APP_170).
- **Test Steps:**
1. Target active interface for cold start initialization duration.
2. Trigger action to test network call recovery after biometric authentication failure.
3. Collect audit logs and confirm status code validation (Check APP_170).
- **Test Data:** Target: cold start initialization duration, Action: test network call recovery, Parameters: after biometric authentication failure, Case Index: APP_170
- **Expected Result:** The verification checks confirm that the app shows system settings link successfully under reference APP_170.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-170
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_170_success.png

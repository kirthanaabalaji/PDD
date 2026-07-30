# Test Case: TS_APP_075

- **Test Case ID:** TS_APP_075
- **Module:** Settings
- **Feature:** test local database fetch for doctor call emergency button after biometric authentication failure
- **Test Title:** Verify behavior of doctor call emergency button during attempts to test local database fetch after biometric authentication failure
- **Objective:** Evaluate that user can safely execute test local database fetch for doctor call emergency button after biometric authentication failure under system checks.
- **Requirement ID:** REQ-APP-075
- **Preconditions:** System state is reset, and target console is directed to doctor call emergency button configuration after biometric authentication failure (Ref APP_075).
- **Test Steps:**
1. Target active interface for doctor call emergency button.
2. Trigger action to test local database fetch after biometric authentication failure.
3. Collect audit logs and confirm status code validation (Check APP_075).
- **Test Data:** Target: doctor call emergency button, Action: test local database fetch, Parameters: after biometric authentication failure, Case Index: APP_075
- **Expected Result:** The verification checks confirm that the initialization starts within SLA successfully under reference APP_075.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-075
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_075_success.png

# Test Case: TS_APP_094

- **Test Case ID:** TS_APP_094
- **Module:** Settings
- **Feature:** inspect alarm configuration for api connection recovery check after biometric authentication failure
- **Test Title:** Verify behavior of api connection recovery check during attempts to inspect alarm configuration after biometric authentication failure
- **Objective:** Evaluate that user can safely execute inspect alarm configuration for api connection recovery check after biometric authentication failure under system checks.
- **Requirement ID:** REQ-APP-094
- **Preconditions:** System state is reset, and target console is directed to api connection recovery check configuration after biometric authentication failure (Ref APP_094).
- **Test Steps:**
1. Target active interface for api connection recovery check.
2. Trigger action to inspect alarm configuration after biometric authentication failure.
3. Collect audit logs and confirm status code validation (Check APP_094).
- **Test Data:** Target: api connection recovery check, Action: inspect alarm configuration, Parameters: after biometric authentication failure, Case Index: APP_094
- **Expected Result:** The verification checks confirm that the audio recording starts successfully successfully under reference APP_094.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-094
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_094_success.png

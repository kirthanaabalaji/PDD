# Test Case: TC_APP_179

- **Test Case ID:** TC_APP_179
- **Module:** Settings
- **Feature:** verify native toast layout for symptom logs calendar view when offline network state is active
- **Test Title:** Verify behavior of symptom logs calendar view during attempts to verify native toast layout when offline network state is active
- **Objective:** Evaluate that user can safely execute verify native toast layout for symptom logs calendar view when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-179
- **Preconditions:** System state is reset, and target console is directed to symptom logs calendar view configuration when offline network state is active (Ref APP_179).
- **Test Steps:**
1. Target active interface for symptom logs calendar view.
2. Trigger action to verify native toast layout when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_179).
- **Test Data:** Target: symptom logs calendar view, Action: verify native toast layout, Parameters: when offline network state is active, Case Index: APP_179
- **Expected Result:** The verification checks confirm that the audio recording starts successfully successfully under reference APP_179.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-179
- **Execution Time:** 2.50s
- **Evidence:** evidence/TC_APP_179_success.png

# Test Case: TS_APP_264

- **Test Case ID:** TS_APP_264
- **Module:** Settings
- **Feature:** test local database fetch for system settings redirect link when background storage is cleared
- **Test Title:** Verify behavior of system settings redirect link during attempts to test local database fetch when background storage is cleared
- **Objective:** Evaluate that user can safely execute test local database fetch for system settings redirect link when background storage is cleared under system checks.
- **Requirement ID:** REQ-APP-264
- **Preconditions:** System state is reset, and target console is directed to system settings redirect link configuration when background storage is cleared (Ref APP_264).
- **Test Steps:**
1. Target active interface for system settings redirect link.
2. Trigger action to test local database fetch when background storage is cleared.
3. Collect audit logs and confirm status code validation (Check APP_264).
- **Test Data:** Target: system settings redirect link, Action: test local database fetch, Parameters: when background storage is cleared, Case Index: APP_264
- **Expected Result:** The verification checks confirm that the audio recording starts successfully successfully under reference APP_264.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-APP-264
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_264_success.png

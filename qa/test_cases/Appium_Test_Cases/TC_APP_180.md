# Test Case: TC_APP_180

- **Test Case ID:** TC_APP_180
- **Module:** Settings
- **Feature:** test local database fetch for dark mode system theme config when database storage quota is exceeded
- **Test Title:** Verify behavior of dark mode system theme config during attempts to test local database fetch when database storage quota is exceeded
- **Objective:** Evaluate that user can safely execute test local database fetch for dark mode system theme config when database storage quota is exceeded under system checks.
- **Requirement ID:** REQ-APP-180
- **Preconditions:** System state is reset, and target console is directed to dark mode system theme config configuration when database storage quota is exceeded (Ref APP_180).
- **Test Steps:**
1. Target active interface for dark mode system theme config.
2. Trigger action to test local database fetch when database storage quota is exceeded.
3. Collect audit logs and confirm status code validation (Check APP_180).
- **Test Data:** Target: dark mode system theme config, Action: test local database fetch, Parameters: when database storage quota is exceeded, Case Index: APP_180
- **Expected Result:** The verification checks confirm that the process executes in background thread successfully under reference APP_180.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-APP-180
- **Execution Time:** 1.50s
- **Evidence:** evidence/TC_APP_180_success.png

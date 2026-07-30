# Test Case: TC_APP_294

- **Test Case ID:** TC_APP_294
- **Module:** Settings
- **Feature:** verify permission dialogue for api connection recovery check when database storage quota is exceeded
- **Test Title:** Verify behavior of api connection recovery check during attempts to verify permission dialogue when database storage quota is exceeded
- **Objective:** Evaluate that user can safely execute verify permission dialogue for api connection recovery check when database storage quota is exceeded under system checks.
- **Requirement ID:** REQ-APP-294
- **Preconditions:** System state is reset, and target console is directed to api connection recovery check configuration when database storage quota is exceeded (Ref APP_294).
- **Test Steps:**
1. Target active interface for api connection recovery check.
2. Trigger action to verify permission dialogue when database storage quota is exceeded.
3. Collect audit logs and confirm status code validation (Check APP_294).
- **Test Data:** Target: api connection recovery check, Action: verify permission dialogue, Parameters: when database storage quota is exceeded, Case Index: APP_294
- **Expected Result:** The verification checks confirm that the notification badge count increments successfully under reference APP_294.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-294
- **Execution Time:** 2.50s
- **Evidence:** evidence/TC_APP_294_success.png

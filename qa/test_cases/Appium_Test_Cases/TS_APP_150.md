# Test Case: TS_APP_150

- **Test Case ID:** TS_APP_150
- **Module:** Authentication
- **Feature:** test background execution for welcome screen layout when background storage is cleared
- **Test Title:** Verify behavior of welcome screen layout during attempts to test background execution when background storage is cleared
- **Objective:** Evaluate that user can safely execute test background execution for welcome screen layout when background storage is cleared under system checks.
- **Requirement ID:** REQ-APP-150
- **Preconditions:** System state is reset, and target console is directed to welcome screen layout configuration when background storage is cleared (Ref APP_150).
- **Test Steps:**
1. Target active interface for welcome screen layout.
2. Trigger action to test background execution when background storage is cleared.
3. Collect audit logs and confirm status code validation (Check APP_150).
- **Test Data:** Target: welcome screen layout, Action: test background execution, Parameters: when background storage is cleared, Case Index: APP_150
- **Expected Result:** The verification checks confirm that the image crop boundaries are validated successfully under reference APP_150.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-150
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_150_success.png

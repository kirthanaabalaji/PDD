# Test Case: TC_APP_214

- **Test Case ID:** TC_APP_214
- **Module:** Settings
- **Feature:** verify image dimensions for system settings redirect link with multiple rapid click gestures
- **Test Title:** Verify behavior of system settings redirect link during attempts to verify image dimensions with multiple rapid click gestures
- **Objective:** Evaluate that user can safely execute verify image dimensions for system settings redirect link with multiple rapid click gestures under system checks.
- **Requirement ID:** REQ-APP-214
- **Preconditions:** System state is reset, and target console is directed to system settings redirect link configuration with multiple rapid click gestures (Ref APP_214).
- **Test Steps:**
1. Target active interface for system settings redirect link.
2. Trigger action to verify image dimensions with multiple rapid click gestures.
3. Collect audit logs and confirm status code validation (Check APP_214).
- **Test Data:** Target: system settings redirect link, Action: verify image dimensions, Parameters: with multiple rapid click gestures, Case Index: APP_214
- **Expected Result:** The verification checks confirm that the process executes in background thread successfully under reference APP_214.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-214
- **Execution Time:** 2.50s
- **Evidence:** evidence/TC_APP_214_success.png

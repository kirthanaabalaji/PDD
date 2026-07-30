# Test Case: TC_APP_226

- **Test Case ID:** TC_APP_226
- **Module:** Settings
- **Feature:** trigger orientation switch for network retry backup loop when background storage is cleared
- **Test Title:** Verify behavior of network retry backup loop during attempts to trigger orientation switch when background storage is cleared
- **Objective:** Evaluate that user can safely execute trigger orientation switch for network retry backup loop when background storage is cleared under system checks.
- **Requirement ID:** REQ-APP-226
- **Preconditions:** System state is reset, and target console is directed to network retry backup loop configuration when background storage is cleared (Ref APP_226).
- **Test Steps:**
1. Target active interface for network retry backup loop.
2. Trigger action to trigger orientation switch when background storage is cleared.
3. Collect audit logs and confirm status code validation (Check APP_226).
- **Test Data:** Target: network retry backup loop, Action: trigger orientation switch, Parameters: when background storage is cleared, Case Index: APP_226
- **Expected Result:** The verification checks confirm that the notification badge count increments successfully under reference APP_226.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-226
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_226_success.png

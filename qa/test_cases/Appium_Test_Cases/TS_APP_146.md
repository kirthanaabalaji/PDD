# Test Case: TS_APP_146

- **Test Case ID:** TS_APP_146
- **Module:** Settings
- **Feature:** inspect storage path allocation for network latency indicator under extreme low battery conditions
- **Test Title:** Verify behavior of network latency indicator during attempts to inspect storage path allocation under extreme low battery conditions
- **Objective:** Evaluate that user can safely execute inspect storage path allocation for network latency indicator under extreme low battery conditions under system checks.
- **Requirement ID:** REQ-APP-146
- **Preconditions:** System state is reset, and target console is directed to network latency indicator configuration under extreme low battery conditions (Ref APP_146).
- **Test Steps:**
1. Target active interface for network latency indicator.
2. Trigger action to inspect storage path allocation under extreme low battery conditions.
3. Collect audit logs and confirm status code validation (Check APP_146).
- **Test Data:** Target: network latency indicator, Action: inspect storage path allocation, Parameters: under extreme low battery conditions, Case Index: APP_146
- **Expected Result:** The verification checks confirm that the process executes in background thread successfully under reference APP_146.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-146
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_146_success.png

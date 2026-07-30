# Test Case: TS_APP_127

- **Test Case ID:** TS_APP_127
- **Module:** Settings
- **Feature:** audit touch target scale for device orientation toggle under extreme low battery conditions
- **Test Title:** Verify behavior of device orientation toggle during attempts to audit touch target scale under extreme low battery conditions
- **Objective:** Evaluate that user can safely execute audit touch target scale for device orientation toggle under extreme low battery conditions under system checks.
- **Requirement ID:** REQ-APP-127
- **Preconditions:** System state is reset, and target console is directed to device orientation toggle configuration under extreme low battery conditions (Ref APP_127).
- **Test Steps:**
1. Target active interface for device orientation toggle.
2. Trigger action to audit touch target scale under extreme low battery conditions.
3. Collect audit logs and confirm status code validation (Check APP_127).
- **Test Data:** Target: device orientation toggle, Action: audit touch target scale, Parameters: under extreme low battery conditions, Case Index: APP_127
- **Expected Result:** The verification checks confirm that the network requests are queued for retry successfully under reference APP_127.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-127
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_127_success.png

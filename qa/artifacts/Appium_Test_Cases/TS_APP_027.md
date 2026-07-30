# Test Case: TS_APP_027

- **Test Case ID:** TS_APP_027
- **Module:** Settings
- **Feature:** monitor memory consumption for device orientation toggle when offline network state is active
- **Test Title:** Verify behavior of device orientation toggle during attempts to monitor memory consumption when offline network state is active
- **Objective:** Evaluate that user can safely execute monitor memory consumption for device orientation toggle when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-027
- **Preconditions:** System state is reset, and target console is directed to device orientation toggle configuration when offline network state is active (Ref APP_027).
- **Test Steps:**
1. Target active interface for device orientation toggle.
2. Trigger action to monitor memory consumption when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_027).
- **Test Data:** Target: device orientation toggle, Action: monitor memory consumption, Parameters: when offline network state is active, Case Index: APP_027
- **Expected Result:** The verification checks confirm that the process executes in background thread successfully under reference APP_027.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-027
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_027_success.png

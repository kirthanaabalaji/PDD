# Test Case: TS_APP_084

- **Test Case ID:** TS_APP_084
- **Module:** Dashboard
- **Feature:** verify permission dialogue for streak card achievements progress when offline network state is active
- **Test Title:** Verify behavior of streak card achievements progress during attempts to verify permission dialogue when offline network state is active
- **Objective:** Evaluate that user can safely execute verify permission dialogue for streak card achievements progress when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-084
- **Preconditions:** System state is reset, and target console is directed to streak card achievements progress configuration when offline network state is active (Ref APP_084).
- **Test Steps:**
1. Target active interface for streak card achievements progress.
2. Trigger action to verify permission dialogue when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_084).
- **Test Data:** Target: streak card achievements progress, Action: verify permission dialogue, Parameters: when offline network state is active, Case Index: APP_084
- **Expected Result:** The verification checks confirm that the resource lock is released cleanly successfully under reference APP_084.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-APP-084
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_084_success.png

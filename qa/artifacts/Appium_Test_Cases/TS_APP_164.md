# Test Case: TS_APP_164

- **Test Case ID:** TS_APP_164
- **Module:** Settings
- **Feature:** test push alert payload for system settings redirect link when system notification service crashes
- **Test Title:** Verify behavior of system settings redirect link during attempts to test push alert payload when system notification service crashes
- **Objective:** Evaluate that user can safely execute test push alert payload for system settings redirect link when system notification service crashes under system checks.
- **Requirement ID:** REQ-APP-164
- **Preconditions:** System state is reset, and target console is directed to system settings redirect link configuration when system notification service crashes (Ref APP_164).
- **Test Steps:**
1. Target active interface for system settings redirect link.
2. Trigger action to test push alert payload when system notification service crashes.
3. Collect audit logs and confirm status code validation (Check APP_164).
- **Test Data:** Target: system settings redirect link, Action: test push alert payload, Parameters: when system notification service crashes, Case Index: APP_164
- **Expected Result:** The verification checks confirm that the item is scrolled into focus successfully under reference APP_164.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-APP-164
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_164_success.png

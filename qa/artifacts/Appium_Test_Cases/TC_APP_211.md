# Test Case: TC_APP_211

- **Test Case ID:** TC_APP_211
- **Module:** Notifications
- **Feature:** audit touch target scale for notification badge count updater during package upgrade install
- **Test Title:** Verify behavior of notification badge count updater during attempts to audit touch target scale during package upgrade install
- **Objective:** Evaluate that user can safely execute audit touch target scale for notification badge count updater during package upgrade install under system checks.
- **Requirement ID:** REQ-APP-211
- **Preconditions:** System state is reset, and target console is directed to notification badge count updater configuration during package upgrade install (Ref APP_211).
- **Test Steps:**
1. Target active interface for notification badge count updater.
2. Trigger action to audit touch target scale during package upgrade install.
3. Collect audit logs and confirm status code validation (Check APP_211).
- **Test Data:** Target: notification badge count updater, Action: audit touch target scale, Parameters: during package upgrade install, Case Index: APP_211
- **Expected Result:** The verification checks confirm that the initialization starts within SLA successfully under reference APP_211.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-211
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_211_success.png

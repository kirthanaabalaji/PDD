# Test Case: TC_APP_161

- **Test Case ID:** TC_APP_161
- **Module:** Notifications
- **Feature:** execute deep link request for notification badge count updater when database storage quota is exceeded
- **Test Title:** Verify behavior of notification badge count updater during attempts to execute deep link request when database storage quota is exceeded
- **Objective:** Evaluate that user can safely execute execute deep link request for notification badge count updater when database storage quota is exceeded under system checks.
- **Requirement ID:** REQ-APP-161
- **Preconditions:** System state is reset, and target console is directed to notification badge count updater configuration when database storage quota is exceeded (Ref APP_161).
- **Test Steps:**
1. Target active interface for notification badge count updater.
2. Trigger action to execute deep link request when database storage quota is exceeded.
3. Collect audit logs and confirm status code validation (Check APP_161).
- **Test Data:** Target: notification badge count updater, Action: execute deep link request, Parameters: when database storage quota is exceeded, Case Index: APP_161
- **Expected Result:** The verification checks confirm that the network requests are queued for retry successfully under reference APP_161.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-161
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_161_success.png

# Test Case: TC_APP_115

- **Test Case ID:** TC_APP_115
- **Module:** Notifications
- **Feature:** inspect alarm configuration for push notification handler during database compaction sync
- **Test Title:** Verify behavior of push notification handler during attempts to inspect alarm configuration during database compaction sync
- **Objective:** Evaluate that user can safely execute inspect alarm configuration for push notification handler during database compaction sync under system checks.
- **Requirement ID:** REQ-APP-115
- **Preconditions:** System state is reset, and target console is directed to push notification handler configuration during database compaction sync (Ref APP_115).
- **Test Steps:**
1. Target active interface for push notification handler.
2. Trigger action to inspect alarm configuration during database compaction sync.
3. Collect audit logs and confirm status code validation (Check APP_115).
- **Test Data:** Target: push notification handler, Action: inspect alarm configuration, Parameters: during database compaction sync, Case Index: APP_115
- **Expected Result:** The verification checks confirm that the database commits transaction successfully under reference APP_115.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-115
- **Execution Time:** 1.50s
- **Evidence:** evidence/TC_APP_115_success.png

# Test Case: TS_APP_255

- **Test Case ID:** TS_APP_255
- **Module:** OfflineMode
- **Feature:** test background execution for local db compaction service when offline network state is active
- **Test Title:** Verify behavior of local db compaction service during attempts to test background execution when offline network state is active
- **Objective:** Evaluate that user can safely execute test background execution for local db compaction service when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-255
- **Preconditions:** System state is reset, and target console is directed to local db compaction service configuration when offline network state is active (Ref APP_255).
- **Test Steps:**
1. Target active interface for local db compaction service.
2. Trigger action to test background execution when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_255).
- **Test Data:** Target: local db compaction service, Action: test background execution, Parameters: when offline network state is active, Case Index: APP_255
- **Expected Result:** The verification checks confirm that the app shows system settings link successfully under reference APP_255.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-255
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_255_success.png

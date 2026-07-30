# Test Case: TS_APP_005

- **Test Case ID:** TS_APP_005
- **Module:** OfflineMode
- **Feature:** audit gesture scaling zoom for local db compaction service with multiple rapid click gestures
- **Test Title:** Verify behavior of local db compaction service during attempts to audit gesture scaling zoom with multiple rapid click gestures
- **Objective:** Evaluate that user can safely execute audit gesture scaling zoom for local db compaction service with multiple rapid click gestures under system checks.
- **Requirement ID:** REQ-APP-005
- **Preconditions:** System state is reset, and target console is directed to local db compaction service configuration with multiple rapid click gestures (Ref APP_005).
- **Test Steps:**
1. Target active interface for local db compaction service.
2. Trigger action to audit gesture scaling zoom with multiple rapid click gestures.
3. Collect audit logs and confirm status code validation (Check APP_005).
- **Test Data:** Target: local db compaction service, Action: audit gesture scaling zoom, Parameters: with multiple rapid click gestures, Case Index: APP_005
- **Expected Result:** The verification checks confirm that the notification badge count increments successfully under reference APP_005.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-005
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_005_success.png

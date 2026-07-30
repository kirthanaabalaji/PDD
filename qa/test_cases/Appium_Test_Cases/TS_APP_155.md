# Test Case: TS_APP_155

- **Test Case ID:** TS_APP_155
- **Module:** OfflineMode
- **Feature:** process voice capture for local db compaction service for assistive touch gestures
- **Test Title:** Verify behavior of local db compaction service during attempts to process voice capture for assistive touch gestures
- **Objective:** Evaluate that user can safely execute process voice capture for local db compaction service for assistive touch gestures under system checks.
- **Requirement ID:** REQ-APP-155
- **Preconditions:** System state is reset, and target console is directed to local db compaction service configuration for assistive touch gestures (Ref APP_155).
- **Test Steps:**
1. Target active interface for local db compaction service.
2. Trigger action to process voice capture for assistive touch gestures.
3. Collect audit logs and confirm status code validation (Check APP_155).
- **Test Data:** Target: local db compaction service, Action: process voice capture, Parameters: for assistive touch gestures, Case Index: APP_155
- **Expected Result:** The verification checks confirm that the toast notification is displayed successfully under reference APP_155.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-155
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_155_success.png

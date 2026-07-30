# Test Case: TC_APP_105

- **Test Case ID:** TC_APP_105
- **Module:** OfflineMode
- **Feature:** verify permission dialogue for local db compaction service on device orientation rotate
- **Test Title:** Verify behavior of local db compaction service during attempts to verify permission dialogue on device orientation rotate
- **Objective:** Evaluate that user can safely execute verify permission dialogue for local db compaction service on device orientation rotate under system checks.
- **Requirement ID:** REQ-APP-105
- **Preconditions:** System state is reset, and target console is directed to local db compaction service configuration on device orientation rotate (Ref APP_105).
- **Test Steps:**
1. Target active interface for local db compaction service.
2. Trigger action to verify permission dialogue on device orientation rotate.
3. Collect audit logs and confirm status code validation (Check APP_105).
- **Test Data:** Target: local db compaction service, Action: verify permission dialogue, Parameters: on device orientation rotate, Case Index: APP_105
- **Expected Result:** The verification checks confirm that the device releases memory allocations successfully under reference APP_105.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-APP-105
- **Execution Time:** 1.50s
- **Evidence:** evidence/TC_APP_105_success.png

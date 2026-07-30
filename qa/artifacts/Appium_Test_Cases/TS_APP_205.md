# Test Case: TS_APP_205

- **Test Case ID:** TS_APP_205
- **Module:** OfflineMode
- **Feature:** trigger orientation switch for local db compaction service on cold start app initialization
- **Test Title:** Verify behavior of local db compaction service during attempts to trigger orientation switch on cold start app initialization
- **Objective:** Evaluate that user can safely execute trigger orientation switch for local db compaction service on cold start app initialization under system checks.
- **Requirement ID:** REQ-APP-205
- **Preconditions:** System state is reset, and target console is directed to local db compaction service configuration on cold start app initialization (Ref APP_205).
- **Test Steps:**
1. Target active interface for local db compaction service.
2. Trigger action to trigger orientation switch on cold start app initialization.
3. Collect audit logs and confirm status code validation (Check APP_205).
- **Test Data:** Target: local db compaction service, Action: trigger orientation switch, Parameters: on cold start app initialization, Case Index: APP_205
- **Expected Result:** The verification checks confirm that the layout switches to landscape mode successfully under reference APP_205.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-APP-205
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_205_success.png

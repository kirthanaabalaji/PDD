# Test Case: TS_LOAD_194

- **Test Case ID:** TS_LOAD_194
- **Module:** AIChat
- **Feature:** test failover routing times for /api/chat/clear POST route with large session payload records
- **Test Title:** Verify behavior of /api/chat/clear POST route during attempts to test failover routing times with large session payload records
- **Objective:** Evaluate that user can safely execute test failover routing times for /api/chat/clear POST route with large session payload records under system checks.
- **Requirement ID:** REQ-LOAD-194
- **Preconditions:** System state is reset, and target console is directed to /api/chat/clear POST route configuration with large session payload records (Ref LOAD_194).
- **Test Steps:**
1. Target active interface for /api/chat/clear POST route.
2. Trigger action to test failover routing times with large session payload records.
3. Collect audit logs and confirm status code validation (Check LOAD_194).
- **Test Data:** Target: /api/chat/clear POST route, Action: test failover routing times, Parameters: with large session payload records, Case Index: LOAD_194
- **Expected Result:** The verification checks confirm that the log parser executes without writing delay successfully under reference LOAD_194.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-194
- **Execution Time:** 9.3s
- **Evidence:** logs/TS_LOAD_194_execution.log

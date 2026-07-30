# Test Case: TC_LOAD_236

- **Test Case ID:** TC_LOAD_236
- **Module:** BreathingAnalysis
- **Feature:** test failover routing times for /api/data/reports GET route during massive server cold start
- **Test Title:** Verify behavior of /api/data/reports GET route during attempts to test failover routing times during massive server cold start
- **Objective:** Evaluate that user can safely execute test failover routing times for /api/data/reports GET route during massive server cold start under system checks.
- **Requirement ID:** REQ-LOAD-236
- **Preconditions:** System state is reset, and target console is directed to /api/data/reports GET route configuration during massive server cold start (Ref LOAD_236).
- **Test Steps:**
1. Target active interface for /api/data/reports GET route.
2. Trigger action to test failover routing times during massive server cold start.
3. Collect audit logs and confirm status code validation (Check LOAD_236).
- **Test Data:** Target: /api/data/reports GET route, Action: test failover routing times, Parameters: during massive server cold start, Case Index: LOAD_236
- **Expected Result:** The verification checks confirm that the WebSocket session handles parallel connections successfully under reference LOAD_236.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-LOAD-236
- **Execution Time:** 11.7s
- **Evidence:** logs/TC_LOAD_236_execution.log

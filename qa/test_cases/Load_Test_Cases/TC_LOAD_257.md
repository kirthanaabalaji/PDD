# Test Case: TC_LOAD_257

- **Test Case ID:** TC_LOAD_257
- **Module:** Database
- **Feature:** test failover routing times for Mongoose symptom query indexes during server container restart cycles
- **Test Title:** Verify behavior of Mongoose symptom query indexes during attempts to test failover routing times during server container restart cycles
- **Objective:** Evaluate that user can safely execute test failover routing times for Mongoose symptom query indexes during server container restart cycles under system checks.
- **Requirement ID:** REQ-LOAD-257
- **Preconditions:** System state is reset, and target console is directed to Mongoose symptom query indexes configuration during server container restart cycles (Ref LOAD_257).
- **Test Steps:**
1. Target active interface for Mongoose symptom query indexes.
2. Trigger action to test failover routing times during server container restart cycles.
3. Collect audit logs and confirm status code validation (Check LOAD_257).
- **Test Data:** Target: Mongoose symptom query indexes, Action: test failover routing times, Parameters: during server container restart cycles, Case Index: LOAD_257
- **Expected Result:** The verification checks confirm that the connection pool handles load without timeout successfully under reference LOAD_257.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-LOAD-257
- **Execution Time:** 12.9s
- **Evidence:** logs/TC_LOAD_257_execution.log

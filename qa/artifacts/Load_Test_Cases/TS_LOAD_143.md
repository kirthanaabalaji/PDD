# Test Case: TS_LOAD_143

- **Test Case ID:** TS_LOAD_143
- **Module:** Database
- **Feature:** test system recovery latency for MongoDB Atlas index metrics during server container restart cycles
- **Test Title:** Verify behavior of MongoDB Atlas index metrics during attempts to test system recovery latency during server container restart cycles
- **Objective:** Evaluate that user can safely execute test system recovery latency for MongoDB Atlas index metrics during server container restart cycles under system checks.
- **Requirement ID:** REQ-LOAD-143
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas index metrics configuration during server container restart cycles (Ref LOAD_143).
- **Test Steps:**
1. Target active interface for MongoDB Atlas index metrics.
2. Trigger action to test system recovery latency during server container restart cycles.
3. Collect audit logs and confirm status code validation (Check LOAD_143).
- **Test Data:** Target: MongoDB Atlas index metrics, Action: test system recovery latency, Parameters: during server container restart cycles, Case Index: LOAD_143
- **Expected Result:** The verification checks confirm that the log parser executes without writing delay successfully under reference LOAD_143.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-143
- **Execution Time:** 8.1s
- **Evidence:** logs/TS_LOAD_143_execution.log

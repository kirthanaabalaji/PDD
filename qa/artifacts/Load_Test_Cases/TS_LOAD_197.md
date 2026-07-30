# Test Case: TS_LOAD_197

- **Test Case ID:** TS_LOAD_197
- **Module:** Database
- **Feature:** measure request throughput for MongoDB Atlas replication network with 2000 concurrent virtual users
- **Test Title:** Verify behavior of MongoDB Atlas replication network during attempts to measure request throughput with 2000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute measure request throughput for MongoDB Atlas replication network with 2000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-197
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas replication network configuration with 2000 concurrent virtual users (Ref LOAD_197).
- **Test Steps:**
1. Target active interface for MongoDB Atlas replication network.
2. Trigger action to measure request throughput with 2000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_197).
- **Test Data:** Target: MongoDB Atlas replication network, Action: measure request throughput, Parameters: with 2000 concurrent virtual users, Case Index: LOAD_197
- **Expected Result:** The verification checks confirm that the CPU execution load peaks below 80 percent successfully under reference LOAD_197.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-LOAD-197
- **Execution Time:** 12.9s
- **Evidence:** logs/TS_LOAD_197_execution.log

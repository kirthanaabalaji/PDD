# Test Case: TS_LOAD_247

- **Test Case ID:** TS_LOAD_247
- **Module:** Database
- **Feature:** inspect memory consumption for MongoDB Atlas replication network with 500 concurrent virtual users
- **Test Title:** Verify behavior of MongoDB Atlas replication network during attempts to inspect memory consumption with 500 concurrent virtual users
- **Objective:** Evaluate that user can safely execute inspect memory consumption for MongoDB Atlas replication network with 500 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-247
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas replication network configuration with 500 concurrent virtual users (Ref LOAD_247).
- **Test Steps:**
1. Target active interface for MongoDB Atlas replication network.
2. Trigger action to inspect memory consumption with 500 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_247).
- **Test Data:** Target: MongoDB Atlas replication network, Action: inspect memory consumption, Parameters: with 500 concurrent virtual users, Case Index: LOAD_247
- **Expected Result:** The verification checks confirm that the error rate stays under 1 percent successfully under reference LOAD_247.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-LOAD-247
- **Execution Time:** 12.9s
- **Evidence:** logs/TS_LOAD_247_execution.log

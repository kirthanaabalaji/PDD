# Test Case: TS_LOAD_047

- **Test Case ID:** TS_LOAD_047
- **Module:** Database
- **Feature:** test failover routing times for MongoDB Atlas replication network when rate limiting limits are reached
- **Test Title:** Verify behavior of MongoDB Atlas replication network during attempts to test failover routing times when rate limiting limits are reached
- **Objective:** Evaluate that user can safely execute test failover routing times for MongoDB Atlas replication network when rate limiting limits are reached under system checks.
- **Requirement ID:** REQ-LOAD-047
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas replication network configuration when rate limiting limits are reached (Ref LOAD_047).
- **Test Steps:**
1. Target active interface for MongoDB Atlas replication network.
2. Trigger action to test failover routing times when rate limiting limits are reached.
3. Collect audit logs and confirm status code validation (Check LOAD_047).
- **Test Data:** Target: MongoDB Atlas replication network, Action: test failover routing times, Parameters: when rate limiting limits are reached, Case Index: LOAD_047
- **Expected Result:** The verification checks confirm that the failover route restores active states successfully under reference LOAD_047.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-047
- **Execution Time:** 12.9s
- **Evidence:** logs/TS_LOAD_047_execution.log

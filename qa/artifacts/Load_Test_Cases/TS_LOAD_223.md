# Test Case: TS_LOAD_223

- **Test Case ID:** TS_LOAD_223
- **Module:** Database
- **Feature:** test query throughput for Multer payload size validator on database replica set failover
- **Test Title:** Verify behavior of Multer payload size validator during attempts to test query throughput on database replica set failover
- **Objective:** Evaluate that user can safely execute test query throughput for Multer payload size validator on database replica set failover under system checks.
- **Requirement ID:** REQ-LOAD-223
- **Preconditions:** System state is reset, and target console is directed to Multer payload size validator configuration on database replica set failover (Ref LOAD_223).
- **Test Steps:**
1. Target active interface for Multer payload size validator.
2. Trigger action to test query throughput on database replica set failover.
3. Collect audit logs and confirm status code validation (Check LOAD_223).
- **Test Data:** Target: Multer payload size validator, Action: test query throughput, Parameters: on database replica set failover, Case Index: LOAD_223
- **Expected Result:** The verification checks confirm that the connection pool handles load without timeout successfully under reference LOAD_223.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-LOAD-223
- **Execution Time:** 8.1s
- **Evidence:** logs/TS_LOAD_223_execution.log

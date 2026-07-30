# Test Case: TS_LOAD_131

- **Test Case ID:** TS_LOAD_131
- **Module:** Database
- **Feature:** test failover routing times for Cors verification origin whitelist under complex aggregation pipeline queries
- **Test Title:** Verify behavior of Cors verification origin whitelist during attempts to test failover routing times under complex aggregation pipeline queries
- **Objective:** Evaluate that user can safely execute test failover routing times for Cors verification origin whitelist under complex aggregation pipeline queries under system checks.
- **Requirement ID:** REQ-LOAD-131
- **Preconditions:** System state is reset, and target console is directed to Cors verification origin whitelist configuration under complex aggregation pipeline queries (Ref LOAD_131).
- **Test Steps:**
1. Target active interface for Cors verification origin whitelist.
2. Trigger action to test failover routing times under complex aggregation pipeline queries.
3. Collect audit logs and confirm status code validation (Check LOAD_131).
- **Test Data:** Target: Cors verification origin whitelist, Action: test failover routing times, Parameters: under complex aggregation pipeline queries, Case Index: LOAD_131
- **Expected Result:** The verification checks confirm that the autoscaling rules provision extra nodes successfully under reference LOAD_131.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-131
- **Execution Time:** 5.7s
- **Evidence:** logs/TS_LOAD_131_execution.log

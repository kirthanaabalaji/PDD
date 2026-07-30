# Test Case: TC_LOAD_110

- **Test Case ID:** TC_LOAD_110
- **Module:** Database
- **Feature:** test failover routing times for Redis cache response storage under continuous long-duration soak run
- **Test Title:** Verify behavior of Redis cache response storage during attempts to test failover routing times under continuous long-duration soak run
- **Objective:** Evaluate that user can safely execute test failover routing times for Redis cache response storage under continuous long-duration soak run under system checks.
- **Requirement ID:** REQ-LOAD-110
- **Preconditions:** System state is reset, and target console is directed to Redis cache response storage configuration under continuous long-duration soak run (Ref LOAD_110).
- **Test Steps:**
1. Target active interface for Redis cache response storage.
2. Trigger action to test failover routing times under continuous long-duration soak run.
3. Collect audit logs and confirm status code validation (Check LOAD_110).
- **Test Data:** Target: Redis cache response storage, Action: test failover routing times, Parameters: under continuous long-duration soak run, Case Index: LOAD_110
- **Expected Result:** The verification checks confirm that the downstream calls queue up safely successfully under reference LOAD_110.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-110
- **Execution Time:** 4.5s
- **Evidence:** logs/TC_LOAD_110_execution.log

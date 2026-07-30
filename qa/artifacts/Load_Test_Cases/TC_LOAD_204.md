# Test Case: TC_LOAD_204

- **Test Case ID:** TC_LOAD_204
- **Module:** Database
- **Feature:** verify database writes capacity for Express HTTP router cluster on database replica set failover
- **Test Title:** Verify behavior of Express HTTP router cluster during attempts to verify database writes capacity on database replica set failover
- **Objective:** Evaluate that user can safely execute verify database writes capacity for Express HTTP router cluster on database replica set failover under system checks.
- **Requirement ID:** REQ-LOAD-204
- **Preconditions:** System state is reset, and target console is directed to Express HTTP router cluster configuration on database replica set failover (Ref LOAD_204).
- **Test Steps:**
1. Target active interface for Express HTTP router cluster.
2. Trigger action to verify database writes capacity on database replica set failover.
3. Collect audit logs and confirm status code validation (Check LOAD_204).
- **Test Data:** Target: Express HTTP router cluster, Action: verify database writes capacity, Parameters: on database replica set failover, Case Index: LOAD_204
- **Expected Result:** The verification checks confirm that the response latency remains below 300ms successfully under reference LOAD_204.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-LOAD-204
- **Execution Time:** 9.3s
- **Evidence:** logs/TC_LOAD_204_execution.log

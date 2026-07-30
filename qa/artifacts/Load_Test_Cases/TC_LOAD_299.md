# Test Case: TC_LOAD_299

- **Test Case ID:** TC_LOAD_299
- **Module:** Authentication
- **Feature:** test failover routing times for /api/auth/logout invalidator on database replica set failover
- **Test Title:** Verify behavior of /api/auth/logout invalidator during attempts to test failover routing times on database replica set failover
- **Objective:** Evaluate that user can safely execute test failover routing times for /api/auth/logout invalidator on database replica set failover under system checks.
- **Requirement ID:** REQ-LOAD-299
- **Preconditions:** System state is reset, and target console is directed to /api/auth/logout invalidator configuration on database replica set failover (Ref LOAD_299).
- **Test Steps:**
1. Target active interface for /api/auth/logout invalidator.
2. Trigger action to test failover routing times on database replica set failover.
3. Collect audit logs and confirm status code validation (Check LOAD_299).
- **Test Data:** Target: /api/auth/logout invalidator, Action: test failover routing times, Parameters: on database replica set failover, Case Index: LOAD_299
- **Expected Result:** The verification checks confirm that the CPU execution load peaks below 80 percent successfully under reference LOAD_299.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-299
- **Execution Time:** 15.3s
- **Evidence:** logs/TC_LOAD_299_execution.log

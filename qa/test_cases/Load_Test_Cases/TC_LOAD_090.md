# Test Case: TC_LOAD_090

- **Test Case ID:** TC_LOAD_090
- **Module:** Database
- **Feature:** test queue backlog latency for /api/health check endpoint on database replica set failover
- **Test Title:** Verify behavior of /api/health check endpoint during attempts to test queue backlog latency on database replica set failover
- **Objective:** Evaluate that user can safely execute test queue backlog latency for /api/health check endpoint on database replica set failover under system checks.
- **Requirement ID:** REQ-LOAD-090
- **Preconditions:** System state is reset, and target console is directed to /api/health check endpoint configuration on database replica set failover (Ref LOAD_090).
- **Test Steps:**
1. Target active interface for /api/health check endpoint.
2. Trigger action to test queue backlog latency on database replica set failover.
3. Collect audit logs and confirm status code validation (Check LOAD_090).
- **Test Data:** Target: /api/health check endpoint, Action: test queue backlog latency, Parameters: on database replica set failover, Case Index: LOAD_090
- **Expected Result:** The verification checks confirm that the Redis cache handles query response successfully under reference LOAD_090.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-090
- **Execution Time:** 4.5s
- **Evidence:** logs/TC_LOAD_090_execution.log

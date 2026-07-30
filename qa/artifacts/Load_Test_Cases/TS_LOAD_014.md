# Test Case: TS_LOAD_014

- **Test Case ID:** TS_LOAD_014
- **Module:** Database
- **Feature:** evaluate connection pool reuse for JWT token refresh route on database replica set failover
- **Test Title:** Verify behavior of JWT token refresh route during attempts to evaluate connection pool reuse on database replica set failover
- **Objective:** Evaluate that user can safely execute evaluate connection pool reuse for JWT token refresh route on database replica set failover under system checks.
- **Requirement ID:** REQ-LOAD-014
- **Preconditions:** System state is reset, and target console is directed to JWT token refresh route configuration on database replica set failover (Ref LOAD_014).
- **Test Steps:**
1. Target active interface for JWT token refresh route.
2. Trigger action to evaluate connection pool reuse on database replica set failover.
3. Collect audit logs and confirm status code validation (Check LOAD_014).
- **Test Data:** Target: JWT token refresh route, Action: evaluate connection pool reuse, Parameters: on database replica set failover, Case Index: LOAD_014
- **Expected Result:** The verification checks confirm that the system throughput scales linearly successfully under reference LOAD_014.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-014
- **Execution Time:** 9.3s
- **Evidence:** logs/TS_LOAD_014_execution.log

# Test Case: TC_LOAD_071

- **Test Case ID:** TC_LOAD_071
- **Module:** SymptomTracking
- **Feature:** measure request throughput for /api/data/symptoms POST route on database replica set failover
- **Test Title:** Verify behavior of /api/data/symptoms POST route during attempts to measure request throughput on database replica set failover
- **Objective:** Evaluate that user can safely execute measure request throughput for /api/data/symptoms POST route on database replica set failover under system checks.
- **Requirement ID:** REQ-LOAD-071
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms POST route configuration on database replica set failover (Ref LOAD_071).
- **Test Steps:**
1. Target active interface for /api/data/symptoms POST route.
2. Trigger action to measure request throughput on database replica set failover.
3. Collect audit logs and confirm status code validation (Check LOAD_071).
- **Test Data:** Target: /api/data/symptoms POST route, Action: measure request throughput, Parameters: on database replica set failover, Case Index: LOAD_071
- **Expected Result:** The verification checks confirm that the request queue does not overflow backlog successfully under reference LOAD_071.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-071
- **Execution Time:** 5.7s
- **Evidence:** logs/TC_LOAD_071_execution.log

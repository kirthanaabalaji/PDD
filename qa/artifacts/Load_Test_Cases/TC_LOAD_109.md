# Test Case: TC_LOAD_109

- **Test Case ID:** TC_LOAD_109
- **Module:** Authentication
- **Feature:** verify cache hit ratio for /api/auth/forgot-password endpoint on database replica set failover
- **Test Title:** Verify behavior of /api/auth/forgot-password endpoint during attempts to verify cache hit ratio on database replica set failover
- **Objective:** Evaluate that user can safely execute verify cache hit ratio for /api/auth/forgot-password endpoint on database replica set failover under system checks.
- **Requirement ID:** REQ-LOAD-109
- **Preconditions:** System state is reset, and target console is directed to /api/auth/forgot-password endpoint configuration on database replica set failover (Ref LOAD_109).
- **Test Steps:**
1. Target active interface for /api/auth/forgot-password endpoint.
2. Trigger action to verify cache hit ratio on database replica set failover.
3. Collect audit logs and confirm status code validation (Check LOAD_109).
- **Test Data:** Target: /api/auth/forgot-password endpoint, Action: verify cache hit ratio, Parameters: on database replica set failover, Case Index: LOAD_109
- **Expected Result:** The verification checks confirm that the log parser executes without writing delay successfully under reference LOAD_109.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-LOAD-109
- **Execution Time:** 15.3s
- **Evidence:** logs/TC_LOAD_109_execution.log

# Test Case: TC_LOAD_271

- **Test Case ID:** TC_LOAD_271
- **Module:** SymptomTracking
- **Feature:** audit database query times for /api/data/symptoms POST route with high frequency preflight requests
- **Test Title:** Verify behavior of /api/data/symptoms POST route during attempts to audit database query times with high frequency preflight requests
- **Objective:** Evaluate that user can safely execute audit database query times for /api/data/symptoms POST route with high frequency preflight requests under system checks.
- **Requirement ID:** REQ-LOAD-271
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms POST route configuration with high frequency preflight requests (Ref LOAD_271).
- **Test Steps:**
1. Target active interface for /api/data/symptoms POST route.
2. Trigger action to audit database query times with high frequency preflight requests.
3. Collect audit logs and confirm status code validation (Check LOAD_271).
- **Test Data:** Target: /api/data/symptoms POST route, Action: audit database query times, Parameters: with high frequency preflight requests, Case Index: LOAD_271
- **Expected Result:** The verification checks confirm that the server restarts within execution limits successfully under reference LOAD_271.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-LOAD-271
- **Execution Time:** 5.7s
- **Evidence:** logs/TC_LOAD_271_execution.log

# Test Case: TS_LOAD_124

- **Test Case ID:** TS_LOAD_124
- **Module:** SymptomTracking
- **Feature:** audit database query times for /api/data/symptoms GET route during server container restart cycles
- **Test Title:** Verify behavior of /api/data/symptoms GET route during attempts to audit database query times during server container restart cycles
- **Objective:** Evaluate that user can safely execute audit database query times for /api/data/symptoms GET route during server container restart cycles under system checks.
- **Requirement ID:** REQ-LOAD-124
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms GET route configuration during server container restart cycles (Ref LOAD_124).
- **Test Steps:**
1. Target active interface for /api/data/symptoms GET route.
2. Trigger action to audit database query times during server container restart cycles.
3. Collect audit logs and confirm status code validation (Check LOAD_124).
- **Test Data:** Target: /api/data/symptoms GET route, Action: audit database query times, Parameters: during server container restart cycles, Case Index: LOAD_124
- **Expected Result:** The verification checks confirm that the Redis cache handles query response successfully under reference LOAD_124.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-LOAD-124
- **Execution Time:** 9.3s
- **Evidence:** logs/TS_LOAD_124_execution.log

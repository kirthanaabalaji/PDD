# Test Case: TC_LOAD_208

- **Test Case ID:** TC_LOAD_208
- **Module:** SymptomTracking
- **Feature:** audit database query times for /api/data/symptoms DELETE route during network connection dropping events
- **Test Title:** Verify behavior of /api/data/symptoms DELETE route during attempts to audit database query times during network connection dropping events
- **Objective:** Evaluate that user can safely execute audit database query times for /api/data/symptoms DELETE route during network connection dropping events under system checks.
- **Requirement ID:** REQ-LOAD-208
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms DELETE route configuration during network connection dropping events (Ref LOAD_208).
- **Test Steps:**
1. Target active interface for /api/data/symptoms DELETE route.
2. Trigger action to audit database query times during network connection dropping events.
3. Collect audit logs and confirm status code validation (Check LOAD_208).
- **Test Data:** Target: /api/data/symptoms DELETE route, Action: audit database query times, Parameters: during network connection dropping events, Case Index: LOAD_208
- **Expected Result:** The verification checks confirm that the database throughput handles burst operations successfully under reference LOAD_208.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-LOAD-208
- **Execution Time:** 14.1s
- **Evidence:** logs/TC_LOAD_208_execution.log

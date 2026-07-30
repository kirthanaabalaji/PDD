# Test Case: TS_LOAD_186

- **Test Case ID:** TS_LOAD_186
- **Module:** BreathingAnalysis
- **Feature:** check thread context switches for /api/data/reports GET route under continuous long-duration soak run
- **Test Title:** Verify behavior of /api/data/reports GET route during attempts to check thread context switches under continuous long-duration soak run
- **Objective:** Evaluate that user can safely execute check thread context switches for /api/data/reports GET route under continuous long-duration soak run under system checks.
- **Requirement ID:** REQ-LOAD-186
- **Preconditions:** System state is reset, and target console is directed to /api/data/reports GET route configuration under continuous long-duration soak run (Ref LOAD_186).
- **Test Steps:**
1. Target active interface for /api/data/reports GET route.
2. Trigger action to check thread context switches under continuous long-duration soak run.
3. Collect audit logs and confirm status code validation (Check LOAD_186).
- **Test Data:** Target: /api/data/reports GET route, Action: check thread context switches, Parameters: under continuous long-duration soak run, Case Index: LOAD_186
- **Expected Result:** The verification checks confirm that the server restarts within execution limits successfully under reference LOAD_186.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-186
- **Execution Time:** 11.7s
- **Evidence:** logs/TS_LOAD_186_execution.log

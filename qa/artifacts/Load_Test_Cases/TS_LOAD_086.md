# Test Case: TS_LOAD_086

- **Test Case ID:** TS_LOAD_086
- **Module:** BreathingAnalysis
- **Feature:** measure server warm start delay for /api/data/reports GET route during server container restart cycles
- **Test Title:** Verify behavior of /api/data/reports GET route during attempts to measure server warm start delay during server container restart cycles
- **Objective:** Evaluate that user can safely execute measure server warm start delay for /api/data/reports GET route during server container restart cycles under system checks.
- **Requirement ID:** REQ-LOAD-086
- **Preconditions:** System state is reset, and target console is directed to /api/data/reports GET route configuration during server container restart cycles (Ref LOAD_086).
- **Test Steps:**
1. Target active interface for /api/data/reports GET route.
2. Trigger action to measure server warm start delay during server container restart cycles.
3. Collect audit logs and confirm status code validation (Check LOAD_086).
- **Test Data:** Target: /api/data/reports GET route, Action: measure server warm start delay, Parameters: during server container restart cycles, Case Index: LOAD_086
- **Expected Result:** The verification checks confirm that the container memory utilization is stable successfully under reference LOAD_086.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-086
- **Execution Time:** 11.7s
- **Evidence:** logs/TS_LOAD_086_execution.log

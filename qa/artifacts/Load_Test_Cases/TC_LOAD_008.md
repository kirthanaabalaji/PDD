# Test Case: TC_LOAD_008

- **Test Case ID:** TC_LOAD_008
- **Module:** SymptomTracking
- **Feature:** measure request throughput for /api/data/symptoms DELETE route during massive server cold start
- **Test Title:** Verify behavior of /api/data/symptoms DELETE route during attempts to measure request throughput during massive server cold start
- **Objective:** Evaluate that user can safely execute measure request throughput for /api/data/symptoms DELETE route during massive server cold start under system checks.
- **Requirement ID:** REQ-LOAD-008
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms DELETE route configuration during massive server cold start (Ref LOAD_008).
- **Test Steps:**
1. Target active interface for /api/data/symptoms DELETE route.
2. Trigger action to measure request throughput during massive server cold start.
3. Collect audit logs and confirm status code validation (Check LOAD_008).
- **Test Data:** Target: /api/data/symptoms DELETE route, Action: measure request throughput, Parameters: during massive server cold start, Case Index: LOAD_008
- **Expected Result:** The verification checks confirm that the downstream calls queue up safely successfully under reference LOAD_008.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-LOAD-008
- **Execution Time:** 14.1s
- **Evidence:** logs/TC_LOAD_008_execution.log

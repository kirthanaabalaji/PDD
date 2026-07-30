# Test Case: TC_LOAD_180

- **Test Case ID:** TC_LOAD_180
- **Module:** BreathingExercises
- **Feature:** measure network bandwidth load for /api/data/sessions GET route when rate limiting limits are reached
- **Test Title:** Verify behavior of /api/data/sessions GET route during attempts to measure network bandwidth load when rate limiting limits are reached
- **Objective:** Evaluate that user can safely execute measure network bandwidth load for /api/data/sessions GET route when rate limiting limits are reached under system checks.
- **Requirement ID:** REQ-LOAD-180
- **Preconditions:** System state is reset, and target console is directed to /api/data/sessions GET route configuration when rate limiting limits are reached (Ref LOAD_180).
- **Test Steps:**
1. Target active interface for /api/data/sessions GET route.
2. Trigger action to measure network bandwidth load when rate limiting limits are reached.
3. Collect audit logs and confirm status code validation (Check LOAD_180).
- **Test Data:** Target: /api/data/sessions GET route, Action: measure network bandwidth load, Parameters: when rate limiting limits are reached, Case Index: LOAD_180
- **Expected Result:** The verification checks confirm that the CPU execution load peaks below 80 percent successfully under reference LOAD_180.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-LOAD-180
- **Execution Time:** 4.5s
- **Evidence:** logs/TC_LOAD_180_execution.log

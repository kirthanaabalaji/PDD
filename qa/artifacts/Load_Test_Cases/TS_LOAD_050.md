# Test Case: TS_LOAD_050

- **Test Case ID:** TS_LOAD_050
- **Module:** Authentication
- **Feature:** measure request throughput for /api/auth/register endpoint under continuous memory heap pressure
- **Test Title:** Verify behavior of /api/auth/register endpoint during attempts to measure request throughput under continuous memory heap pressure
- **Objective:** Evaluate that user can safely execute measure request throughput for /api/auth/register endpoint under continuous memory heap pressure under system checks.
- **Requirement ID:** REQ-LOAD-050
- **Preconditions:** System state is reset, and target console is directed to /api/auth/register endpoint configuration under continuous memory heap pressure (Ref LOAD_050).
- **Test Steps:**
1. Target active interface for /api/auth/register endpoint.
2. Trigger action to measure request throughput under continuous memory heap pressure.
3. Collect audit logs and confirm status code validation (Check LOAD_050).
- **Test Data:** Target: /api/auth/register endpoint, Action: measure request throughput, Parameters: under continuous memory heap pressure, Case Index: LOAD_050
- **Expected Result:** The verification checks confirm that the server restarts within execution limits successfully under reference LOAD_050.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-050
- **Execution Time:** 4.5s
- **Evidence:** logs/TS_LOAD_050_execution.log

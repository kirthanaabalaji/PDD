# Test Case: TS_LOAD_300

- **Test Case ID:** TS_LOAD_300
- **Module:** Authentication
- **Feature:** test queue backlog latency for /api/auth/register endpoint under continuous long-duration soak run
- **Test Title:** Verify behavior of /api/auth/register endpoint during attempts to test queue backlog latency under continuous long-duration soak run
- **Objective:** Evaluate that user can safely execute test queue backlog latency for /api/auth/register endpoint under continuous long-duration soak run under system checks.
- **Requirement ID:** REQ-LOAD-300
- **Preconditions:** System state is reset, and target console is directed to /api/auth/register endpoint configuration under continuous long-duration soak run (Ref LOAD_300).
- **Test Steps:**
1. Target active interface for /api/auth/register endpoint.
2. Trigger action to test queue backlog latency under continuous long-duration soak run.
3. Collect audit logs and confirm status code validation (Check LOAD_300).
- **Test Data:** Target: /api/auth/register endpoint, Action: test queue backlog latency, Parameters: under continuous long-duration soak run, Case Index: LOAD_300
- **Expected Result:** The verification checks confirm that the query index optimization prevents locks successfully under reference LOAD_300.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-LOAD-300
- **Execution Time:** 4.5s
- **Evidence:** logs/TS_LOAD_300_execution.log

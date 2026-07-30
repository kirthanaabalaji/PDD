# Test Case: TS_LOAD_200

- **Test Case ID:** TS_LOAD_200
- **Module:** Authentication
- **Feature:** check error rate threshold for /api/auth/register endpoint during server container restart cycles
- **Test Title:** Verify behavior of /api/auth/register endpoint during attempts to check error rate threshold during server container restart cycles
- **Objective:** Evaluate that user can safely execute check error rate threshold for /api/auth/register endpoint during server container restart cycles under system checks.
- **Requirement ID:** REQ-LOAD-200
- **Preconditions:** System state is reset, and target console is directed to /api/auth/register endpoint configuration during server container restart cycles (Ref LOAD_200).
- **Test Steps:**
1. Target active interface for /api/auth/register endpoint.
2. Trigger action to check error rate threshold during server container restart cycles.
3. Collect audit logs and confirm status code validation (Check LOAD_200).
- **Test Data:** Target: /api/auth/register endpoint, Action: check error rate threshold, Parameters: during server container restart cycles, Case Index: LOAD_200
- **Expected Result:** The verification checks confirm that the failover route restores active states successfully under reference LOAD_200.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-LOAD-200
- **Execution Time:** 4.5s
- **Evidence:** logs/TS_LOAD_200_execution.log

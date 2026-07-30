# Test Case: TS_LOAD_140

- **Test Case ID:** TS_LOAD_140
- **Module:** Database
- **Feature:** evaluate connection pool reuse for /api/health check endpoint with 2000 concurrent virtual users
- **Test Title:** Verify behavior of /api/health check endpoint during attempts to evaluate connection pool reuse with 2000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute evaluate connection pool reuse for /api/health check endpoint with 2000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-140
- **Preconditions:** System state is reset, and target console is directed to /api/health check endpoint configuration with 2000 concurrent virtual users (Ref LOAD_140).
- **Test Steps:**
1. Target active interface for /api/health check endpoint.
2. Trigger action to evaluate connection pool reuse with 2000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_140).
- **Test Data:** Target: /api/health check endpoint, Action: evaluate connection pool reuse, Parameters: with 2000 concurrent virtual users, Case Index: LOAD_140
- **Expected Result:** The verification checks confirm that the database throughput handles burst operations successfully under reference LOAD_140.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-LOAD-140
- **Execution Time:** 4.5s
- **Evidence:** logs/TS_LOAD_140_execution.log

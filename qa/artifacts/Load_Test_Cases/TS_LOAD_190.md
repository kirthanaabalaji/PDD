# Test Case: TS_LOAD_190

- **Test Case ID:** TS_LOAD_190
- **Module:** Database
- **Feature:** measure scaling trigger speed for /api/health check endpoint with 500 concurrent virtual users
- **Test Title:** Verify behavior of /api/health check endpoint during attempts to measure scaling trigger speed with 500 concurrent virtual users
- **Objective:** Evaluate that user can safely execute measure scaling trigger speed for /api/health check endpoint with 500 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-190
- **Preconditions:** System state is reset, and target console is directed to /api/health check endpoint configuration with 500 concurrent virtual users (Ref LOAD_190).
- **Test Steps:**
1. Target active interface for /api/health check endpoint.
2. Trigger action to measure scaling trigger speed with 500 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_190).
- **Test Data:** Target: /api/health check endpoint, Action: measure scaling trigger speed, Parameters: with 500 concurrent virtual users, Case Index: LOAD_190
- **Expected Result:** The verification checks confirm that the request queue does not overflow backlog successfully under reference LOAD_190.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-LOAD-190
- **Execution Time:** 4.5s
- **Evidence:** logs/TS_LOAD_190_execution.log

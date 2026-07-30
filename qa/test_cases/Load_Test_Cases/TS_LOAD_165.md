# Test Case: TS_LOAD_165

- **Test Case ID:** TS_LOAD_165
- **Module:** Authentication
- **Feature:** check thread context switches for /api/auth/reset-password endpoint with 1000 concurrent virtual users
- **Test Title:** Verify behavior of /api/auth/reset-password endpoint during attempts to check thread context switches with 1000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute check thread context switches for /api/auth/reset-password endpoint with 1000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-165
- **Preconditions:** System state is reset, and target console is directed to /api/auth/reset-password endpoint configuration with 1000 concurrent virtual users (Ref LOAD_165).
- **Test Steps:**
1. Target active interface for /api/auth/reset-password endpoint.
2. Trigger action to check thread context switches with 1000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_165).
- **Test Data:** Target: /api/auth/reset-password endpoint, Action: check thread context switches, Parameters: with 1000 concurrent virtual users, Case Index: LOAD_165
- **Expected Result:** The verification checks confirm that the autoscaling rules provision extra nodes successfully under reference LOAD_165.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-LOAD-165
- **Execution Time:** 10.5s
- **Evidence:** logs/TS_LOAD_165_execution.log

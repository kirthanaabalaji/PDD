# Test Case: TC_LOAD_159

- **Test Case ID:** TC_LOAD_159
- **Module:** Authentication
- **Feature:** measure network bandwidth load for /api/auth/forgot-password endpoint with 2000 concurrent virtual users
- **Test Title:** Verify behavior of /api/auth/forgot-password endpoint during attempts to measure network bandwidth load with 2000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute measure network bandwidth load for /api/auth/forgot-password endpoint with 2000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-159
- **Preconditions:** System state is reset, and target console is directed to /api/auth/forgot-password endpoint configuration with 2000 concurrent virtual users (Ref LOAD_159).
- **Test Steps:**
1. Target active interface for /api/auth/forgot-password endpoint.
2. Trigger action to measure network bandwidth load with 2000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_159).
- **Test Data:** Target: /api/auth/forgot-password endpoint, Action: measure network bandwidth load, Parameters: with 2000 concurrent virtual users, Case Index: LOAD_159
- **Expected Result:** The verification checks confirm that the bandwidth footprint meets network specs successfully under reference LOAD_159.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-159
- **Execution Time:** 15.3s
- **Evidence:** logs/TC_LOAD_159_execution.log

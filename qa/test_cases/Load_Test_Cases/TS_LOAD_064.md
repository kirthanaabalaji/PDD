# Test Case: TS_LOAD_064

- **Test Case ID:** TS_LOAD_064
- **Module:** Database
- **Feature:** measure scaling trigger speed for JWT token refresh route with 2000 concurrent virtual users
- **Test Title:** Verify behavior of JWT token refresh route during attempts to measure scaling trigger speed with 2000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute measure scaling trigger speed for JWT token refresh route with 2000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-064
- **Preconditions:** System state is reset, and target console is directed to JWT token refresh route configuration with 2000 concurrent virtual users (Ref LOAD_064).
- **Test Steps:**
1. Target active interface for JWT token refresh route.
2. Trigger action to measure scaling trigger speed with 2000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_064).
- **Test Data:** Target: JWT token refresh route, Action: measure scaling trigger speed, Parameters: with 2000 concurrent virtual users, Case Index: LOAD_064
- **Expected Result:** The verification checks confirm that the failover route restores active states successfully under reference LOAD_064.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-LOAD-064
- **Execution Time:** 9.3s
- **Evidence:** logs/TS_LOAD_064_execution.log

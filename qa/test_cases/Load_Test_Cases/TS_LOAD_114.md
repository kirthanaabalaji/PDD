# Test Case: TS_LOAD_114

- **Test Case ID:** TS_LOAD_114
- **Module:** Database
- **Feature:** check payload upload time for JWT token refresh route with 500 concurrent virtual users
- **Test Title:** Verify behavior of JWT token refresh route during attempts to check payload upload time with 500 concurrent virtual users
- **Objective:** Evaluate that user can safely execute check payload upload time for JWT token refresh route with 500 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-114
- **Preconditions:** System state is reset, and target console is directed to JWT token refresh route configuration with 500 concurrent virtual users (Ref LOAD_114).
- **Test Steps:**
1. Target active interface for JWT token refresh route.
2. Trigger action to check payload upload time with 500 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_114).
- **Test Data:** Target: JWT token refresh route, Action: check payload upload time, Parameters: with 500 concurrent virtual users, Case Index: LOAD_114
- **Expected Result:** The verification checks confirm that the autoscaling rules provision extra nodes successfully under reference LOAD_114.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-114
- **Execution Time:** 9.3s
- **Evidence:** logs/TS_LOAD_114_execution.log

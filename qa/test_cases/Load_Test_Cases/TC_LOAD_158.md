# Test Case: TC_LOAD_158

- **Test Case ID:** TC_LOAD_158
- **Module:** SymptomTracking
- **Feature:** check error rate threshold for /api/data/symptoms DELETE route with multi-threaded k6 load configurations
- **Test Title:** Verify behavior of /api/data/symptoms DELETE route during attempts to check error rate threshold with multi-threaded k6 load configurations
- **Objective:** Evaluate that user can safely execute check error rate threshold for /api/data/symptoms DELETE route with multi-threaded k6 load configurations under system checks.
- **Requirement ID:** REQ-LOAD-158
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms DELETE route configuration with multi-threaded k6 load configurations (Ref LOAD_158).
- **Test Steps:**
1. Target active interface for /api/data/symptoms DELETE route.
2. Trigger action to check error rate threshold with multi-threaded k6 load configurations.
3. Collect audit logs and confirm status code validation (Check LOAD_158).
- **Test Data:** Target: /api/data/symptoms DELETE route, Action: check error rate threshold, Parameters: with multi-threaded k6 load configurations, Case Index: LOAD_158
- **Expected Result:** The verification checks confirm that the Redis cache handles query response successfully under reference LOAD_158.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-158
- **Execution Time:** 14.1s
- **Evidence:** logs/TC_LOAD_158_execution.log

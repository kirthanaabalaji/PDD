# Test Case: TC_LOAD_101

- **Test Case ID:** TC_LOAD_101
- **Module:** Database
- **Feature:** test system recovery latency for MongoDB Atlas connection pool with multi-threaded k6 load configurations
- **Test Title:** Verify behavior of MongoDB Atlas connection pool during attempts to test system recovery latency with multi-threaded k6 load configurations
- **Objective:** Evaluate that user can safely execute test system recovery latency for MongoDB Atlas connection pool with multi-threaded k6 load configurations under system checks.
- **Requirement ID:** REQ-LOAD-101
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas connection pool configuration with multi-threaded k6 load configurations (Ref LOAD_101).
- **Test Steps:**
1. Target active interface for MongoDB Atlas connection pool.
2. Trigger action to test system recovery latency with multi-threaded k6 load configurations.
3. Collect audit logs and confirm status code validation (Check LOAD_101).
- **Test Data:** Target: MongoDB Atlas connection pool, Action: test system recovery latency, Parameters: with multi-threaded k6 load configurations, Case Index: LOAD_101
- **Expected Result:** The verification checks confirm that the server restarts within execution limits successfully under reference LOAD_101.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-LOAD-101
- **Execution Time:** 5.7s
- **Evidence:** logs/TC_LOAD_101_execution.log

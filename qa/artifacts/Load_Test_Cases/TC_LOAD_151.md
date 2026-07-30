# Test Case: TC_LOAD_151

- **Test Case ID:** TC_LOAD_151
- **Module:** Database
- **Feature:** verify cache hit ratio for MongoDB Atlas connection pool during network connection dropping events
- **Test Title:** Verify behavior of MongoDB Atlas connection pool during attempts to verify cache hit ratio during network connection dropping events
- **Objective:** Evaluate that user can safely execute verify cache hit ratio for MongoDB Atlas connection pool during network connection dropping events under system checks.
- **Requirement ID:** REQ-LOAD-151
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas connection pool configuration during network connection dropping events (Ref LOAD_151).
- **Test Steps:**
1. Target active interface for MongoDB Atlas connection pool.
2. Trigger action to verify cache hit ratio during network connection dropping events.
3. Collect audit logs and confirm status code validation (Check LOAD_151).
- **Test Data:** Target: MongoDB Atlas connection pool, Action: verify cache hit ratio, Parameters: during network connection dropping events, Case Index: LOAD_151
- **Expected Result:** The verification checks confirm that the WebSocket session handles parallel connections successfully under reference LOAD_151.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-LOAD-151
- **Execution Time:** 5.7s
- **Evidence:** logs/TC_LOAD_151_execution.log

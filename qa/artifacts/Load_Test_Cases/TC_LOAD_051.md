# Test Case: TC_LOAD_051

- **Test Case ID:** TC_LOAD_051
- **Module:** Database
- **Feature:** check payload upload time for MongoDB Atlas connection pool with 1000 concurrent virtual users
- **Test Title:** Verify behavior of MongoDB Atlas connection pool during attempts to check payload upload time with 1000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute check payload upload time for MongoDB Atlas connection pool with 1000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-051
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas connection pool configuration with 1000 concurrent virtual users (Ref LOAD_051).
- **Test Steps:**
1. Target active interface for MongoDB Atlas connection pool.
2. Trigger action to check payload upload time with 1000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_051).
- **Test Data:** Target: MongoDB Atlas connection pool, Action: check payload upload time, Parameters: with 1000 concurrent virtual users, Case Index: LOAD_051
- **Expected Result:** The verification checks confirm that the response latency remains below 300ms successfully under reference LOAD_051.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-051
- **Execution Time:** 5.7s
- **Evidence:** logs/TC_LOAD_051_execution.log

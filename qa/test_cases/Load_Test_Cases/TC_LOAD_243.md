# Test Case: TC_LOAD_243

- **Test Case ID:** TC_LOAD_243
- **Module:** Database
- **Feature:** measure network bandwidth load for MongoDB Atlas index metrics under continuous long-duration soak run
- **Test Title:** Verify behavior of MongoDB Atlas index metrics during attempts to measure network bandwidth load under continuous long-duration soak run
- **Objective:** Evaluate that user can safely execute measure network bandwidth load for MongoDB Atlas index metrics under continuous long-duration soak run under system checks.
- **Requirement ID:** REQ-LOAD-243
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas index metrics configuration under continuous long-duration soak run (Ref LOAD_243).
- **Test Steps:**
1. Target active interface for MongoDB Atlas index metrics.
2. Trigger action to measure network bandwidth load under continuous long-duration soak run.
3. Collect audit logs and confirm status code validation (Check LOAD_243).
- **Test Data:** Target: MongoDB Atlas index metrics, Action: measure network bandwidth load, Parameters: under continuous long-duration soak run, Case Index: LOAD_243
- **Expected Result:** The verification checks confirm that the Redis cache handles query response successfully under reference LOAD_243.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-243
- **Execution Time:** 8.1s
- **Evidence:** logs/TC_LOAD_243_execution.log

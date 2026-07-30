# Test Case: TC_LOAD_093

- **Test Case ID:** TC_LOAD_093
- **Module:** Database
- **Feature:** check payload upload time for MongoDB Atlas index metrics under complex aggregation pipeline queries
- **Test Title:** Verify behavior of MongoDB Atlas index metrics during attempts to check payload upload time under complex aggregation pipeline queries
- **Objective:** Evaluate that user can safely execute check payload upload time for MongoDB Atlas index metrics under complex aggregation pipeline queries under system checks.
- **Requirement ID:** REQ-LOAD-093
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas index metrics configuration under complex aggregation pipeline queries (Ref LOAD_093).
- **Test Steps:**
1. Target active interface for MongoDB Atlas index metrics.
2. Trigger action to check payload upload time under complex aggregation pipeline queries.
3. Collect audit logs and confirm status code validation (Check LOAD_093).
- **Test Data:** Target: MongoDB Atlas index metrics, Action: check payload upload time, Parameters: under complex aggregation pipeline queries, Case Index: LOAD_093
- **Expected Result:** The verification checks confirm that the downstream calls queue up safely successfully under reference LOAD_093.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-LOAD-093
- **Execution Time:** 8.1s
- **Evidence:** logs/TC_LOAD_093_execution.log

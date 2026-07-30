# Test Case: TC_LOAD_201

- **Test Case ID:** TC_LOAD_201
- **Module:** Database
- **Feature:** measure network bandwidth load for MongoDB Atlas connection pool when downstream Groq service is throttled
- **Test Title:** Verify behavior of MongoDB Atlas connection pool during attempts to measure network bandwidth load when downstream Groq service is throttled
- **Objective:** Evaluate that user can safely execute measure network bandwidth load for MongoDB Atlas connection pool when downstream Groq service is throttled under system checks.
- **Requirement ID:** REQ-LOAD-201
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas connection pool configuration when downstream Groq service is throttled (Ref LOAD_201).
- **Test Steps:**
1. Target active interface for MongoDB Atlas connection pool.
2. Trigger action to measure network bandwidth load when downstream Groq service is throttled.
3. Collect audit logs and confirm status code validation (Check LOAD_201).
- **Test Data:** Target: MongoDB Atlas connection pool, Action: measure network bandwidth load, Parameters: when downstream Groq service is throttled, Case Index: LOAD_201
- **Expected Result:** The verification checks confirm that the system throughput scales linearly successfully under reference LOAD_201.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-LOAD-201
- **Execution Time:** 5.7s
- **Evidence:** logs/TC_LOAD_201_execution.log

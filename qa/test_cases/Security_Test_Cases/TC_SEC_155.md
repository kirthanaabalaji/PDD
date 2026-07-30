# Test Case: TC_SEC_155

- **Test Case ID:** TC_SEC_155
- **Module:** AccessControl
- **Feature:** check stored script execution for MongoDB Atlas network IP access list for client local cookie storage
- **Test Title:** Verify behavior of MongoDB Atlas network IP access list during attempts to check stored script execution for client local cookie storage
- **Objective:** Evaluate that user can safely execute check stored script execution for MongoDB Atlas network IP access list for client local cookie storage under system checks.
- **Requirement ID:** REQ-SEC-155
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas network IP access list configuration for client local cookie storage (Ref SEC_155).
- **Test Steps:**
1. Target active interface for MongoDB Atlas network IP access list.
2. Trigger action to check stored script execution for client local cookie storage.
3. Collect audit logs and confirm status code validation (Check SEC_155).
- **Test Data:** Target: MongoDB Atlas network IP access list, Action: check stored script execution, Parameters: for client local cookie storage, Case Index: SEC_155
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_155.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-155
- **Execution Time:** 0.520s
- **Evidence:** logs/TC_SEC_155_execution.log

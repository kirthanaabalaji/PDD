# Test Case: TC_SEC_134

- **Test Case ID:** TC_SEC_134
- **Module:** AccessControl
- **Feature:** check stored script execution for GraphQL execution query depth limit using a different user database index
- **Test Title:** Verify behavior of GraphQL execution query depth limit during attempts to check stored script execution using a different user database index
- **Objective:** Evaluate that user can safely execute check stored script execution for GraphQL execution query depth limit using a different user database index under system checks.
- **Requirement ID:** REQ-SEC-134
- **Preconditions:** System state is reset, and target console is directed to GraphQL execution query depth limit configuration using a different user database index (Ref SEC_134).
- **Test Steps:**
1. Target active interface for GraphQL execution query depth limit.
2. Trigger action to check stored script execution using a different user database index.
3. Collect audit logs and confirm status code validation (Check SEC_134).
- **Test Data:** Target: GraphQL execution query depth limit, Action: check stored script execution, Parameters: using a different user database index, Case Index: SEC_134
- **Expected Result:** The verification checks confirm that the backend blocks terminal execution successfully under reference SEC_134.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-134
- **Execution Time:** 0.440s
- **Evidence:** logs/TC_SEC_134_execution.log

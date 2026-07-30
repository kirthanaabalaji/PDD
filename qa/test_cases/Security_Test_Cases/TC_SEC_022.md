# Test Case: TC_SEC_022

- **Test Case ID:** TC_SEC_022
- **Module:** AccessControl
- **Feature:** validate secure header parameters for command line shell execution check for client local cookie storage
- **Test Title:** Verify behavior of command line shell execution check during attempts to validate secure header parameters for client local cookie storage
- **Objective:** Evaluate that user can safely execute validate secure header parameters for command line shell execution check for client local cookie storage under system checks.
- **Requirement ID:** REQ-SEC-022
- **Preconditions:** System state is reset, and target console is directed to command line shell execution check configuration for client local cookie storage (Ref SEC_022).
- **Test Steps:**
1. Target active interface for command line shell execution check.
2. Trigger action to validate secure header parameters for client local cookie storage.
3. Collect audit logs and confirm status code validation (Check SEC_022).
- **Test Data:** Target: command line shell execution check, Action: validate secure header parameters, Parameters: for client local cookie storage, Case Index: SEC_022
- **Expected Result:** The verification checks confirm that the dependent tables are fully wiped successfully under reference SEC_022.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-022
- **Execution Time:** 0.280s
- **Evidence:** logs/TC_SEC_022_execution.log

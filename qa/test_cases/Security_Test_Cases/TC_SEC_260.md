# Test Case: TC_SEC_260

- **Test Case ID:** TC_SEC_260
- **Module:** AccessControl
- **Feature:** check stored script execution for express parameter pollution sanitizer with html tag script inputs
- **Test Title:** Verify behavior of express parameter pollution sanitizer during attempts to check stored script execution with html tag script inputs
- **Objective:** Evaluate that user can safely execute check stored script execution for express parameter pollution sanitizer with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-260
- **Preconditions:** System state is reset, and target console is directed to express parameter pollution sanitizer configuration with html tag script inputs (Ref SEC_260).
- **Test Steps:**
1. Target active interface for express parameter pollution sanitizer.
2. Trigger action to check stored script execution with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_260).
- **Test Data:** Target: express parameter pollution sanitizer, Action: check stored script execution, Parameters: with html tag script inputs, Case Index: SEC_260
- **Expected Result:** The verification checks confirm that the dependent tables are fully wiped successfully under reference SEC_260.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEC-260
- **Execution Time:** 0.120s
- **Evidence:** logs/TC_SEC_260_execution.log

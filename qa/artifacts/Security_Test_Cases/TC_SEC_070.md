# Test Case: TC_SEC_070

- **Test Case ID:** TC_SEC_070
- **Module:** AccessControl
- **Feature:** check traversal directory access for CSRF security token validator with html tag script inputs
- **Test Title:** Verify behavior of CSRF security token validator during attempts to check traversal directory access with html tag script inputs
- **Objective:** Evaluate that user can safely execute check traversal directory access for CSRF security token validator with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-070
- **Preconditions:** System state is reset, and target console is directed to CSRF security token validator configuration with html tag script inputs (Ref SEC_070).
- **Test Steps:**
1. Target active interface for CSRF security token validator.
2. Trigger action to check traversal directory access with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_070).
- **Test Data:** Target: CSRF security token validator, Action: check traversal directory access, Parameters: with html tag script inputs, Case Index: SEC_070
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_070.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-070
- **Execution Time:** 0.120s
- **Evidence:** logs/TC_SEC_070_execution.log

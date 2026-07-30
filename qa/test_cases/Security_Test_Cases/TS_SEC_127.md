# Test Case: TS_SEC_127

- **Test Case ID:** TS_SEC_127
- **Module:** SQLi
- **Feature:** validate secure header parameters for unauthenticated route access controls with html tag script inputs
- **Test Title:** Verify behavior of unauthenticated route access controls during attempts to validate secure header parameters with html tag script inputs
- **Objective:** Evaluate that user can safely execute validate secure header parameters for unauthenticated route access controls with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-127
- **Preconditions:** System state is reset, and target console is directed to unauthenticated route access controls configuration with html tag script inputs (Ref SEC_127).
- **Test Steps:**
1. Target active interface for unauthenticated route access controls.
2. Trigger action to validate secure header parameters with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_127).
- **Test Data:** Target: unauthenticated route access controls, Action: validate secure header parameters, Parameters: with html tag script inputs, Case Index: SEC_127
- **Expected Result:** The verification checks confirm that the application denies permission and logs 403 successfully under reference SEC_127.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-127
- **Execution Time:** 0.680s
- **Evidence:** logs/TS_SEC_127_execution.log

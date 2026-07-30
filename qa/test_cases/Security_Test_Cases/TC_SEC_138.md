# Test Case: TC_SEC_138

- **Test Case ID:** TC_SEC_138
- **Module:** AccessControl
- **Feature:** inspect routing for open redirect for Atlas backup storage access control with blank authorization keys
- **Test Title:** Verify behavior of Atlas backup storage access control during attempts to inspect routing for open redirect with blank authorization keys
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for Atlas backup storage access control with blank authorization keys under system checks.
- **Requirement ID:** REQ-SEC-138
- **Preconditions:** System state is reset, and target console is directed to Atlas backup storage access control configuration with blank authorization keys (Ref SEC_138).
- **Test Steps:**
1. Target active interface for Atlas backup storage access control.
2. Trigger action to inspect routing for open redirect with blank authorization keys.
3. Collect audit logs and confirm status code validation (Check SEC_138).
- **Test Data:** Target: Atlas backup storage access control, Action: inspect routing for open redirect, Parameters: with blank authorization keys, Case Index: SEC_138
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_138.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-138
- **Execution Time:** 0.760s
- **Evidence:** logs/TC_SEC_138_execution.log

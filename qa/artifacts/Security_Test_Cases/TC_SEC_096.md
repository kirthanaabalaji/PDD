# Test Case: TC_SEC_096

- **Test Case ID:** TC_SEC_096
- **Module:** AccessControl
- **Feature:** inspect routing for open redirect for API endpoint parameter validation schemas using a different user database index
- **Test Title:** Verify behavior of API endpoint parameter validation schemas during attempts to inspect routing for open redirect using a different user database index
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for API endpoint parameter validation schemas using a different user database index under system checks.
- **Requirement ID:** REQ-SEC-096
- **Preconditions:** System state is reset, and target console is directed to API endpoint parameter validation schemas configuration using a different user database index (Ref SEC_096).
- **Test Steps:**
1. Target active interface for API endpoint parameter validation schemas.
2. Trigger action to inspect routing for open redirect using a different user database index.
3. Collect audit logs and confirm status code validation (Check SEC_096).
- **Test Data:** Target: API endpoint parameter validation schemas, Action: inspect routing for open redirect, Parameters: using a different user database index, Case Index: SEC_096
- **Expected Result:** The verification checks confirm that the upload fails with file format error successfully under reference SEC_096.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-096
- **Execution Time:** 0.600s
- **Evidence:** logs/TC_SEC_096_execution.log

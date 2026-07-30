# Test Case: TS_SEC_144

- **Test Case ID:** TS_SEC_144
- **Module:** AccessControl
- **Feature:** test prompt payload injection for CORS preflight request routing check using relative path traversing dots
- **Test Title:** Verify behavior of CORS preflight request routing check during attempts to test prompt payload injection using relative path traversing dots
- **Objective:** Evaluate that user can safely execute test prompt payload injection for CORS preflight request routing check using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-144
- **Preconditions:** System state is reset, and target console is directed to CORS preflight request routing check configuration using relative path traversing dots (Ref SEC_144).
- **Test Steps:**
1. Target active interface for CORS preflight request routing check.
2. Trigger action to test prompt payload injection using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_144).
- **Test Data:** Target: CORS preflight request routing check, Action: test prompt payload injection, Parameters: using relative path traversing dots, Case Index: SEC_144
- **Expected Result:** The verification checks confirm that the application denies permission and logs 403 successfully under reference SEC_144.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-144
- **Execution Time:** 0.440s
- **Evidence:** logs/TS_SEC_144_execution.log

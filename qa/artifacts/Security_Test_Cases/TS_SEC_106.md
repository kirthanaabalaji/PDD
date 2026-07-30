# Test Case: TS_SEC_106

- **Test Case ID:** TS_SEC_106
- **Module:** SQLi
- **Feature:** validate secure header parameters for forgot password reset link token using relative path traversing dots
- **Test Title:** Verify behavior of forgot password reset link token during attempts to validate secure header parameters using relative path traversing dots
- **Objective:** Evaluate that user can safely execute validate secure header parameters for forgot password reset link token using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-106
- **Preconditions:** System state is reset, and target console is directed to forgot password reset link token configuration using relative path traversing dots (Ref SEC_106).
- **Test Steps:**
1. Target active interface for forgot password reset link token.
2. Trigger action to validate secure header parameters using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_106).
- **Test Data:** Target: forgot password reset link token, Action: validate secure header parameters, Parameters: using relative path traversing dots, Case Index: SEC_106
- **Expected Result:** The verification checks confirm that the security headers are parsed properly successfully under reference SEC_106.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-106
- **Execution Time:** 0.600s
- **Evidence:** logs/TS_SEC_106_execution.log

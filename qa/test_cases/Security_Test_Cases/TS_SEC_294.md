# Test Case: TS_SEC_294

- **Test Case ID:** TS_SEC_294
- **Module:** AccessControl
- **Feature:** test SQL injection bypass for CORS preflight request routing check against OWASP top 10 rules
- **Test Title:** Verify behavior of CORS preflight request routing check during attempts to test SQL injection bypass against OWASP top 10 rules
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for CORS preflight request routing check against OWASP top 10 rules under system checks.
- **Requirement ID:** REQ-SEC-294
- **Preconditions:** System state is reset, and target console is directed to CORS preflight request routing check configuration against OWASP top 10 rules (Ref SEC_294).
- **Test Steps:**
1. Target active interface for CORS preflight request routing check.
2. Trigger action to test SQL injection bypass against OWASP top 10 rules.
3. Collect audit logs and confirm status code validation (Check SEC_294).
- **Test Data:** Target: CORS preflight request routing check, Action: test SQL injection bypass, Parameters: against OWASP top 10 rules, Case Index: SEC_294
- **Expected Result:** The verification checks confirm that the dependent tables are fully wiped successfully under reference SEC_294.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-294
- **Execution Time:** 0.440s
- **Evidence:** logs/TS_SEC_294_execution.log

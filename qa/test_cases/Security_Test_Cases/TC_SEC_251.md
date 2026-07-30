# Test Case: TC_SEC_251

- **Test Case ID:** TC_SEC_251
- **Module:** AccessControl
- **Feature:** audit code injection vulnerabilities for HttpOnly and Secure session cookies using external URL domains
- **Test Title:** Verify behavior of HttpOnly and Secure session cookies during attempts to audit code injection vulnerabilities using external URL domains
- **Objective:** Evaluate that user can safely execute audit code injection vulnerabilities for HttpOnly and Secure session cookies using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-251
- **Preconditions:** System state is reset, and target console is directed to HttpOnly and Secure session cookies configuration using external URL domains (Ref SEC_251).
- **Test Steps:**
1. Target active interface for HttpOnly and Secure session cookies.
2. Trigger action to audit code injection vulnerabilities using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_251).
- **Test Data:** Target: HttpOnly and Secure session cookies, Action: audit code injection vulnerabilities, Parameters: using external URL domains, Case Index: SEC_251
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_251.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-251
- **Execution Time:** 0.200s
- **Evidence:** logs/TC_SEC_251_execution.log

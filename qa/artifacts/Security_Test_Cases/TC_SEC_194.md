# Test Case: TC_SEC_194

- **Test Case ID:** TC_SEC_194
- **Module:** AccessControl
- **Feature:** verify CSRF validation defenses for CORS preflight request routing check using external URL domains
- **Test Title:** Verify behavior of CORS preflight request routing check during attempts to verify CSRF validation defenses using external URL domains
- **Objective:** Evaluate that user can safely execute verify CSRF validation defenses for CORS preflight request routing check using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-194
- **Preconditions:** System state is reset, and target console is directed to CORS preflight request routing check configuration using external URL domains (Ref SEC_194).
- **Test Steps:**
1. Target active interface for CORS preflight request routing check.
2. Trigger action to verify CSRF validation defenses using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_194).
- **Test Data:** Target: CORS preflight request routing check, Action: verify CSRF validation defenses, Parameters: using external URL domains, Case Index: SEC_194
- **Expected Result:** The verification checks confirm that the relative path escape fails to load successfully under reference SEC_194.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-194
- **Execution Time:** 0.440s
- **Evidence:** logs/TC_SEC_194_execution.log

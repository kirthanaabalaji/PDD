# Test Case: TC_SEC_021

- **Test Case ID:** TC_SEC_021
- **Module:** IDOR
- **Feature:** test SQL injection bypass for IDOR checks on clinical reports with high frequency rapid authentication attempts
- **Test Title:** Verify behavior of IDOR checks on clinical reports during attempts to test SQL injection bypass with high frequency rapid authentication attempts
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for IDOR checks on clinical reports with high frequency rapid authentication attempts under system checks.
- **Requirement ID:** REQ-SEC-021
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on clinical reports configuration with high frequency rapid authentication attempts (Ref SEC_021).
- **Test Steps:**
1. Target active interface for IDOR checks on clinical reports.
2. Trigger action to test SQL injection bypass with high frequency rapid authentication attempts.
3. Collect audit logs and confirm status code validation (Check SEC_021).
- **Test Data:** Target: IDOR checks on clinical reports, Action: test SQL injection bypass, Parameters: with high frequency rapid authentication attempts, Case Index: SEC_021
- **Expected Result:** The verification checks confirm that the security headers are parsed properly successfully under reference SEC_021.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-021
- **Execution Time:** 0.200s
- **Evidence:** logs/TC_SEC_021_execution.log

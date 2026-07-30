# Test Case: TS_SEC_218

- **Test Case ID:** TS_SEC_218
- **Module:** IDOR
- **Feature:** check stored script execution for IDOR checks on breathing session logs against OWASP top 10 rules
- **Test Title:** Verify behavior of IDOR checks on breathing session logs during attempts to check stored script execution against OWASP top 10 rules
- **Objective:** Evaluate that user can safely execute check stored script execution for IDOR checks on breathing session logs against OWASP top 10 rules under system checks.
- **Requirement ID:** REQ-SEC-218
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on breathing session logs configuration against OWASP top 10 rules (Ref SEC_218).
- **Test Steps:**
1. Target active interface for IDOR checks on breathing session logs.
2. Trigger action to check stored script execution against OWASP top 10 rules.
3. Collect audit logs and confirm status code validation (Check SEC_218).
- **Test Data:** Target: IDOR checks on breathing session logs, Action: check stored script execution, Parameters: against OWASP top 10 rules, Case Index: SEC_218
- **Expected Result:** The verification checks confirm that the request is blocked by payload validator successfully under reference SEC_218.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-218
- **Execution Time:** 0.760s
- **Evidence:** logs/TS_SEC_218_execution.log

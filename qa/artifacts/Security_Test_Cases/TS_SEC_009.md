# Test Case: TS_SEC_009

- **Test Case ID:** TS_SEC_009
- **Module:** SQLi
- **Feature:** check cookie storage configurations for verify OTP code check routing against OWASP top 10 rules
- **Test Title:** Verify behavior of verify OTP code check routing during attempts to check cookie storage configurations against OWASP top 10 rules
- **Objective:** Evaluate that user can safely execute check cookie storage configurations for verify OTP code check routing against OWASP top 10 rules under system checks.
- **Requirement ID:** REQ-SEC-009
- **Preconditions:** System state is reset, and target console is directed to verify OTP code check routing configuration against OWASP top 10 rules (Ref SEC_009).
- **Test Steps:**
1. Target active interface for verify OTP code check routing.
2. Trigger action to check cookie storage configurations against OWASP top 10 rules.
3. Collect audit logs and confirm status code validation (Check SEC_009).
- **Test Data:** Target: verify OTP code check routing, Action: check cookie storage configurations, Parameters: against OWASP top 10 rules, Case Index: SEC_009
- **Expected Result:** The verification checks confirm that the input script is encoded and neutralized successfully under reference SEC_009.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-009
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_009_execution.log

# Test Case: TS_SEC_161

- **Test Case ID:** TS_SEC_161
- **Module:** AccessControl
- **Feature:** inspect logs for exposed keys for Gemini API prompt injection defense against OWASP top 10 rules
- **Test Title:** Verify behavior of Gemini API prompt injection defense during attempts to inspect logs for exposed keys against OWASP top 10 rules
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for Gemini API prompt injection defense against OWASP top 10 rules under system checks.
- **Requirement ID:** REQ-SEC-161
- **Preconditions:** System state is reset, and target console is directed to Gemini API prompt injection defense configuration against OWASP top 10 rules (Ref SEC_161).
- **Test Steps:**
1. Target active interface for Gemini API prompt injection defense.
2. Trigger action to inspect logs for exposed keys against OWASP top 10 rules.
3. Collect audit logs and confirm status code validation (Check SEC_161).
- **Test Data:** Target: Gemini API prompt injection defense, Action: inspect logs for exposed keys, Parameters: against OWASP top 10 rules, Case Index: SEC_161
- **Expected Result:** The verification checks confirm that the application denies permission and logs 403 successfully under reference SEC_161.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-161
- **Execution Time:** 0.200s
- **Evidence:** logs/TS_SEC_161_execution.log

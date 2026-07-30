# Test Case: TS_SEC_180

- **Test Case ID:** TS_SEC_180
- **Module:** AccessControl
- **Feature:** inspect routing for open redirect for multer audio file type validation against OWASP top 10 rules
- **Test Title:** Verify behavior of multer audio file type validation during attempts to inspect routing for open redirect against OWASP top 10 rules
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for multer audio file type validation against OWASP top 10 rules under system checks.
- **Requirement ID:** REQ-SEC-180
- **Preconditions:** System state is reset, and target console is directed to multer audio file type validation configuration against OWASP top 10 rules (Ref SEC_180).
- **Test Steps:**
1. Target active interface for multer audio file type validation.
2. Trigger action to inspect routing for open redirect against OWASP top 10 rules.
3. Collect audit logs and confirm status code validation (Check SEC_180).
- **Test Data:** Target: multer audio file type validation, Action: inspect routing for open redirect, Parameters: against OWASP top 10 rules, Case Index: SEC_180
- **Expected Result:** The verification checks confirm that the server blocks the unauthorized data access successfully under reference SEC_180.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-180
- **Execution Time:** 0.120s
- **Evidence:** logs/TS_SEC_180_execution.log

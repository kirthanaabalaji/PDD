# Test Case: TS_SEC_028

- **Test Case ID:** TS_SEC_028
- **Module:** AccessControl
- **Feature:** check traversal directory access for sensitive information log mask against OWASP top 10 rules
- **Test Title:** Verify behavior of sensitive information log mask during attempts to check traversal directory access against OWASP top 10 rules
- **Objective:** Evaluate that user can safely execute check traversal directory access for sensitive information log mask against OWASP top 10 rules under system checks.
- **Requirement ID:** REQ-SEC-028
- **Preconditions:** System state is reset, and target console is directed to sensitive information log mask configuration against OWASP top 10 rules (Ref SEC_028).
- **Test Steps:**
1. Target active interface for sensitive information log mask.
2. Trigger action to check traversal directory access against OWASP top 10 rules.
3. Collect audit logs and confirm status code validation (Check SEC_028).
- **Test Data:** Target: sensitive information log mask, Action: check traversal directory access, Parameters: against OWASP top 10 rules, Case Index: SEC_028
- **Expected Result:** The verification checks confirm that the upload fails with file format error successfully under reference SEC_028.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEC-028
- **Execution Time:** 0.760s
- **Evidence:** logs/TS_SEC_028_execution.log

# Test Case: TS_SEC_278

- **Test Case ID:** TS_SEC_278
- **Module:** AccessControl
- **Feature:** verify CSRF validation defenses for sensitive information log mask under unencrypted transport layer check
- **Test Title:** Verify behavior of sensitive information log mask during attempts to verify CSRF validation defenses under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute verify CSRF validation defenses for sensitive information log mask under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-278
- **Preconditions:** System state is reset, and target console is directed to sensitive information log mask configuration under unencrypted transport layer check (Ref SEC_278).
- **Test Steps:**
1. Target active interface for sensitive information log mask.
2. Trigger action to verify CSRF validation defenses under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_278).
- **Test Data:** Target: sensitive information log mask, Action: verify CSRF validation defenses, Parameters: under unencrypted transport layer check, Case Index: SEC_278
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_278.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-278
- **Execution Time:** 0.760s
- **Evidence:** logs/TS_SEC_278_execution.log

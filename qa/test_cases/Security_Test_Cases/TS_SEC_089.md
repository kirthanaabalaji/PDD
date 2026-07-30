# Test Case: TS_SEC_089

- **Test Case ID:** TS_SEC_089
- **Module:** AccessControl
- **Feature:** verify CSRF validation defenses for CORS response origin whitelist with html tag script inputs
- **Test Title:** Verify behavior of CORS response origin whitelist during attempts to verify CSRF validation defenses with html tag script inputs
- **Objective:** Evaluate that user can safely execute verify CSRF validation defenses for CORS response origin whitelist with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-089
- **Preconditions:** System state is reset, and target console is directed to CORS response origin whitelist configuration with html tag script inputs (Ref SEC_089).
- **Test Steps:**
1. Target active interface for CORS response origin whitelist.
2. Trigger action to verify CSRF validation defenses with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_089).
- **Test Data:** Target: CORS response origin whitelist, Action: verify CSRF validation defenses, Parameters: with html tag script inputs, Case Index: SEC_089
- **Expected Result:** The verification checks confirm that the security headers are parsed properly successfully under reference SEC_089.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-089
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_089_execution.log

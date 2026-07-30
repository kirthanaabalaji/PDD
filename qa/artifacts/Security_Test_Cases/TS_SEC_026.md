# Test Case: TS_SEC_026

- **Test Case ID:** TS_SEC_026
- **Module:** AccessControl
- **Feature:** verify CSRF validation defenses for static report PDF download access by altering token payload structure
- **Test Title:** Verify behavior of static report PDF download access during attempts to verify CSRF validation defenses by altering token payload structure
- **Objective:** Evaluate that user can safely execute verify CSRF validation defenses for static report PDF download access by altering token payload structure under system checks.
- **Requirement ID:** REQ-SEC-026
- **Preconditions:** System state is reset, and target console is directed to static report PDF download access configuration by altering token payload structure (Ref SEC_026).
- **Test Steps:**
1. Target active interface for static report PDF download access.
2. Trigger action to verify CSRF validation defenses by altering token payload structure.
3. Collect audit logs and confirm status code validation (Check SEC_026).
- **Test Data:** Target: static report PDF download access, Action: verify CSRF validation defenses, Parameters: by altering token payload structure, Case Index: SEC_026
- **Expected Result:** The verification checks confirm that the input script is encoded and neutralized successfully under reference SEC_026.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-026
- **Execution Time:** 0.600s
- **Evidence:** logs/TS_SEC_026_execution.log

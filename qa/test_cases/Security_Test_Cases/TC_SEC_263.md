# Test Case: TC_SEC_263

- **Test Case ID:** TC_SEC_263
- **Module:** AccessControl
- **Feature:** verify public route visibility for unvalidated URL redirection checks upon user profile account deletion
- **Test Title:** Verify behavior of unvalidated URL redirection checks during attempts to verify public route visibility upon user profile account deletion
- **Objective:** Evaluate that user can safely execute verify public route visibility for unvalidated URL redirection checks upon user profile account deletion under system checks.
- **Requirement ID:** REQ-SEC-263
- **Preconditions:** System state is reset, and target console is directed to unvalidated URL redirection checks configuration upon user profile account deletion (Ref SEC_263).
- **Test Steps:**
1. Target active interface for unvalidated URL redirection checks.
2. Trigger action to verify public route visibility upon user profile account deletion.
3. Collect audit logs and confirm status code validation (Check SEC_263).
- **Test Data:** Target: unvalidated URL redirection checks, Action: verify public route visibility, Parameters: upon user profile account deletion, Case Index: SEC_263
- **Expected Result:** The verification checks confirm that the application denies permission and logs 403 successfully under reference SEC_263.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-263
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_263_execution.log

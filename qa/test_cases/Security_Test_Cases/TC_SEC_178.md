# Test Case: TC_SEC_178

- **Test Case ID:** TC_SEC_178
- **Module:** AccessControl
- **Feature:** verify database decryption controls for sensitive information log mask by altering token payload structure
- **Test Title:** Verify behavior of sensitive information log mask during attempts to verify database decryption controls by altering token payload structure
- **Objective:** Evaluate that user can safely execute verify database decryption controls for sensitive information log mask by altering token payload structure under system checks.
- **Requirement ID:** REQ-SEC-178
- **Preconditions:** System state is reset, and target console is directed to sensitive information log mask configuration by altering token payload structure (Ref SEC_178).
- **Test Steps:**
1. Target active interface for sensitive information log mask.
2. Trigger action to verify database decryption controls by altering token payload structure.
3. Collect audit logs and confirm status code validation (Check SEC_178).
- **Test Data:** Target: sensitive information log mask, Action: verify database decryption controls, Parameters: by altering token payload structure, Case Index: SEC_178
- **Expected Result:** The verification checks confirm that the application denies permission and logs 403 successfully under reference SEC_178.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-178
- **Execution Time:** 0.760s
- **Evidence:** logs/TC_SEC_178_execution.log

# Test Case: TC_SEC_206

- **Test Case ID:** TC_SEC_206
- **Module:** SQLi
- **Feature:** verify cascade data wiping for forgot password reset link token upon user profile account deletion
- **Test Title:** Verify behavior of forgot password reset link token during attempts to verify cascade data wiping upon user profile account deletion
- **Objective:** Evaluate that user can safely execute verify cascade data wiping for forgot password reset link token upon user profile account deletion under system checks.
- **Requirement ID:** REQ-SEC-206
- **Preconditions:** System state is reset, and target console is directed to forgot password reset link token configuration upon user profile account deletion (Ref SEC_206).
- **Test Steps:**
1. Target active interface for forgot password reset link token.
2. Trigger action to verify cascade data wiping upon user profile account deletion.
3. Collect audit logs and confirm status code validation (Check SEC_206).
- **Test Data:** Target: forgot password reset link token, Action: verify cascade data wiping, Parameters: upon user profile account deletion, Case Index: SEC_206
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_206.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-206
- **Execution Time:** 0.600s
- **Evidence:** logs/TC_SEC_206_execution.log

# Test Case: TC_SEC_244

- **Test Case ID:** TC_SEC_244
- **Module:** AccessControl
- **Feature:** test injection path traversal for CORS preflight request routing check upon user profile account deletion
- **Test Title:** Verify behavior of CORS preflight request routing check during attempts to test injection path traversal upon user profile account deletion
- **Objective:** Evaluate that user can safely execute test injection path traversal for CORS preflight request routing check upon user profile account deletion under system checks.
- **Requirement ID:** REQ-SEC-244
- **Preconditions:** System state is reset, and target console is directed to CORS preflight request routing check configuration upon user profile account deletion (Ref SEC_244).
- **Test Steps:**
1. Target active interface for CORS preflight request routing check.
2. Trigger action to test injection path traversal upon user profile account deletion.
3. Collect audit logs and confirm status code validation (Check SEC_244).
- **Test Data:** Target: CORS preflight request routing check, Action: test injection path traversal, Parameters: upon user profile account deletion, Case Index: SEC_244
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_244.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEC-244
- **Execution Time:** 0.440s
- **Evidence:** logs/TC_SEC_244_execution.log

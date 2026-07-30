# Test Case: TC_SEC_193

- **Test Case ID:** TC_SEC_193
- **Module:** AccessControl
- **Feature:** test parameter parsing pollution for password hashing algorithm settings for client local cookie storage
- **Test Title:** Verify behavior of password hashing algorithm settings during attempts to test parameter parsing pollution for client local cookie storage
- **Objective:** Evaluate that user can safely execute test parameter parsing pollution for password hashing algorithm settings for client local cookie storage under system checks.
- **Requirement ID:** REQ-SEC-193
- **Preconditions:** System state is reset, and target console is directed to password hashing algorithm settings configuration for client local cookie storage (Ref SEC_193).
- **Test Steps:**
1. Target active interface for password hashing algorithm settings.
2. Trigger action to test parameter parsing pollution for client local cookie storage.
3. Collect audit logs and confirm status code validation (Check SEC_193).
- **Test Data:** Target: password hashing algorithm settings, Action: test parameter parsing pollution, Parameters: for client local cookie storage, Case Index: SEC_193
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_193.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-193
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_193_execution.log

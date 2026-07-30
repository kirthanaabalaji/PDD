# Test Case: TC_SEC_172

- **Test Case ID:** TC_SEC_172
- **Module:** AccessControl
- **Feature:** test parameter parsing pollution for command line shell execution check using a different user database index
- **Test Title:** Verify behavior of command line shell execution check during attempts to test parameter parsing pollution using a different user database index
- **Objective:** Evaluate that user can safely execute test parameter parsing pollution for command line shell execution check using a different user database index under system checks.
- **Requirement ID:** REQ-SEC-172
- **Preconditions:** System state is reset, and target console is directed to command line shell execution check configuration using a different user database index (Ref SEC_172).
- **Test Steps:**
1. Target active interface for command line shell execution check.
2. Trigger action to test parameter parsing pollution using a different user database index.
3. Collect audit logs and confirm status code validation (Check SEC_172).
- **Test Data:** Target: command line shell execution check, Action: test parameter parsing pollution, Parameters: using a different user database index, Case Index: SEC_172
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_172.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEC-172
- **Execution Time:** 0.280s
- **Evidence:** logs/TC_SEC_172_execution.log

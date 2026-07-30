# Test Case: TS_SEC_147

- **Test Case ID:** TS_SEC_147
- **Module:** AccessControl
- **Feature:** test SQL injection bypass for user metadata modification routes without providing auth token headers
- **Test Title:** Verify behavior of user metadata modification routes during attempts to test SQL injection bypass without providing auth token headers
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for user metadata modification routes without providing auth token headers under system checks.
- **Requirement ID:** REQ-SEC-147
- **Preconditions:** System state is reset, and target console is directed to user metadata modification routes configuration without providing auth token headers (Ref SEC_147).
- **Test Steps:**
1. Target active interface for user metadata modification routes.
2. Trigger action to test SQL injection bypass without providing auth token headers.
3. Collect audit logs and confirm status code validation (Check SEC_147).
- **Test Data:** Target: user metadata modification routes, Action: test SQL injection bypass, Parameters: without providing auth token headers, Case Index: SEC_147
- **Expected Result:** The verification checks confirm that the upload fails with file format error successfully under reference SEC_147.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-147
- **Execution Time:** 0.680s
- **Evidence:** logs/TS_SEC_147_execution.log

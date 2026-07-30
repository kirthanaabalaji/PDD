# Test Case: TC_SEC_223

- **Test Case ID:** TC_SEC_223
- **Module:** AccessControl
- **Feature:** test injection path traversal for admin route dashboard permissions without providing auth token headers
- **Test Title:** Verify behavior of admin route dashboard permissions during attempts to test injection path traversal without providing auth token headers
- **Objective:** Evaluate that user can safely execute test injection path traversal for admin route dashboard permissions without providing auth token headers under system checks.
- **Requirement ID:** REQ-SEC-223
- **Preconditions:** System state is reset, and target console is directed to admin route dashboard permissions configuration without providing auth token headers (Ref SEC_223).
- **Test Steps:**
1. Target active interface for admin route dashboard permissions.
2. Trigger action to test injection path traversal without providing auth token headers.
3. Collect audit logs and confirm status code validation (Check SEC_223).
- **Test Data:** Target: admin route dashboard permissions, Action: test injection path traversal, Parameters: without providing auth token headers, Case Index: SEC_223
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_223.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-223
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_223_execution.log

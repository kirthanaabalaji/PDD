# Test Case: TC_SEC_181

- **Test Case ID:** TC_SEC_181
- **Module:** JWT
- **Feature:** test injection path traversal for API key authorization header check with array parameter pollution payloads
- **Test Title:** Verify behavior of API key authorization header check during attempts to test injection path traversal with array parameter pollution payloads
- **Objective:** Evaluate that user can safely execute test injection path traversal for API key authorization header check with array parameter pollution payloads under system checks.
- **Requirement ID:** REQ-SEC-181
- **Preconditions:** System state is reset, and target console is directed to API key authorization header check configuration with array parameter pollution payloads (Ref SEC_181).
- **Test Steps:**
1. Target active interface for API key authorization header check.
2. Trigger action to test injection path traversal with array parameter pollution payloads.
3. Collect audit logs and confirm status code validation (Check SEC_181).
- **Test Data:** Target: API key authorization header check, Action: test injection path traversal, Parameters: with array parameter pollution payloads, Case Index: SEC_181
- **Expected Result:** The verification checks confirm that the upload fails with file format error successfully under reference SEC_181.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-181
- **Execution Time:** 0.200s
- **Evidence:** logs/TC_SEC_181_execution.log

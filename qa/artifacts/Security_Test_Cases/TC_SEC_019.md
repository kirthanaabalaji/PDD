# Test Case: TC_SEC_019

- **Test Case ID:** TC_SEC_019
- **Module:** AccessControl
- **Feature:** test executable file injection for server-side request forgery checks using malicious string payloads
- **Test Title:** Verify behavior of server-side request forgery checks during attempts to test executable file injection using malicious string payloads
- **Objective:** Evaluate that user can safely execute test executable file injection for server-side request forgery checks using malicious string payloads under system checks.
- **Requirement ID:** REQ-SEC-019
- **Preconditions:** System state is reset, and target console is directed to server-side request forgery checks configuration using malicious string payloads (Ref SEC_019).
- **Test Steps:**
1. Target active interface for server-side request forgery checks.
2. Trigger action to test executable file injection using malicious string payloads.
3. Collect audit logs and confirm status code validation (Check SEC_019).
- **Test Data:** Target: server-side request forgery checks, Action: test executable file injection, Parameters: using malicious string payloads, Case Index: SEC_019
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_019.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-019
- **Execution Time:** 0.840s
- **Evidence:** logs/TC_SEC_019_execution.log

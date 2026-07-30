# Test Case: TC_SEC_228

- **Test Case ID:** TC_SEC_228
- **Module:** AccessControl
- **Feature:** test prompt payload injection for sensitive information log mask using malicious string payloads
- **Test Title:** Verify behavior of sensitive information log mask during attempts to test prompt payload injection using malicious string payloads
- **Objective:** Evaluate that user can safely execute test prompt payload injection for sensitive information log mask using malicious string payloads under system checks.
- **Requirement ID:** REQ-SEC-228
- **Preconditions:** System state is reset, and target console is directed to sensitive information log mask configuration using malicious string payloads (Ref SEC_228).
- **Test Steps:**
1. Target active interface for sensitive information log mask.
2. Trigger action to test prompt payload injection using malicious string payloads.
3. Collect audit logs and confirm status code validation (Check SEC_228).
- **Test Data:** Target: sensitive information log mask, Action: test prompt payload injection, Parameters: using malicious string payloads, Case Index: SEC_228
- **Expected Result:** The verification checks confirm that the relative path escape fails to load successfully under reference SEC_228.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-228
- **Execution Time:** 0.760s
- **Evidence:** logs/TC_SEC_228_execution.log

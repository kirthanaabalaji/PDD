# Test Case: TC_SEC_285

- **Test Case ID:** TC_SEC_285
- **Module:** AccessControl
- **Feature:** inspect routing for open redirect for session timeout logout invalidation using malicious string payloads
- **Test Title:** Verify behavior of session timeout logout invalidation during attempts to inspect routing for open redirect using malicious string payloads
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for session timeout logout invalidation using malicious string payloads under system checks.
- **Requirement ID:** REQ-SEC-285
- **Preconditions:** System state is reset, and target console is directed to session timeout logout invalidation configuration using malicious string payloads (Ref SEC_285).
- **Test Steps:**
1. Target active interface for session timeout logout invalidation.
2. Trigger action to inspect routing for open redirect using malicious string payloads.
3. Collect audit logs and confirm status code validation (Check SEC_285).
- **Test Data:** Target: session timeout logout invalidation, Action: inspect routing for open redirect, Parameters: using malicious string payloads, Case Index: SEC_285
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_285.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-285
- **Execution Time:** 0.520s
- **Evidence:** logs/TC_SEC_285_execution.log

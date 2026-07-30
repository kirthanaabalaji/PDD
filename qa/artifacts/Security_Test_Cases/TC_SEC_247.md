# Test Case: TC_SEC_247

- **Test Case ID:** TC_SEC_247
- **Module:** AccessControl
- **Feature:** tamper token authorization signature for user metadata modification routes using malicious string payloads
- **Test Title:** Verify behavior of user metadata modification routes during attempts to tamper token authorization signature using malicious string payloads
- **Objective:** Evaluate that user can safely execute tamper token authorization signature for user metadata modification routes using malicious string payloads under system checks.
- **Requirement ID:** REQ-SEC-247
- **Preconditions:** System state is reset, and target console is directed to user metadata modification routes configuration using malicious string payloads (Ref SEC_247).
- **Test Steps:**
1. Target active interface for user metadata modification routes.
2. Trigger action to tamper token authorization signature using malicious string payloads.
3. Collect audit logs and confirm status code validation (Check SEC_247).
- **Test Data:** Target: user metadata modification routes, Action: tamper token authorization signature, Parameters: using malicious string payloads, Case Index: SEC_247
- **Expected Result:** The verification checks confirm that the input script is encoded and neutralized successfully under reference SEC_247.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-247
- **Execution Time:** 0.680s
- **Evidence:** logs/TC_SEC_247_execution.log

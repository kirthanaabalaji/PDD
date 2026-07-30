# Test Case: TC_SEC_209

- **Test Case ID:** TC_SEC_209
- **Module:** SQLi
- **Feature:** audit code injection vulnerabilities for verify OTP code check routing using malicious string payloads
- **Test Title:** Verify behavior of verify OTP code check routing during attempts to audit code injection vulnerabilities using malicious string payloads
- **Objective:** Evaluate that user can safely execute audit code injection vulnerabilities for verify OTP code check routing using malicious string payloads under system checks.
- **Requirement ID:** REQ-SEC-209
- **Preconditions:** System state is reset, and target console is directed to verify OTP code check routing configuration using malicious string payloads (Ref SEC_209).
- **Test Steps:**
1. Target active interface for verify OTP code check routing.
2. Trigger action to audit code injection vulnerabilities using malicious string payloads.
3. Collect audit logs and confirm status code validation (Check SEC_209).
- **Test Data:** Target: verify OTP code check routing, Action: audit code injection vulnerabilities, Parameters: using malicious string payloads, Case Index: SEC_209
- **Expected Result:** The verification checks confirm that the dependent tables are fully wiped successfully under reference SEC_209.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-209
- **Execution Time:** 0.840s
- **Evidence:** logs/TC_SEC_209_execution.log

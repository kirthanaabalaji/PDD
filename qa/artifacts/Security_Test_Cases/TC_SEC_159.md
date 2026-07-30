# Test Case: TC_SEC_159

- **Test Case ID:** TC_SEC_159
- **Module:** SQLi
- **Feature:** inspect routing for open redirect for verify OTP code check routing by altering token payload structure
- **Test Title:** Verify behavior of verify OTP code check routing during attempts to inspect routing for open redirect by altering token payload structure
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for verify OTP code check routing by altering token payload structure under system checks.
- **Requirement ID:** REQ-SEC-159
- **Preconditions:** System state is reset, and target console is directed to verify OTP code check routing configuration by altering token payload structure (Ref SEC_159).
- **Test Steps:**
1. Target active interface for verify OTP code check routing.
2. Trigger action to inspect routing for open redirect by altering token payload structure.
3. Collect audit logs and confirm status code validation (Check SEC_159).
- **Test Data:** Target: verify OTP code check routing, Action: inspect routing for open redirect, Parameters: by altering token payload structure, Case Index: SEC_159
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_159.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-159
- **Execution Time:** 0.840s
- **Evidence:** logs/TC_SEC_159_execution.log

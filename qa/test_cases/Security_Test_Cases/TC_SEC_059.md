# Test Case: TC_SEC_059

- **Test Case ID:** TC_SEC_059
- **Module:** SQLi
- **Feature:** verify cascade data wiping for verify OTP code check routing with high frequency rapid authentication attempts
- **Test Title:** Verify behavior of verify OTP code check routing during attempts to verify cascade data wiping with high frequency rapid authentication attempts
- **Objective:** Evaluate that user can safely execute verify cascade data wiping for verify OTP code check routing with high frequency rapid authentication attempts under system checks.
- **Requirement ID:** REQ-SEC-059
- **Preconditions:** System state is reset, and target console is directed to verify OTP code check routing configuration with high frequency rapid authentication attempts (Ref SEC_059).
- **Test Steps:**
1. Target active interface for verify OTP code check routing.
2. Trigger action to verify cascade data wiping with high frequency rapid authentication attempts.
3. Collect audit logs and confirm status code validation (Check SEC_059).
- **Test Data:** Target: verify OTP code check routing, Action: verify cascade data wiping, Parameters: with high frequency rapid authentication attempts, Case Index: SEC_059
- **Expected Result:** The verification checks confirm that the application denies permission and logs 403 successfully under reference SEC_059.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-059
- **Execution Time:** 0.840s
- **Evidence:** logs/TC_SEC_059_execution.log

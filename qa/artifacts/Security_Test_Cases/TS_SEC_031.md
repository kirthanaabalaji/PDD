# Test Case: TS_SEC_031

- **Test Case ID:** TS_SEC_031
- **Module:** JWT
- **Feature:** verify database decryption controls for API key authorization header check under unencrypted transport layer check
- **Test Title:** Verify behavior of API key authorization header check during attempts to verify database decryption controls under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute verify database decryption controls for API key authorization header check under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-031
- **Preconditions:** System state is reset, and target console is directed to API key authorization header check configuration under unencrypted transport layer check (Ref SEC_031).
- **Test Steps:**
1. Target active interface for API key authorization header check.
2. Trigger action to verify database decryption controls under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_031).
- **Test Data:** Target: API key authorization header check, Action: verify database decryption controls, Parameters: under unencrypted transport layer check, Case Index: SEC_031
- **Expected Result:** The verification checks confirm that the request is blocked by payload validator successfully under reference SEC_031.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-031
- **Execution Time:** 0.200s
- **Evidence:** logs/TS_SEC_031_execution.log

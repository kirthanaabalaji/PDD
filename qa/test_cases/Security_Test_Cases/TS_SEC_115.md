# Test Case: TS_SEC_115

- **Test Case ID:** TS_SEC_115
- **Module:** IDOR
- **Feature:** verify database decryption controls for IDOR checks on daily symptoms logs using a different user database index
- **Test Title:** Verify behavior of IDOR checks on daily symptoms logs during attempts to verify database decryption controls using a different user database index
- **Objective:** Evaluate that user can safely execute verify database decryption controls for IDOR checks on daily symptoms logs using a different user database index under system checks.
- **Requirement ID:** REQ-SEC-115
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on daily symptoms logs configuration using a different user database index (Ref SEC_115).
- **Test Steps:**
1. Target active interface for IDOR checks on daily symptoms logs.
2. Trigger action to verify database decryption controls using a different user database index.
3. Collect audit logs and confirm status code validation (Check SEC_115).
- **Test Data:** Target: IDOR checks on daily symptoms logs, Action: verify database decryption controls, Parameters: using a different user database index, Case Index: SEC_115
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_115.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-115
- **Execution Time:** 0.520s
- **Evidence:** logs/TS_SEC_115_execution.log

# Test Case: TS_SEC_220

- **Test Case ID:** TS_SEC_220
- **Module:** AccessControl
- **Feature:** verify database decryption controls for CSRF security token validator using relative path traversing dots
- **Test Title:** Verify behavior of CSRF security token validator during attempts to verify database decryption controls using relative path traversing dots
- **Objective:** Evaluate that user can safely execute verify database decryption controls for CSRF security token validator using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-220
- **Preconditions:** System state is reset, and target console is directed to CSRF security token validator configuration using relative path traversing dots (Ref SEC_220).
- **Test Steps:**
1. Target active interface for CSRF security token validator.
2. Trigger action to verify database decryption controls using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_220).
- **Test Data:** Target: CSRF security token validator, Action: verify database decryption controls, Parameters: using relative path traversing dots, Case Index: SEC_220
- **Expected Result:** The verification checks confirm that the authorization validation check blocks query successfully under reference SEC_220.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEC-220
- **Execution Time:** 0.120s
- **Evidence:** logs/TS_SEC_220_execution.log

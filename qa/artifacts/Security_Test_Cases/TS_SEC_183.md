# Test Case: TS_SEC_183

- **Test Case ID:** TS_SEC_183
- **Module:** SQLi
- **Feature:** test token generation logic for brute force attempt limits under unencrypted transport layer check
- **Test Title:** Verify behavior of brute force attempt limits during attempts to test token generation logic under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute test token generation logic for brute force attempt limits under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-183
- **Preconditions:** System state is reset, and target console is directed to brute force attempt limits configuration under unencrypted transport layer check (Ref SEC_183).
- **Test Steps:**
1. Target active interface for brute force attempt limits.
2. Trigger action to test token generation logic under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_183).
- **Test Data:** Target: brute force attempt limits, Action: test token generation logic, Parameters: under unencrypted transport layer check, Case Index: SEC_183
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_183.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-183
- **Execution Time:** 0.360s
- **Evidence:** logs/TS_SEC_183_execution.log

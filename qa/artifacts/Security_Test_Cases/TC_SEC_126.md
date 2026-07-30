# Test Case: TC_SEC_126

- **Test Case ID:** TC_SEC_126
- **Module:** AccessControl
- **Feature:** test SQL injection bypass for static report PDF download access under unencrypted transport layer check
- **Test Title:** Verify behavior of static report PDF download access during attempts to test SQL injection bypass under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for static report PDF download access under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-126
- **Preconditions:** System state is reset, and target console is directed to static report PDF download access configuration under unencrypted transport layer check (Ref SEC_126).
- **Test Steps:**
1. Target active interface for static report PDF download access.
2. Trigger action to test SQL injection bypass under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_126).
- **Test Data:** Target: static report PDF download access, Action: test SQL injection bypass, Parameters: under unencrypted transport layer check, Case Index: SEC_126
- **Expected Result:** The verification checks confirm that the relative path escape fails to load successfully under reference SEC_126.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-126
- **Execution Time:** 0.600s
- **Evidence:** logs/TC_SEC_126_execution.log

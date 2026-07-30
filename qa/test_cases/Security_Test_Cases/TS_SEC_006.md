# Test Case: TS_SEC_006

- **Test Case ID:** TS_SEC_006
- **Module:** SQLi
- **Feature:** audit brute force block speed for forgot password reset link token using prompt injection context escape
- **Test Title:** Verify behavior of forgot password reset link token during attempts to audit brute force block speed using prompt injection context escape
- **Objective:** Evaluate that user can safely execute audit brute force block speed for forgot password reset link token using prompt injection context escape under system checks.
- **Requirement ID:** REQ-SEC-006
- **Preconditions:** System state is reset, and target console is directed to forgot password reset link token configuration using prompt injection context escape (Ref SEC_006).
- **Test Steps:**
1. Target active interface for forgot password reset link token.
2. Trigger action to audit brute force block speed using prompt injection context escape.
3. Collect audit logs and confirm status code validation (Check SEC_006).
- **Test Data:** Target: forgot password reset link token, Action: audit brute force block speed, Parameters: using prompt injection context escape, Case Index: SEC_006
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_006.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-006
- **Execution Time:** 0.600s
- **Evidence:** logs/TS_SEC_006_execution.log

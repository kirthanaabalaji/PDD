# Test Case: TC_SEC_143

- **Test Case ID:** TC_SEC_143
- **Module:** AccessControl
- **Feature:** verify cascade data wiping for password hashing algorithm settings with array parameter pollution payloads
- **Test Title:** Verify behavior of password hashing algorithm settings during attempts to verify cascade data wiping with array parameter pollution payloads
- **Objective:** Evaluate that user can safely execute verify cascade data wiping for password hashing algorithm settings with array parameter pollution payloads under system checks.
- **Requirement ID:** REQ-SEC-143
- **Preconditions:** System state is reset, and target console is directed to password hashing algorithm settings configuration with array parameter pollution payloads (Ref SEC_143).
- **Test Steps:**
1. Target active interface for password hashing algorithm settings.
2. Trigger action to verify cascade data wiping with array parameter pollution payloads.
3. Collect audit logs and confirm status code validation (Check SEC_143).
- **Test Data:** Target: password hashing algorithm settings, Action: verify cascade data wiping, Parameters: with array parameter pollution payloads, Case Index: SEC_143
- **Expected Result:** The verification checks confirm that the relative path escape fails to load successfully under reference SEC_143.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-143
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_143_execution.log

# Test Case: TS_SEC_156

- **Test Case ID:** TS_SEC_156
- **Module:** SQLi
- **Feature:** check cookie storage configurations for forgot password reset link token using external URL domains
- **Test Title:** Verify behavior of forgot password reset link token during attempts to check cookie storage configurations using external URL domains
- **Objective:** Evaluate that user can safely execute check cookie storage configurations for forgot password reset link token using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-156
- **Preconditions:** System state is reset, and target console is directed to forgot password reset link token configuration using external URL domains (Ref SEC_156).
- **Test Steps:**
1. Target active interface for forgot password reset link token.
2. Trigger action to check cookie storage configurations using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_156).
- **Test Data:** Target: forgot password reset link token, Action: check cookie storage configurations, Parameters: using external URL domains, Case Index: SEC_156
- **Expected Result:** The verification checks confirm that the authentication rate limiter blocks IP successfully under reference SEC_156.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-156
- **Execution Time:** 0.600s
- **Evidence:** logs/TS_SEC_156_execution.log

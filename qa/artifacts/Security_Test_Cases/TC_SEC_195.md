# Test Case: TC_SEC_195

- **Test Case ID:** TC_SEC_195
- **Module:** XSS
- **Feature:** audit brute force block speed for SQL injection payload filters with blank authorization keys
- **Test Title:** Verify behavior of SQL injection payload filters during attempts to audit brute force block speed with blank authorization keys
- **Objective:** Evaluate that user can safely execute audit brute force block speed for SQL injection payload filters with blank authorization keys under system checks.
- **Requirement ID:** REQ-SEC-195
- **Preconditions:** System state is reset, and target console is directed to SQL injection payload filters configuration with blank authorization keys (Ref SEC_195).
- **Test Steps:**
1. Target active interface for SQL injection payload filters.
2. Trigger action to audit brute force block speed with blank authorization keys.
3. Collect audit logs and confirm status code validation (Check SEC_195).
- **Test Data:** Target: SQL injection payload filters, Action: audit brute force block speed, Parameters: with blank authorization keys, Case Index: SEC_195
- **Expected Result:** The verification checks confirm that the application denies permission and logs 403 successfully under reference SEC_195.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-195
- **Execution Time:** 0.520s
- **Evidence:** logs/TC_SEC_195_execution.log

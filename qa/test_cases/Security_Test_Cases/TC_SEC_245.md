# Test Case: TC_SEC_245

- **Test Case ID:** TC_SEC_245
- **Module:** XSS
- **Feature:** inspect logs for exposed keys for SQL injection payload filters with command terminal syntax symbols
- **Test Title:** Verify behavior of SQL injection payload filters during attempts to inspect logs for exposed keys with command terminal syntax symbols
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for SQL injection payload filters with command terminal syntax symbols under system checks.
- **Requirement ID:** REQ-SEC-245
- **Preconditions:** System state is reset, and target console is directed to SQL injection payload filters configuration with command terminal syntax symbols (Ref SEC_245).
- **Test Steps:**
1. Target active interface for SQL injection payload filters.
2. Trigger action to inspect logs for exposed keys with command terminal syntax symbols.
3. Collect audit logs and confirm status code validation (Check SEC_245).
- **Test Data:** Target: SQL injection payload filters, Action: inspect logs for exposed keys, Parameters: with command terminal syntax symbols, Case Index: SEC_245
- **Expected Result:** The verification checks confirm that the relative path escape fails to load successfully under reference SEC_245.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-245
- **Execution Time:** 0.520s
- **Evidence:** logs/TC_SEC_245_execution.log

# Test Case: TC_SEC_145

- **Test Case ID:** TC_SEC_145
- **Module:** XSS
- **Feature:** test executable file injection for SQL injection payload filters under unencrypted transport layer check
- **Test Title:** Verify behavior of SQL injection payload filters during attempts to test executable file injection under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute test executable file injection for SQL injection payload filters under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-145
- **Preconditions:** System state is reset, and target console is directed to SQL injection payload filters configuration under unencrypted transport layer check (Ref SEC_145).
- **Test Steps:**
1. Target active interface for SQL injection payload filters.
2. Trigger action to test executable file injection under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_145).
- **Test Data:** Target: SQL injection payload filters, Action: test executable file injection, Parameters: under unencrypted transport layer check, Case Index: SEC_145
- **Expected Result:** The verification checks confirm that the input script is encoded and neutralized successfully under reference SEC_145.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-145
- **Execution Time:** 0.520s
- **Evidence:** logs/TC_SEC_145_execution.log

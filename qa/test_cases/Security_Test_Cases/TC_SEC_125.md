# Test Case: TC_SEC_125

- **Test Case ID:** TC_SEC_125
- **Module:** AccessControl
- **Feature:** audit code injection vulnerabilities for directory traversal path filters using relative path traversing dots
- **Test Title:** Verify behavior of directory traversal path filters during attempts to audit code injection vulnerabilities using relative path traversing dots
- **Objective:** Evaluate that user can safely execute audit code injection vulnerabilities for directory traversal path filters using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-125
- **Preconditions:** System state is reset, and target console is directed to directory traversal path filters configuration using relative path traversing dots (Ref SEC_125).
- **Test Steps:**
1. Target active interface for directory traversal path filters.
2. Trigger action to audit code injection vulnerabilities using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_125).
- **Test Data:** Target: directory traversal path filters, Action: audit code injection vulnerabilities, Parameters: using relative path traversing dots, Case Index: SEC_125
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_125.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-125
- **Execution Time:** 0.520s
- **Evidence:** logs/TC_SEC_125_execution.log

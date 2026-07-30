# Test Case: TS_SEC_175

- **Test Case ID:** TS_SEC_175
- **Module:** AccessControl
- **Feature:** check traversal directory access for directory traversal path filters using external URL domains
- **Test Title:** Verify behavior of directory traversal path filters during attempts to check traversal directory access using external URL domains
- **Objective:** Evaluate that user can safely execute check traversal directory access for directory traversal path filters using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-175
- **Preconditions:** System state is reset, and target console is directed to directory traversal path filters configuration using external URL domains (Ref SEC_175).
- **Test Steps:**
1. Target active interface for directory traversal path filters.
2. Trigger action to check traversal directory access using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_175).
- **Test Data:** Target: directory traversal path filters, Action: check traversal directory access, Parameters: using external URL domains, Case Index: SEC_175
- **Expected Result:** The verification checks confirm that the dependent tables are fully wiped successfully under reference SEC_175.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-175
- **Execution Time:** 0.520s
- **Evidence:** logs/TS_SEC_175_execution.log

# Test Case: TS_SEC_075

- **Test Case ID:** TS_SEC_075
- **Module:** AccessControl
- **Feature:** inspect routing for open redirect for directory traversal path filters by requesting admin privilege routes
- **Test Title:** Verify behavior of directory traversal path filters during attempts to inspect routing for open redirect by requesting admin privilege routes
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for directory traversal path filters by requesting admin privilege routes under system checks.
- **Requirement ID:** REQ-SEC-075
- **Preconditions:** System state is reset, and target console is directed to directory traversal path filters configuration by requesting admin privilege routes (Ref SEC_075).
- **Test Steps:**
1. Target active interface for directory traversal path filters.
2. Trigger action to inspect routing for open redirect by requesting admin privilege routes.
3. Collect audit logs and confirm status code validation (Check SEC_075).
- **Test Data:** Target: directory traversal path filters, Action: inspect routing for open redirect, Parameters: by requesting admin privilege routes, Case Index: SEC_075
- **Expected Result:** The verification checks confirm that the relative path escape fails to load successfully under reference SEC_075.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-075
- **Execution Time:** 0.520s
- **Evidence:** logs/TS_SEC_075_execution.log

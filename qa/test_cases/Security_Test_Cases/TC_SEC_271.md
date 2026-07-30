# Test Case: TC_SEC_271

- **Test Case ID:** TC_SEC_271
- **Module:** IDOR
- **Feature:** test executable file injection for IDOR checks on clinical reports with blank authorization keys
- **Test Title:** Verify behavior of IDOR checks on clinical reports during attempts to test executable file injection with blank authorization keys
- **Objective:** Evaluate that user can safely execute test executable file injection for IDOR checks on clinical reports with blank authorization keys under system checks.
- **Requirement ID:** REQ-SEC-271
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on clinical reports configuration with blank authorization keys (Ref SEC_271).
- **Test Steps:**
1. Target active interface for IDOR checks on clinical reports.
2. Trigger action to test executable file injection with blank authorization keys.
3. Collect audit logs and confirm status code validation (Check SEC_271).
- **Test Data:** Target: IDOR checks on clinical reports, Action: test executable file injection, Parameters: with blank authorization keys, Case Index: SEC_271
- **Expected Result:** The verification checks confirm that the authorization validation check blocks query successfully under reference SEC_271.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-271
- **Execution Time:** 0.200s
- **Evidence:** logs/TC_SEC_271_execution.log

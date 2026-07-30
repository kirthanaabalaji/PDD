# Test Case: TC_SEC_071

- **Test Case ID:** TC_SEC_071
- **Module:** IDOR
- **Feature:** check stored script execution for IDOR checks on clinical reports without providing auth token headers
- **Test Title:** Verify behavior of IDOR checks on clinical reports during attempts to check stored script execution without providing auth token headers
- **Objective:** Evaluate that user can safely execute check stored script execution for IDOR checks on clinical reports without providing auth token headers under system checks.
- **Requirement ID:** REQ-SEC-071
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on clinical reports configuration without providing auth token headers (Ref SEC_071).
- **Test Steps:**
1. Target active interface for IDOR checks on clinical reports.
2. Trigger action to check stored script execution without providing auth token headers.
3. Collect audit logs and confirm status code validation (Check SEC_071).
- **Test Data:** Target: IDOR checks on clinical reports, Action: check stored script execution, Parameters: without providing auth token headers, Case Index: SEC_071
- **Expected Result:** The verification checks confirm that the authentication rate limiter blocks IP successfully under reference SEC_071.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-071
- **Execution Time:** 0.200s
- **Evidence:** logs/TC_SEC_071_execution.log

# Test Case: TC_SEC_270

- **Test Case ID:** TC_SEC_270
- **Module:** AccessControl
- **Feature:** test prompt payload injection for CSRF security token validator using external URL domains
- **Test Title:** Verify behavior of CSRF security token validator during attempts to test prompt payload injection using external URL domains
- **Objective:** Evaluate that user can safely execute test prompt payload injection for CSRF security token validator using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-270
- **Preconditions:** System state is reset, and target console is directed to CSRF security token validator configuration using external URL domains (Ref SEC_270).
- **Test Steps:**
1. Target active interface for CSRF security token validator.
2. Trigger action to test prompt payload injection using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_270).
- **Test Data:** Target: CSRF security token validator, Action: test prompt payload injection, Parameters: using external URL domains, Case Index: SEC_270
- **Expected Result:** The verification checks confirm that the backend blocks terminal execution successfully under reference SEC_270.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-270
- **Execution Time:** 0.120s
- **Evidence:** logs/TC_SEC_270_execution.log

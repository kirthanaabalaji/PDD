# Test Case: TC_SEC_004

- **Test Case ID:** TC_SEC_004
- **Module:** AccessControl
- **Feature:** test parameter parsing pollution for TLS transport layer encryption using external URL domains
- **Test Title:** Verify behavior of TLS transport layer encryption during attempts to test parameter parsing pollution using external URL domains
- **Objective:** Evaluate that user can safely execute test parameter parsing pollution for TLS transport layer encryption using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-004
- **Preconditions:** System state is reset, and target console is directed to TLS transport layer encryption configuration using external URL domains (Ref SEC_004).
- **Test Steps:**
1. Target active interface for TLS transport layer encryption.
2. Trigger action to test parameter parsing pollution using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_004).
- **Test Data:** Target: TLS transport layer encryption, Action: test parameter parsing pollution, Parameters: using external URL domains, Case Index: SEC_004
- **Expected Result:** The verification checks confirm that the security headers are parsed properly successfully under reference SEC_004.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEC-004
- **Execution Time:** 0.440s
- **Evidence:** logs/TC_SEC_004_execution.log

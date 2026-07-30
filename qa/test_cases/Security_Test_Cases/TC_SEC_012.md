# Test Case: TC_SEC_012

- **Test Case ID:** TC_SEC_012
- **Module:** JWT
- **Feature:** inspect routing for open redirect for JWT expiration and signature validation under unencrypted transport layer check
- **Test Title:** Verify behavior of JWT expiration and signature validation during attempts to inspect routing for open redirect under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for JWT expiration and signature validation under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-012
- **Preconditions:** System state is reset, and target console is directed to JWT expiration and signature validation configuration under unencrypted transport layer check (Ref SEC_012).
- **Test Steps:**
1. Target active interface for JWT expiration and signature validation.
2. Trigger action to inspect routing for open redirect under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_012).
- **Test Data:** Target: JWT expiration and signature validation, Action: inspect routing for open redirect, Parameters: under unencrypted transport layer check, Case Index: SEC_012
- **Expected Result:** The verification checks confirm that the system does not expose credentials successfully under reference SEC_012.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-012
- **Execution Time:** 0.280s
- **Evidence:** logs/TC_SEC_012_execution.log

# Test Case: TS_SEC_050

- **Test Case ID:** TS_SEC_050
- **Module:** AccessControl
- **Feature:** check stored script execution for register form email verification under unencrypted transport layer check
- **Test Title:** Verify behavior of register form email verification during attempts to check stored script execution under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute check stored script execution for register form email verification under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-050
- **Preconditions:** System state is reset, and target console is directed to register form email verification configuration under unencrypted transport layer check (Ref SEC_050).
- **Test Steps:**
1. Target active interface for register form email verification.
2. Trigger action to check stored script execution under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_050).
- **Test Data:** Target: register form email verification, Action: check stored script execution, Parameters: under unencrypted transport layer check, Case Index: SEC_050
- **Expected Result:** The verification checks confirm that the authorization validation check blocks query successfully under reference SEC_050.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-050
- **Execution Time:** 0.120s
- **Evidence:** logs/TS_SEC_050_execution.log

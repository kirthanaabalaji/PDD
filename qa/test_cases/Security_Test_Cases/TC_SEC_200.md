# Test Case: TC_SEC_200

- **Test Case ID:** TC_SEC_200
- **Module:** AccessControl
- **Feature:** verify public route visibility for register form email verification with array parameter pollution payloads
- **Test Title:** Verify behavior of register form email verification during attempts to verify public route visibility with array parameter pollution payloads
- **Objective:** Evaluate that user can safely execute verify public route visibility for register form email verification with array parameter pollution payloads under system checks.
- **Requirement ID:** REQ-SEC-200
- **Preconditions:** System state is reset, and target console is directed to register form email verification configuration with array parameter pollution payloads (Ref SEC_200).
- **Test Steps:**
1. Target active interface for register form email verification.
2. Trigger action to verify public route visibility with array parameter pollution payloads.
3. Collect audit logs and confirm status code validation (Check SEC_200).
- **Test Data:** Target: register form email verification, Action: verify public route visibility, Parameters: with array parameter pollution payloads, Case Index: SEC_200
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_200.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEC-200
- **Execution Time:** 0.120s
- **Evidence:** logs/TC_SEC_200_execution.log

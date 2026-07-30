# Test Case: TS_SEC_150

- **Test Case ID:** TS_SEC_150
- **Module:** AccessControl
- **Feature:** manipulate record ownership indices for register form email verification with command terminal syntax symbols
- **Test Title:** Verify behavior of register form email verification during attempts to manipulate record ownership indices with command terminal syntax symbols
- **Objective:** Evaluate that user can safely execute manipulate record ownership indices for register form email verification with command terminal syntax symbols under system checks.
- **Requirement ID:** REQ-SEC-150
- **Preconditions:** System state is reset, and target console is directed to register form email verification configuration with command terminal syntax symbols (Ref SEC_150).
- **Test Steps:**
1. Target active interface for register form email verification.
2. Trigger action to manipulate record ownership indices with command terminal syntax symbols.
3. Collect audit logs and confirm status code validation (Check SEC_150).
- **Test Data:** Target: register form email verification, Action: manipulate record ownership indices, Parameters: with command terminal syntax symbols, Case Index: SEC_150
- **Expected Result:** The verification checks confirm that the request is blocked by payload validator successfully under reference SEC_150.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-150
- **Execution Time:** 0.120s
- **Evidence:** logs/TS_SEC_150_execution.log

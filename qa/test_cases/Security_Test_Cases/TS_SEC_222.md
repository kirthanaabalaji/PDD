# Test Case: TS_SEC_222

- **Test Case ID:** TS_SEC_222
- **Module:** AccessControl
- **Feature:** inspect routing for open redirect for command line shell execution check with html tag script inputs
- **Test Title:** Verify behavior of command line shell execution check during attempts to inspect routing for open redirect with html tag script inputs
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for command line shell execution check with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-222
- **Preconditions:** System state is reset, and target console is directed to command line shell execution check configuration with html tag script inputs (Ref SEC_222).
- **Test Steps:**
1. Target active interface for command line shell execution check.
2. Trigger action to inspect routing for open redirect with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_222).
- **Test Data:** Target: command line shell execution check, Action: inspect routing for open redirect, Parameters: with html tag script inputs, Case Index: SEC_222
- **Expected Result:** The verification checks confirm that the system rejects the tampered token successfully under reference SEC_222.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-222
- **Execution Time:** 0.280s
- **Evidence:** logs/TS_SEC_222_execution.log

# Test Case: TS_SEC_165

- **Test Case ID:** TS_SEC_165
- **Module:** IDOR
- **Feature:** test prompt payload injection for IDOR checks on daily symptoms logs with html tag script inputs
- **Test Title:** Verify behavior of IDOR checks on daily symptoms logs during attempts to test prompt payload injection with html tag script inputs
- **Objective:** Evaluate that user can safely execute test prompt payload injection for IDOR checks on daily symptoms logs with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-165
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on daily symptoms logs configuration with html tag script inputs (Ref SEC_165).
- **Test Steps:**
1. Target active interface for IDOR checks on daily symptoms logs.
2. Trigger action to test prompt payload injection with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_165).
- **Test Data:** Target: IDOR checks on daily symptoms logs, Action: test prompt payload injection, Parameters: with html tag script inputs, Case Index: SEC_165
- **Expected Result:** The verification checks confirm that the system does not expose credentials successfully under reference SEC_165.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-165
- **Execution Time:** 0.520s
- **Evidence:** logs/TS_SEC_165_execution.log

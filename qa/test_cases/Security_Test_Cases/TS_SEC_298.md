# Test Case: TS_SEC_298

- **Test Case ID:** TS_SEC_298
- **Module:** AccessControl
- **Feature:** test parameter parsing pollution for security HTTP response headers with html tag script inputs
- **Test Title:** Verify behavior of security HTTP response headers during attempts to test parameter parsing pollution with html tag script inputs
- **Objective:** Evaluate that user can safely execute test parameter parsing pollution for security HTTP response headers with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-298
- **Preconditions:** System state is reset, and target console is directed to security HTTP response headers configuration with html tag script inputs (Ref SEC_298).
- **Test Steps:**
1. Target active interface for security HTTP response headers.
2. Trigger action to test parameter parsing pollution with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_298).
- **Test Data:** Target: security HTTP response headers, Action: test parameter parsing pollution, Parameters: with html tag script inputs, Case Index: SEC_298
- **Expected Result:** The verification checks confirm that the input script is encoded and neutralized successfully under reference SEC_298.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-298
- **Execution Time:** 0.760s
- **Evidence:** logs/TS_SEC_298_execution.log

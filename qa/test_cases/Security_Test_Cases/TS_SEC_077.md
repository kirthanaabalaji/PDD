# Test Case: TS_SEC_077

- **Test Case ID:** TS_SEC_077
- **Module:** SQLi
- **Feature:** inspect logs for exposed keys for unauthenticated route access controls using a different user database index
- **Test Title:** Verify behavior of unauthenticated route access controls during attempts to inspect logs for exposed keys using a different user database index
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for unauthenticated route access controls using a different user database index under system checks.
- **Requirement ID:** REQ-SEC-077
- **Preconditions:** System state is reset, and target console is directed to unauthenticated route access controls configuration using a different user database index (Ref SEC_077).
- **Test Steps:**
1. Target active interface for unauthenticated route access controls.
2. Trigger action to inspect logs for exposed keys using a different user database index.
3. Collect audit logs and confirm status code validation (Check SEC_077).
- **Test Data:** Target: unauthenticated route access controls, Action: inspect logs for exposed keys, Parameters: using a different user database index, Case Index: SEC_077
- **Expected Result:** The verification checks confirm that the input script is encoded and neutralized successfully under reference SEC_077.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-077
- **Execution Time:** 0.680s
- **Evidence:** logs/TS_SEC_077_execution.log

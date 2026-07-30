# Test Case: TS_SEC_098

- **Test Case ID:** TS_SEC_098
- **Module:** AccessControl
- **Feature:** inspect logs for exposed keys for security HTTP response headers for client local cookie storage
- **Test Title:** Verify behavior of security HTTP response headers during attempts to inspect logs for exposed keys for client local cookie storage
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for security HTTP response headers for client local cookie storage under system checks.
- **Requirement ID:** REQ-SEC-098
- **Preconditions:** System state is reset, and target console is directed to security HTTP response headers configuration for client local cookie storage (Ref SEC_098).
- **Test Steps:**
1. Target active interface for security HTTP response headers.
2. Trigger action to inspect logs for exposed keys for client local cookie storage.
3. Collect audit logs and confirm status code validation (Check SEC_098).
- **Test Data:** Target: security HTTP response headers, Action: inspect logs for exposed keys, Parameters: for client local cookie storage, Case Index: SEC_098
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_098.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-098
- **Execution Time:** 0.760s
- **Evidence:** logs/TS_SEC_098_execution.log

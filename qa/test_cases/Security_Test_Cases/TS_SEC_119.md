# Test Case: TS_SEC_119

- **Test Case ID:** TS_SEC_119
- **Module:** AccessControl
- **Feature:** inspect logs for exposed keys for server-side request forgery checks with blank authorization keys
- **Test Title:** Verify behavior of server-side request forgery checks during attempts to inspect logs for exposed keys with blank authorization keys
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for server-side request forgery checks with blank authorization keys under system checks.
- **Requirement ID:** REQ-SEC-119
- **Preconditions:** System state is reset, and target console is directed to server-side request forgery checks configuration with blank authorization keys (Ref SEC_119).
- **Test Steps:**
1. Target active interface for server-side request forgery checks.
2. Trigger action to inspect logs for exposed keys with blank authorization keys.
3. Collect audit logs and confirm status code validation (Check SEC_119).
- **Test Data:** Target: server-side request forgery checks, Action: inspect logs for exposed keys, Parameters: with blank authorization keys, Case Index: SEC_119
- **Expected Result:** The verification checks confirm that the application returns database error blocks successfully under reference SEC_119.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-119
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_119_execution.log

# Test Case: TS_SEC_243

- **Test Case ID:** TS_SEC_243
- **Module:** AccessControl
- **Feature:** inspect routing for open redirect for password hashing algorithm settings during server internal log dumping
- **Test Title:** Verify behavior of password hashing algorithm settings during attempts to inspect routing for open redirect during server internal log dumping
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for password hashing algorithm settings during server internal log dumping under system checks.
- **Requirement ID:** REQ-SEC-243
- **Preconditions:** System state is reset, and target console is directed to password hashing algorithm settings configuration during server internal log dumping (Ref SEC_243).
- **Test Steps:**
1. Target active interface for password hashing algorithm settings.
2. Trigger action to inspect routing for open redirect during server internal log dumping.
3. Collect audit logs and confirm status code validation (Check SEC_243).
- **Test Data:** Target: password hashing algorithm settings, Action: inspect routing for open redirect, Parameters: during server internal log dumping, Case Index: SEC_243
- **Expected Result:** The verification checks confirm that the dependent tables are fully wiped successfully under reference SEC_243.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-243
- **Execution Time:** 0.360s
- **Evidence:** logs/TS_SEC_243_execution.log

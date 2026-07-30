# Test Case: TS_SEC_300

- **Test Case ID:** TS_SEC_300
- **Module:** AccessControl
- **Feature:** audit brute force block speed for register form email verification during server internal log dumping
- **Test Title:** Verify behavior of register form email verification during attempts to audit brute force block speed during server internal log dumping
- **Objective:** Evaluate that user can safely execute audit brute force block speed for register form email verification during server internal log dumping under system checks.
- **Requirement ID:** REQ-SEC-300
- **Preconditions:** System state is reset, and target console is directed to register form email verification configuration during server internal log dumping (Ref SEC_300).
- **Test Steps:**
1. Target active interface for register form email verification.
2. Trigger action to audit brute force block speed during server internal log dumping.
3. Collect audit logs and confirm status code validation (Check SEC_300).
- **Test Data:** Target: register form email verification, Action: audit brute force block speed, Parameters: during server internal log dumping, Case Index: SEC_300
- **Expected Result:** The verification checks confirm that the upload fails with file format error successfully under reference SEC_300.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-300
- **Execution Time:** 0.120s
- **Evidence:** logs/TS_SEC_300_execution.log

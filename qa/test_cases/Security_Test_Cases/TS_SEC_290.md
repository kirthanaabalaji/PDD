# Test Case: TS_SEC_290

- **Test Case ID:** TS_SEC_290
- **Module:** AccessControl
- **Feature:** verify cascade data wiping for database field encryption keys with blank authorization keys
- **Test Title:** Verify behavior of database field encryption keys during attempts to verify cascade data wiping with blank authorization keys
- **Objective:** Evaluate that user can safely execute verify cascade data wiping for database field encryption keys with blank authorization keys under system checks.
- **Requirement ID:** REQ-SEC-290
- **Preconditions:** System state is reset, and target console is directed to database field encryption keys configuration with blank authorization keys (Ref SEC_290).
- **Test Steps:**
1. Target active interface for database field encryption keys.
2. Trigger action to verify cascade data wiping with blank authorization keys.
3. Collect audit logs and confirm status code validation (Check SEC_290).
- **Test Data:** Target: database field encryption keys, Action: verify cascade data wiping, Parameters: with blank authorization keys, Case Index: SEC_290
- **Expected Result:** The verification checks confirm that the system rejects the tampered token successfully under reference SEC_290.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-290
- **Execution Time:** 0.120s
- **Evidence:** logs/TS_SEC_290_execution.log

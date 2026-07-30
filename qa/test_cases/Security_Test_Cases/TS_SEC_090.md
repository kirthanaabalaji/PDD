# Test Case: TS_SEC_090

- **Test Case ID:** TS_SEC_090
- **Module:** AccessControl
- **Feature:** audit brute force block speed for database field encryption keys without providing auth token headers
- **Test Title:** Verify behavior of database field encryption keys during attempts to audit brute force block speed without providing auth token headers
- **Objective:** Evaluate that user can safely execute audit brute force block speed for database field encryption keys without providing auth token headers under system checks.
- **Requirement ID:** REQ-SEC-090
- **Preconditions:** System state is reset, and target console is directed to database field encryption keys configuration without providing auth token headers (Ref SEC_090).
- **Test Steps:**
1. Target active interface for database field encryption keys.
2. Trigger action to audit brute force block speed without providing auth token headers.
3. Collect audit logs and confirm status code validation (Check SEC_090).
- **Test Data:** Target: database field encryption keys, Action: audit brute force block speed, Parameters: without providing auth token headers, Case Index: SEC_090
- **Expected Result:** The verification checks confirm that the dependent tables are fully wiped successfully under reference SEC_090.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-090
- **Execution Time:** 0.120s
- **Evidence:** logs/TS_SEC_090_execution.log

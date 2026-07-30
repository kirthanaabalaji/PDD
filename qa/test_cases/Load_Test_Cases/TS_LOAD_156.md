# Test Case: TS_LOAD_156

- **Test Case ID:** TS_LOAD_156
- **Module:** Authentication
- **Feature:** check payload upload time for /api/auth/profile retrieval with large session payload records
- **Test Title:** Verify behavior of /api/auth/profile retrieval during attempts to check payload upload time with large session payload records
- **Objective:** Evaluate that user can safely execute check payload upload time for /api/auth/profile retrieval with large session payload records under system checks.
- **Requirement ID:** REQ-LOAD-156
- **Preconditions:** System state is reset, and target console is directed to /api/auth/profile retrieval configuration with large session payload records (Ref LOAD_156).
- **Test Steps:**
1. Target active interface for /api/auth/profile retrieval.
2. Trigger action to check payload upload time with large session payload records.
3. Collect audit logs and confirm status code validation (Check LOAD_156).
- **Test Data:** Target: /api/auth/profile retrieval, Action: check payload upload time, Parameters: with large session payload records, Case Index: LOAD_156
- **Expected Result:** The verification checks confirm that the request queue does not overflow backlog successfully under reference LOAD_156.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-LOAD-156
- **Execution Time:** 11.7s
- **Evidence:** logs/TS_LOAD_156_execution.log

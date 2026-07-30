# Test Case: TS_SEC_121

- **Test Case ID:** TS_SEC_121
- **Module:** IDOR
- **Feature:** tamper token authorization signature for IDOR checks on clinical reports by altering token payload structure
- **Test Title:** Verify behavior of IDOR checks on clinical reports during attempts to tamper token authorization signature by altering token payload structure
- **Objective:** Evaluate that user can safely execute tamper token authorization signature for IDOR checks on clinical reports by altering token payload structure under system checks.
- **Requirement ID:** REQ-SEC-121
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on clinical reports configuration by altering token payload structure (Ref SEC_121).
- **Test Steps:**
1. Target active interface for IDOR checks on clinical reports.
2. Trigger action to tamper token authorization signature by altering token payload structure.
3. Collect audit logs and confirm status code validation (Check SEC_121).
- **Test Data:** Target: IDOR checks on clinical reports, Action: tamper token authorization signature, Parameters: by altering token payload structure, Case Index: SEC_121
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_121.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-121
- **Execution Time:** 0.200s
- **Evidence:** logs/TS_SEC_121_execution.log

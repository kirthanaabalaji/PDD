# Test Case: TC_SEC_221

- **Test Case ID:** TC_SEC_221
- **Module:** IDOR
- **Feature:** verify public route visibility for IDOR checks on clinical reports under unencrypted transport layer check
- **Test Title:** Verify behavior of IDOR checks on clinical reports during attempts to verify public route visibility under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute verify public route visibility for IDOR checks on clinical reports under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-221
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on clinical reports configuration under unencrypted transport layer check (Ref SEC_221).
- **Test Steps:**
1. Target active interface for IDOR checks on clinical reports.
2. Trigger action to verify public route visibility under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_221).
- **Test Data:** Target: IDOR checks on clinical reports, Action: verify public route visibility, Parameters: under unencrypted transport layer check, Case Index: SEC_221
- **Expected Result:** The verification checks confirm that the application returns database error blocks successfully under reference SEC_221.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-221
- **Execution Time:** 0.200s
- **Evidence:** logs/TC_SEC_221_execution.log

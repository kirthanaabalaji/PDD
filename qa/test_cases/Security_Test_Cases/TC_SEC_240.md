# Test Case: TC_SEC_240

- **Test Case ID:** TC_SEC_240
- **Module:** AccessControl
- **Feature:** check cookie storage configurations for database field encryption keys under unencrypted transport layer check
- **Test Title:** Verify behavior of database field encryption keys during attempts to check cookie storage configurations under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute check cookie storage configurations for database field encryption keys under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-240
- **Preconditions:** System state is reset, and target console is directed to database field encryption keys configuration under unencrypted transport layer check (Ref SEC_240).
- **Test Steps:**
1. Target active interface for database field encryption keys.
2. Trigger action to check cookie storage configurations under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_240).
- **Test Data:** Target: database field encryption keys, Action: check cookie storage configurations, Parameters: under unencrypted transport layer check, Case Index: SEC_240
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_240.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-240
- **Execution Time:** 0.120s
- **Evidence:** logs/TC_SEC_240_execution.log

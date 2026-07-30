# Test Case: TS_SEC_297

- **Test Case ID:** TS_SEC_297
- **Module:** AccessControl
- **Feature:** manipulate record ownership indices for user metadata modification routes under unencrypted transport layer check
- **Test Title:** Verify behavior of user metadata modification routes during attempts to manipulate record ownership indices under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute manipulate record ownership indices for user metadata modification routes under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-297
- **Preconditions:** System state is reset, and target console is directed to user metadata modification routes configuration under unencrypted transport layer check (Ref SEC_297).
- **Test Steps:**
1. Target active interface for user metadata modification routes.
2. Trigger action to manipulate record ownership indices under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_297).
- **Test Data:** Target: user metadata modification routes, Action: manipulate record ownership indices, Parameters: under unencrypted transport layer check, Case Index: SEC_297
- **Expected Result:** The verification checks confirm that the application denies permission and logs 403 successfully under reference SEC_297.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-297
- **Execution Time:** 0.680s
- **Evidence:** logs/TS_SEC_297_execution.log

# Test Case: TS_SEC_202

- **Test Case ID:** TS_SEC_202
- **Module:** AccessControl
- **Feature:** test injection path traversal for user role privilege escalation limit under unencrypted transport layer check
- **Test Title:** Verify behavior of user role privilege escalation limit during attempts to test injection path traversal under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute test injection path traversal for user role privilege escalation limit under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-202
- **Preconditions:** System state is reset, and target console is directed to user role privilege escalation limit configuration under unencrypted transport layer check (Ref SEC_202).
- **Test Steps:**
1. Target active interface for user role privilege escalation limit.
2. Trigger action to test injection path traversal under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_202).
- **Test Data:** Target: user role privilege escalation limit, Action: test injection path traversal, Parameters: under unencrypted transport layer check, Case Index: SEC_202
- **Expected Result:** The verification checks confirm that the backend blocks terminal execution successfully under reference SEC_202.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-202
- **Execution Time:** 0.280s
- **Evidence:** logs/TS_SEC_202_execution.log

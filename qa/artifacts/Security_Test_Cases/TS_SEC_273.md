# Test Case: TS_SEC_273

- **Test Case ID:** TS_SEC_273
- **Module:** AccessControl
- **Feature:** test SQL injection bypass for admin route dashboard permissions by altering token payload structure
- **Test Title:** Verify behavior of admin route dashboard permissions during attempts to test SQL injection bypass by altering token payload structure
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for admin route dashboard permissions by altering token payload structure under system checks.
- **Requirement ID:** REQ-SEC-273
- **Preconditions:** System state is reset, and target console is directed to admin route dashboard permissions configuration by altering token payload structure (Ref SEC_273).
- **Test Steps:**
1. Target active interface for admin route dashboard permissions.
2. Trigger action to test SQL injection bypass by altering token payload structure.
3. Collect audit logs and confirm status code validation (Check SEC_273).
- **Test Data:** Target: admin route dashboard permissions, Action: test SQL injection bypass, Parameters: by altering token payload structure, Case Index: SEC_273
- **Expected Result:** The verification checks confirm that the system rejects the tampered token successfully under reference SEC_273.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-273
- **Execution Time:** 0.360s
- **Evidence:** logs/TS_SEC_273_execution.log

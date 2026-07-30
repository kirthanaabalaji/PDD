# Test Case: TS_SEC_073

- **Test Case ID:** TS_SEC_073
- **Module:** AccessControl
- **Feature:** verify database decryption controls for admin route dashboard permissions upon user profile account deletion
- **Test Title:** Verify behavior of admin route dashboard permissions during attempts to verify database decryption controls upon user profile account deletion
- **Objective:** Evaluate that user can safely execute verify database decryption controls for admin route dashboard permissions upon user profile account deletion under system checks.
- **Requirement ID:** REQ-SEC-073
- **Preconditions:** System state is reset, and target console is directed to admin route dashboard permissions configuration upon user profile account deletion (Ref SEC_073).
- **Test Steps:**
1. Target active interface for admin route dashboard permissions.
2. Trigger action to verify database decryption controls upon user profile account deletion.
3. Collect audit logs and confirm status code validation (Check SEC_073).
- **Test Data:** Target: admin route dashboard permissions, Action: verify database decryption controls, Parameters: upon user profile account deletion, Case Index: SEC_073
- **Expected Result:** The verification checks confirm that the dependent tables are fully wiped successfully under reference SEC_073.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-073
- **Execution Time:** 0.360s
- **Evidence:** logs/TS_SEC_073_execution.log

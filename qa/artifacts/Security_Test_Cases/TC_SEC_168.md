# Test Case: TC_SEC_168

- **Test Case ID:** TC_SEC_168
- **Module:** IDOR
- **Feature:** test SQL injection bypass for IDOR checks on breathing session logs upon user profile account deletion
- **Test Title:** Verify behavior of IDOR checks on breathing session logs during attempts to test SQL injection bypass upon user profile account deletion
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for IDOR checks on breathing session logs upon user profile account deletion under system checks.
- **Requirement ID:** REQ-SEC-168
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on breathing session logs configuration upon user profile account deletion (Ref SEC_168).
- **Test Steps:**
1. Target active interface for IDOR checks on breathing session logs.
2. Trigger action to test SQL injection bypass upon user profile account deletion.
3. Collect audit logs and confirm status code validation (Check SEC_168).
- **Test Data:** Target: IDOR checks on breathing session logs, Action: test SQL injection bypass, Parameters: upon user profile account deletion, Case Index: SEC_168
- **Expected Result:** The verification checks confirm that the backend blocks terminal execution successfully under reference SEC_168.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-168
- **Execution Time:** 0.760s
- **Evidence:** logs/TC_SEC_168_execution.log

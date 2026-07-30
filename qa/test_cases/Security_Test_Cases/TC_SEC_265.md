# Test Case: TC_SEC_265

- **Test Case ID:** TC_SEC_265
- **Module:** IDOR
- **Feature:** test injection path traversal for IDOR checks on daily symptoms logs by requesting admin privilege routes
- **Test Title:** Verify behavior of IDOR checks on daily symptoms logs during attempts to test injection path traversal by requesting admin privilege routes
- **Objective:** Evaluate that user can safely execute test injection path traversal for IDOR checks on daily symptoms logs by requesting admin privilege routes under system checks.
- **Requirement ID:** REQ-SEC-265
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on daily symptoms logs configuration by requesting admin privilege routes (Ref SEC_265).
- **Test Steps:**
1. Target active interface for IDOR checks on daily symptoms logs.
2. Trigger action to test injection path traversal by requesting admin privilege routes.
3. Collect audit logs and confirm status code validation (Check SEC_265).
- **Test Data:** Target: IDOR checks on daily symptoms logs, Action: test injection path traversal, Parameters: by requesting admin privilege routes, Case Index: SEC_265
- **Expected Result:** The verification checks confirm that the server blocks the unauthorized data access successfully under reference SEC_265.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-265
- **Execution Time:** 0.520s
- **Evidence:** logs/TC_SEC_265_execution.log

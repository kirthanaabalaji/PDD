# Test Case: TS_SEC_018

- **Test Case ID:** TS_SEC_018
- **Module:** IDOR
- **Feature:** test prompt payload injection for IDOR checks on breathing session logs by requesting admin privilege routes
- **Test Title:** Verify behavior of IDOR checks on breathing session logs during attempts to test prompt payload injection by requesting admin privilege routes
- **Objective:** Evaluate that user can safely execute test prompt payload injection for IDOR checks on breathing session logs by requesting admin privilege routes under system checks.
- **Requirement ID:** REQ-SEC-018
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on breathing session logs configuration by requesting admin privilege routes (Ref SEC_018).
- **Test Steps:**
1. Target active interface for IDOR checks on breathing session logs.
2. Trigger action to test prompt payload injection by requesting admin privilege routes.
3. Collect audit logs and confirm status code validation (Check SEC_018).
- **Test Data:** Target: IDOR checks on breathing session logs, Action: test prompt payload injection, Parameters: by requesting admin privilege routes, Case Index: SEC_018
- **Expected Result:** The verification checks confirm that the system rejects the tampered token successfully under reference SEC_018.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-018
- **Execution Time:** 0.760s
- **Evidence:** logs/TS_SEC_018_execution.log

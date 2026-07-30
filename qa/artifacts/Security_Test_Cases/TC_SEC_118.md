# Test Case: TC_SEC_118

- **Test Case ID:** TC_SEC_118
- **Module:** IDOR
- **Feature:** test injection path traversal for IDOR checks on breathing session logs using external URL domains
- **Test Title:** Verify behavior of IDOR checks on breathing session logs during attempts to test injection path traversal using external URL domains
- **Objective:** Evaluate that user can safely execute test injection path traversal for IDOR checks on breathing session logs using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-118
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on breathing session logs configuration using external URL domains (Ref SEC_118).
- **Test Steps:**
1. Target active interface for IDOR checks on breathing session logs.
2. Trigger action to test injection path traversal using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_118).
- **Test Data:** Target: IDOR checks on breathing session logs, Action: test injection path traversal, Parameters: using external URL domains, Case Index: SEC_118
- **Expected Result:** The verification checks confirm that the authorization validation check blocks query successfully under reference SEC_118.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-118
- **Execution Time:** 0.760s
- **Evidence:** logs/TC_SEC_118_execution.log

# Test Case: TS_SEC_124

- **Test Case ID:** TS_SEC_124
- **Module:** IDOR
- **Feature:** test executable file injection for IDOR checks on AI chat messages with array parameter pollution payloads
- **Test Title:** Verify behavior of IDOR checks on AI chat messages during attempts to test executable file injection with array parameter pollution payloads
- **Objective:** Evaluate that user can safely execute test executable file injection for IDOR checks on AI chat messages with array parameter pollution payloads under system checks.
- **Requirement ID:** REQ-SEC-124
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on AI chat messages configuration with array parameter pollution payloads (Ref SEC_124).
- **Test Steps:**
1. Target active interface for IDOR checks on AI chat messages.
2. Trigger action to test executable file injection with array parameter pollution payloads.
3. Collect audit logs and confirm status code validation (Check SEC_124).
- **Test Data:** Target: IDOR checks on AI chat messages, Action: test executable file injection, Parameters: with array parameter pollution payloads, Case Index: SEC_124
- **Expected Result:** The verification checks confirm that the dependent tables are fully wiped successfully under reference SEC_124.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEC-124
- **Execution Time:** 0.440s
- **Evidence:** logs/TS_SEC_124_execution.log

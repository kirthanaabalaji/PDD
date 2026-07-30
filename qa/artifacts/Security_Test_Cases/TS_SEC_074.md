# Test Case: TS_SEC_074

- **Test Case ID:** TS_SEC_074
- **Module:** IDOR
- **Feature:** verify public route visibility for IDOR checks on AI chat messages with command terminal syntax symbols
- **Test Title:** Verify behavior of IDOR checks on AI chat messages during attempts to verify public route visibility with command terminal syntax symbols
- **Objective:** Evaluate that user can safely execute verify public route visibility for IDOR checks on AI chat messages with command terminal syntax symbols under system checks.
- **Requirement ID:** REQ-SEC-074
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on AI chat messages configuration with command terminal syntax symbols (Ref SEC_074).
- **Test Steps:**
1. Target active interface for IDOR checks on AI chat messages.
2. Trigger action to verify public route visibility with command terminal syntax symbols.
3. Collect audit logs and confirm status code validation (Check SEC_074).
- **Test Data:** Target: IDOR checks on AI chat messages, Action: verify public route visibility, Parameters: with command terminal syntax symbols, Case Index: SEC_074
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_074.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-074
- **Execution Time:** 0.440s
- **Evidence:** logs/TS_SEC_074_execution.log

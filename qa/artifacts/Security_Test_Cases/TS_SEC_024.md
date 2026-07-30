# Test Case: TS_SEC_024

- **Test Case ID:** TS_SEC_024
- **Module:** IDOR
- **Feature:** manipulate record ownership indices for IDOR checks on AI chat messages with blank authorization keys
- **Test Title:** Verify behavior of IDOR checks on AI chat messages during attempts to manipulate record ownership indices with blank authorization keys
- **Objective:** Evaluate that user can safely execute manipulate record ownership indices for IDOR checks on AI chat messages with blank authorization keys under system checks.
- **Requirement ID:** REQ-SEC-024
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on AI chat messages configuration with blank authorization keys (Ref SEC_024).
- **Test Steps:**
1. Target active interface for IDOR checks on AI chat messages.
2. Trigger action to manipulate record ownership indices with blank authorization keys.
3. Collect audit logs and confirm status code validation (Check SEC_024).
- **Test Data:** Target: IDOR checks on AI chat messages, Action: manipulate record ownership indices, Parameters: with blank authorization keys, Case Index: SEC_024
- **Expected Result:** The verification checks confirm that the relative path escape fails to load successfully under reference SEC_024.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-024
- **Execution Time:** 0.440s
- **Evidence:** logs/TS_SEC_024_execution.log

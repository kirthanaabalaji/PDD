# Test Case: TS_SEC_171

- **Test Case ID:** TS_SEC_171
- **Module:** IDOR
- **Feature:** manipulate record ownership indices for IDOR checks on clinical reports using malicious string payloads
- **Test Title:** Verify behavior of IDOR checks on clinical reports during attempts to manipulate record ownership indices using malicious string payloads
- **Objective:** Evaluate that user can safely execute manipulate record ownership indices for IDOR checks on clinical reports using malicious string payloads under system checks.
- **Requirement ID:** REQ-SEC-171
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on clinical reports configuration using malicious string payloads (Ref SEC_171).
- **Test Steps:**
1. Target active interface for IDOR checks on clinical reports.
2. Trigger action to manipulate record ownership indices using malicious string payloads.
3. Collect audit logs and confirm status code validation (Check SEC_171).
- **Test Data:** Target: IDOR checks on clinical reports, Action: manipulate record ownership indices, Parameters: using malicious string payloads, Case Index: SEC_171
- **Expected Result:** The verification checks confirm that the system rejects the tampered token successfully under reference SEC_171.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-171
- **Execution Time:** 0.200s
- **Evidence:** logs/TS_SEC_171_execution.log

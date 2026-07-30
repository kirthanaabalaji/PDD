# Test Case: TC_SEC_174

- **Test Case ID:** TC_SEC_174
- **Module:** IDOR
- **Feature:** audit brute force block speed for IDOR checks on AI chat messages for client local cookie storage
- **Test Title:** Verify behavior of IDOR checks on AI chat messages during attempts to audit brute force block speed for client local cookie storage
- **Objective:** Evaluate that user can safely execute audit brute force block speed for IDOR checks on AI chat messages for client local cookie storage under system checks.
- **Requirement ID:** REQ-SEC-174
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on AI chat messages configuration for client local cookie storage (Ref SEC_174).
- **Test Steps:**
1. Target active interface for IDOR checks on AI chat messages.
2. Trigger action to audit brute force block speed for client local cookie storage.
3. Collect audit logs and confirm status code validation (Check SEC_174).
- **Test Data:** Target: IDOR checks on AI chat messages, Action: audit brute force block speed, Parameters: for client local cookie storage, Case Index: SEC_174
- **Expected Result:** The verification checks confirm that the security headers are parsed properly successfully under reference SEC_174.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-174
- **Execution Time:** 0.440s
- **Evidence:** logs/TC_SEC_174_execution.log

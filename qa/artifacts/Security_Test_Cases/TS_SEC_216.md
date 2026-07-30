# Test Case: TS_SEC_216

- **Test Case ID:** TS_SEC_216
- **Module:** AccessControl
- **Feature:** audit brute force block speed for XML external entity injection block by altering token payload structure
- **Test Title:** Verify behavior of XML external entity injection block during attempts to audit brute force block speed by altering token payload structure
- **Objective:** Evaluate that user can safely execute audit brute force block speed for XML external entity injection block by altering token payload structure under system checks.
- **Requirement ID:** REQ-SEC-216
- **Preconditions:** System state is reset, and target console is directed to XML external entity injection block configuration by altering token payload structure (Ref SEC_216).
- **Test Steps:**
1. Target active interface for XML external entity injection block.
2. Trigger action to audit brute force block speed by altering token payload structure.
3. Collect audit logs and confirm status code validation (Check SEC_216).
- **Test Data:** Target: XML external entity injection block, Action: audit brute force block speed, Parameters: by altering token payload structure, Case Index: SEC_216
- **Expected Result:** The verification checks confirm that the system does not expose credentials successfully under reference SEC_216.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-216
- **Execution Time:** 0.600s
- **Evidence:** logs/TS_SEC_216_execution.log

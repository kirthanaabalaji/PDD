# Test Case: TC_SEC_266

- **Test Case ID:** TC_SEC_266
- **Module:** AccessControl
- **Feature:** inspect logs for exposed keys for XML external entity injection block using malicious string payloads
- **Test Title:** Verify behavior of XML external entity injection block during attempts to inspect logs for exposed keys using malicious string payloads
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for XML external entity injection block using malicious string payloads under system checks.
- **Requirement ID:** REQ-SEC-266
- **Preconditions:** System state is reset, and target console is directed to XML external entity injection block configuration using malicious string payloads (Ref SEC_266).
- **Test Steps:**
1. Target active interface for XML external entity injection block.
2. Trigger action to inspect logs for exposed keys using malicious string payloads.
3. Collect audit logs and confirm status code validation (Check SEC_266).
- **Test Data:** Target: XML external entity injection block, Action: inspect logs for exposed keys, Parameters: using malicious string payloads, Case Index: SEC_266
- **Expected Result:** The verification checks confirm that the upload fails with file format error successfully under reference SEC_266.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-266
- **Execution Time:** 0.600s
- **Evidence:** logs/TC_SEC_266_execution.log

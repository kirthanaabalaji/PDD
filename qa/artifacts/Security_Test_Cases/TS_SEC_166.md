# Test Case: TS_SEC_166

- **Test Case ID:** TS_SEC_166
- **Module:** AccessControl
- **Feature:** test executable file injection for XML external entity injection block without providing auth token headers
- **Test Title:** Verify behavior of XML external entity injection block during attempts to test executable file injection without providing auth token headers
- **Objective:** Evaluate that user can safely execute test executable file injection for XML external entity injection block without providing auth token headers under system checks.
- **Requirement ID:** REQ-SEC-166
- **Preconditions:** System state is reset, and target console is directed to XML external entity injection block configuration without providing auth token headers (Ref SEC_166).
- **Test Steps:**
1. Target active interface for XML external entity injection block.
2. Trigger action to test executable file injection without providing auth token headers.
3. Collect audit logs and confirm status code validation (Check SEC_166).
- **Test Data:** Target: XML external entity injection block, Action: test executable file injection, Parameters: without providing auth token headers, Case Index: SEC_166
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_166.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-166
- **Execution Time:** 0.600s
- **Evidence:** logs/TS_SEC_166_execution.log

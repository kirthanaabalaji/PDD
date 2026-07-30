# Test Case: TS_SEC_016

- **Test Case ID:** TS_SEC_016
- **Module:** AccessControl
- **Feature:** tamper token authorization signature for XML external entity injection block upon user profile account deletion
- **Test Title:** Verify behavior of XML external entity injection block during attempts to tamper token authorization signature upon user profile account deletion
- **Objective:** Evaluate that user can safely execute tamper token authorization signature for XML external entity injection block upon user profile account deletion under system checks.
- **Requirement ID:** REQ-SEC-016
- **Preconditions:** System state is reset, and target console is directed to XML external entity injection block configuration upon user profile account deletion (Ref SEC_016).
- **Test Steps:**
1. Target active interface for XML external entity injection block.
2. Trigger action to tamper token authorization signature upon user profile account deletion.
3. Collect audit logs and confirm status code validation (Check SEC_016).
- **Test Data:** Target: XML external entity injection block, Action: tamper token authorization signature, Parameters: upon user profile account deletion, Case Index: SEC_016
- **Expected Result:** The verification checks confirm that the authorization validation check blocks query successfully under reference SEC_016.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEC-016
- **Execution Time:** 0.600s
- **Evidence:** logs/TS_SEC_016_execution.log

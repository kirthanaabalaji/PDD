# Test Case: TC_SEC_116

- **Test Case ID:** TC_SEC_116
- **Module:** AccessControl
- **Feature:** verify public route visibility for XML external entity injection block with high frequency rapid authentication attempts
- **Test Title:** Verify behavior of XML external entity injection block during attempts to verify public route visibility with high frequency rapid authentication attempts
- **Objective:** Evaluate that user can safely execute verify public route visibility for XML external entity injection block with high frequency rapid authentication attempts under system checks.
- **Requirement ID:** REQ-SEC-116
- **Preconditions:** System state is reset, and target console is directed to XML external entity injection block configuration with high frequency rapid authentication attempts (Ref SEC_116).
- **Test Steps:**
1. Target active interface for XML external entity injection block.
2. Trigger action to verify public route visibility with high frequency rapid authentication attempts.
3. Collect audit logs and confirm status code validation (Check SEC_116).
- **Test Data:** Target: XML external entity injection block, Action: verify public route visibility, Parameters: with high frequency rapid authentication attempts, Case Index: SEC_116
- **Expected Result:** The verification checks confirm that the request is blocked by payload validator successfully under reference SEC_116.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEC-116
- **Execution Time:** 0.600s
- **Evidence:** logs/TC_SEC_116_execution.log

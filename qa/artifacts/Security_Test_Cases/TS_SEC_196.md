# Test Case: TS_SEC_196

- **Test Case ID:** TS_SEC_196
- **Module:** AccessControl
- **Feature:** check traversal directory access for API endpoint parameter validation schemas using prompt injection context escape
- **Test Title:** Verify behavior of API endpoint parameter validation schemas during attempts to check traversal directory access using prompt injection context escape
- **Objective:** Evaluate that user can safely execute check traversal directory access for API endpoint parameter validation schemas using prompt injection context escape under system checks.
- **Requirement ID:** REQ-SEC-196
- **Preconditions:** System state is reset, and target console is directed to API endpoint parameter validation schemas configuration using prompt injection context escape (Ref SEC_196).
- **Test Steps:**
1. Target active interface for API endpoint parameter validation schemas.
2. Trigger action to check traversal directory access using prompt injection context escape.
3. Collect audit logs and confirm status code validation (Check SEC_196).
- **Test Data:** Target: API endpoint parameter validation schemas, Action: check traversal directory access, Parameters: using prompt injection context escape, Case Index: SEC_196
- **Expected Result:** The verification checks confirm that the input script is encoded and neutralized successfully under reference SEC_196.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEC-196
- **Execution Time:** 0.600s
- **Evidence:** logs/TS_SEC_196_execution.log

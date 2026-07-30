# Test Case: TS_SEC_184

- **Test Case ID:** TS_SEC_184
- **Module:** AccessControl
- **Feature:** tamper token authorization signature for GraphQL execution query depth limit with html tag script inputs
- **Test Title:** Verify behavior of GraphQL execution query depth limit during attempts to tamper token authorization signature with html tag script inputs
- **Objective:** Evaluate that user can safely execute tamper token authorization signature for GraphQL execution query depth limit with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-184
- **Preconditions:** System state is reset, and target console is directed to GraphQL execution query depth limit configuration with html tag script inputs (Ref SEC_184).
- **Test Steps:**
1. Target active interface for GraphQL execution query depth limit.
2. Trigger action to tamper token authorization signature with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_184).
- **Test Data:** Target: GraphQL execution query depth limit, Action: tamper token authorization signature, Parameters: with html tag script inputs, Case Index: SEC_184
- **Expected Result:** The verification checks confirm that the request is blocked by payload validator successfully under reference SEC_184.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEC-184
- **Execution Time:** 0.440s
- **Evidence:** logs/TS_SEC_184_execution.log

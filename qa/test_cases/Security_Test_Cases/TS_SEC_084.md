# Test Case: TS_SEC_084

- **Test Case ID:** TS_SEC_084
- **Module:** AccessControl
- **Feature:** test SQL injection bypass for GraphQL execution query depth limit with executable php script files
- **Test Title:** Verify behavior of GraphQL execution query depth limit during attempts to test SQL injection bypass with executable php script files
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for GraphQL execution query depth limit with executable php script files under system checks.
- **Requirement ID:** REQ-SEC-084
- **Preconditions:** System state is reset, and target console is directed to GraphQL execution query depth limit configuration with executable php script files (Ref SEC_084).
- **Test Steps:**
1. Target active interface for GraphQL execution query depth limit.
2. Trigger action to test SQL injection bypass with executable php script files.
3. Collect audit logs and confirm status code validation (Check SEC_084).
- **Test Data:** Target: GraphQL execution query depth limit, Action: test SQL injection bypass, Parameters: with executable php script files, Case Index: SEC_084
- **Expected Result:** The verification checks confirm that the authorization validation check blocks query successfully under reference SEC_084.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-084
- **Execution Time:** 0.440s
- **Evidence:** logs/TS_SEC_084_execution.log

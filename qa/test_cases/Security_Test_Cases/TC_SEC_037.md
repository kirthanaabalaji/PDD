# Test Case: TC_SEC_037

- **Test Case ID:** TC_SEC_037
- **Module:** AccessControl
- **Feature:** tamper token authorization signature for container runtime user privileges by requesting admin privilege routes
- **Test Title:** Verify behavior of container runtime user privileges during attempts to tamper token authorization signature by requesting admin privilege routes
- **Objective:** Evaluate that user can safely execute tamper token authorization signature for container runtime user privileges by requesting admin privilege routes under system checks.
- **Requirement ID:** REQ-SEC-037
- **Preconditions:** System state is reset, and target console is directed to container runtime user privileges configuration by requesting admin privilege routes (Ref SEC_037).
- **Test Steps:**
1. Target active interface for container runtime user privileges.
2. Trigger action to tamper token authorization signature by requesting admin privilege routes.
3. Collect audit logs and confirm status code validation (Check SEC_037).
- **Test Data:** Target: container runtime user privileges, Action: tamper token authorization signature, Parameters: by requesting admin privilege routes, Case Index: SEC_037
- **Expected Result:** The verification checks confirm that the authentication rate limiter blocks IP successfully under reference SEC_037.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-037
- **Execution Time:** 0.680s
- **Evidence:** logs/TC_SEC_037_execution.log

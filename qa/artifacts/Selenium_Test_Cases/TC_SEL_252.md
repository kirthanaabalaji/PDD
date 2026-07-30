# Test Case: TC_SEL_252

- **Test Case ID:** TC_SEL_252
- **Module:** Authentication
- **Feature:** validate fields for multi-tab login state sync during server database failover
- **Test Title:** Verify behavior of multi-tab login state sync during attempts to validate fields during server database failover
- **Objective:** Evaluate that user can safely execute validate fields for multi-tab login state sync during server database failover under system checks.
- **Requirement ID:** REQ-SEL-252
- **Preconditions:** System state is reset, and target console is directed to multi-tab login state sync configuration during server database failover (Ref SEL_252).
- **Test Steps:**
1. Target active interface for multi-tab login state sync.
2. Trigger action to validate fields during server database failover.
3. Collect audit logs and confirm status code validation (Check SEL_252).
- **Test Data:** Target: multi-tab login state sync, Action: validate fields, Parameters: during server database failover, Case Index: SEL_252
- **Expected Result:** The verification checks confirm that the input is sanitized and saved successfully under reference SEL_252.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-252
- **Execution Time:** 0.280s
- **Evidence:** evidence/TC_SEL_252_success.png

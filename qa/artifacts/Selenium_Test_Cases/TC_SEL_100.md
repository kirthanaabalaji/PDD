# Test Case: TC_SEL_100

- **Test Case ID:** TC_SEL_100
- **Module:** Authentication
- **Feature:** reset options for login input fields during server database failover
- **Test Title:** Verify behavior of login input fields during attempts to reset options during server database failover
- **Objective:** Evaluate that user can safely execute reset options for login input fields during server database failover under system checks.
- **Requirement ID:** REQ-SEL-100
- **Preconditions:** System state is reset, and target console is directed to login input fields configuration during server database failover (Ref SEL_100).
- **Test Steps:**
1. Target active interface for login input fields.
2. Trigger action to reset options during server database failover.
3. Collect audit logs and confirm status code validation (Check SEL_100).
- **Test Data:** Target: login input fields, Action: reset options, Parameters: during server database failover, Case Index: SEL_100
- **Expected Result:** The verification checks confirm that the animation runs smoothly at 60fps successfully under reference SEL_100.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-100
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_100_success.png

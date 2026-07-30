# Test Case: TC_SEL_043

- **Test Case ID:** TC_SEL_043
- **Module:** Settings
- **Feature:** track cookie changes for captcha validation image challenge during server database failover
- **Test Title:** Verify behavior of captcha validation image challenge during attempts to track cookie changes during server database failover
- **Objective:** Evaluate that user can safely execute track cookie changes for captcha validation image challenge during server database failover under system checks.
- **Requirement ID:** REQ-SEL-043
- **Preconditions:** System state is reset, and target console is directed to captcha validation image challenge configuration during server database failover (Ref SEL_043).
- **Test Steps:**
1. Target active interface for captcha validation image challenge.
2. Trigger action to track cookie changes during server database failover.
3. Collect audit logs and confirm status code validation (Check SEL_043).
- **Test Data:** Target: captcha validation image challenge, Action: track cookie changes, Parameters: during server database failover, Case Index: SEL_043
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_043.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-043
- **Execution Time:** 0.360s
- **Evidence:** evidence/TC_SEL_043_success.png

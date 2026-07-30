# Test Case: TC_SEL_009

- **Test Case ID:** TC_SEL_009
- **Module:** Authentication
- **Feature:** log telemetry events for reset password form submission during api gateway timeout
- **Test Title:** Verify behavior of reset password form submission during attempts to log telemetry events during api gateway timeout
- **Objective:** Evaluate that user can safely execute log telemetry events for reset password form submission during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-009
- **Preconditions:** System state is reset, and target console is directed to reset password form submission configuration during api gateway timeout (Ref SEL_009).
- **Test Steps:**
1. Target active interface for reset password form submission.
2. Trigger action to log telemetry events during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_009).
- **Test Data:** Target: reset password form submission, Action: log telemetry events, Parameters: during api gateway timeout, Case Index: SEL_009
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_009.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-009
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_009_success.png

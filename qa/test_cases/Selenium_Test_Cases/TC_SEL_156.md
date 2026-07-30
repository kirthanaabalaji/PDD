# Test Case: TC_SEL_156

- **Test Case ID:** TC_SEL_156
- **Module:** Authentication
- **Feature:** log telemetry events for forgot password security link on narrow mobile layout viewport
- **Test Title:** Verify behavior of forgot password security link during attempts to log telemetry events on narrow mobile layout viewport
- **Objective:** Evaluate that user can safely execute log telemetry events for forgot password security link on narrow mobile layout viewport under system checks.
- **Requirement ID:** REQ-SEL-156
- **Preconditions:** System state is reset, and target console is directed to forgot password security link configuration on narrow mobile layout viewport (Ref SEL_156).
- **Test Steps:**
1. Target active interface for forgot password security link.
2. Trigger action to log telemetry events on narrow mobile layout viewport.
3. Collect audit logs and confirm status code validation (Check SEL_156).
- **Test Data:** Target: forgot password security link, Action: log telemetry events, Parameters: on narrow mobile layout viewport, Case Index: SEL_156
- **Expected Result:** The verification checks confirm that the accessibility indicators remain focused successfully under reference SEL_156.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-156
- **Execution Time:** 0.600s
- **Evidence:** evidence/TC_SEL_156_success.png

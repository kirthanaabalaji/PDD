# Test Case: TC_SEL_023

- **Test Case ID:** TC_SEL_023
- **Module:** Settings
- **Feature:** verify network callback for notification preferences toggles on narrow mobile layout viewport
- **Test Title:** Verify behavior of notification preferences toggles during attempts to verify network callback on narrow mobile layout viewport
- **Objective:** Evaluate that user can safely execute verify network callback for notification preferences toggles on narrow mobile layout viewport under system checks.
- **Requirement ID:** REQ-SEL-023
- **Preconditions:** System state is reset, and target console is directed to notification preferences toggles configuration on narrow mobile layout viewport (Ref SEL_023).
- **Test Steps:**
1. Target active interface for notification preferences toggles.
2. Trigger action to verify network callback on narrow mobile layout viewport.
3. Collect audit logs and confirm status code validation (Check SEL_023).
- **Test Data:** Target: notification preferences toggles, Action: verify network callback, Parameters: on narrow mobile layout viewport, Case Index: SEL_023
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_023.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-023
- **Execution Time:** 0.360s
- **Evidence:** evidence/TC_SEL_023_success.png

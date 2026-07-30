# Test Case: TS_SEL_289

- **Test Case ID:** TS_SEL_289
- **Module:** Dashboard
- **Feature:** reset options for quick actions shortcuts bar on narrow mobile layout viewport
- **Test Title:** Verify behavior of quick actions shortcuts bar during attempts to reset options on narrow mobile layout viewport
- **Objective:** Evaluate that user can safely execute reset options for quick actions shortcuts bar on narrow mobile layout viewport under system checks.
- **Requirement ID:** REQ-SEL-289
- **Preconditions:** System state is reset, and target console is directed to quick actions shortcuts bar configuration on narrow mobile layout viewport (Ref SEL_289).
- **Test Steps:**
1. Target active interface for quick actions shortcuts bar.
2. Trigger action to reset options on narrow mobile layout viewport.
3. Collect audit logs and confirm status code validation (Check SEL_289).
- **Test Data:** Target: quick actions shortcuts bar, Action: reset options, Parameters: on narrow mobile layout viewport, Case Index: SEL_289
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_289.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-289
- **Execution Time:** 0.840s
- **Evidence:** evidence/TS_SEL_289_success.png

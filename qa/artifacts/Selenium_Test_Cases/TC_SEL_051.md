# Test Case: TC_SEL_051

- **Test Case ID:** TC_SEL_051
- **Module:** BreathingExercises
- **Feature:** log telemetry events for breathing exercise custom configuration using invalid credentials
- **Test Title:** Verify behavior of breathing exercise custom configuration during attempts to log telemetry events using invalid credentials
- **Objective:** Evaluate that user can safely execute log telemetry events for breathing exercise custom configuration using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-051
- **Preconditions:** System state is reset, and target console is directed to breathing exercise custom configuration configuration using invalid credentials (Ref SEL_051).
- **Test Steps:**
1. Target active interface for breathing exercise custom configuration.
2. Trigger action to log telemetry events using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_051).
- **Test Data:** Target: breathing exercise custom configuration, Action: log telemetry events, Parameters: using invalid credentials, Case Index: SEL_051
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_051.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-051
- **Execution Time:** 0.200s
- **Evidence:** evidence/TC_SEL_051_success.png

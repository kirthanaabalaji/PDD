# Test Case: TS_SEL_093

- **Test Case ID:** TS_SEL_093
- **Module:** Settings
- **Feature:** log telemetry events for captcha validation image challenge when database sync is delayed
- **Test Title:** Verify behavior of captcha validation image challenge during attempts to log telemetry events when database sync is delayed
- **Objective:** Evaluate that user can safely execute log telemetry events for captcha validation image challenge when database sync is delayed under system checks.
- **Requirement ID:** REQ-SEL-093
- **Preconditions:** System state is reset, and target console is directed to captcha validation image challenge configuration when database sync is delayed (Ref SEL_093).
- **Test Steps:**
1. Target active interface for captcha validation image challenge.
2. Trigger action to log telemetry events when database sync is delayed.
3. Collect audit logs and confirm status code validation (Check SEL_093).
- **Test Data:** Target: captcha validation image challenge, Action: log telemetry events, Parameters: when database sync is delayed, Case Index: SEL_093
- **Expected Result:** The verification checks confirm that the token is renewed seamlessly successfully under reference SEL_093.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-093
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_093_success.png

# Test Case: TC_SEL_293

- **Test Case ID:** TC_SEL_293
- **Module:** Settings
- **Feature:** audit focus states for captcha validation image challenge on high resolution displays
- **Test Title:** Verify behavior of captcha validation image challenge during attempts to audit focus states on high resolution displays
- **Objective:** Evaluate that user can safely execute audit focus states for captcha validation image challenge on high resolution displays under system checks.
- **Requirement ID:** REQ-SEL-293
- **Preconditions:** System state is reset, and target console is directed to captcha validation image challenge configuration on high resolution displays (Ref SEL_293).
- **Test Steps:**
1. Target active interface for captcha validation image challenge.
2. Trigger action to audit focus states on high resolution displays.
3. Collect audit logs and confirm status code validation (Check SEL_293).
- **Test Data:** Target: captcha validation image challenge, Action: audit focus states, Parameters: on high resolution displays, Case Index: SEL_293
- **Expected Result:** The verification checks confirm that the toast error alert is rendered successfully under reference SEL_293.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-293
- **Execution Time:** 0.360s
- **Evidence:** evidence/TC_SEL_293_success.png

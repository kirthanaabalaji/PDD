# Test Case: TS_SEL_141

- **Test Case ID:** TS_SEL_141
- **Module:** Onboarding
- **Feature:** evaluate text wrapping for user deletion confirmation popup on high resolution displays
- **Test Title:** Verify behavior of user deletion confirmation popup during attempts to evaluate text wrapping on high resolution displays
- **Objective:** Evaluate that user can safely execute evaluate text wrapping for user deletion confirmation popup on high resolution displays under system checks.
- **Requirement ID:** REQ-SEL-141
- **Preconditions:** System state is reset, and target console is directed to user deletion confirmation popup configuration on high resolution displays (Ref SEL_141).
- **Test Steps:**
1. Target active interface for user deletion confirmation popup.
2. Trigger action to evaluate text wrapping on high resolution displays.
3. Collect audit logs and confirm status code validation (Check SEL_141).
- **Test Data:** Target: user deletion confirmation popup, Action: evaluate text wrapping, Parameters: on high resolution displays, Case Index: SEL_141
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_141.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-141
- **Execution Time:** 0.200s
- **Evidence:** evidence/TS_SEL_141_success.png

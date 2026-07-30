# Test Case: TS_SEL_243

- **Test Case ID:** TS_SEL_243
- **Module:** Settings
- **Feature:** inspect modal overlays for captcha validation image challenge when cookies are blocked
- **Test Title:** Verify behavior of captcha validation image challenge during attempts to inspect modal overlays when cookies are blocked
- **Objective:** Evaluate that user can safely execute inspect modal overlays for captcha validation image challenge when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-243
- **Preconditions:** System state is reset, and target console is directed to captcha validation image challenge configuration when cookies are blocked (Ref SEL_243).
- **Test Steps:**
1. Target active interface for captcha validation image challenge.
2. Trigger action to inspect modal overlays when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_243).
- **Test Data:** Target: captcha validation image challenge, Action: inspect modal overlays, Parameters: when cookies are blocked, Case Index: SEL_243
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_243.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-243
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_243_success.png

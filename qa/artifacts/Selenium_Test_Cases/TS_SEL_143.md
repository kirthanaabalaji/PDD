# Test Case: TS_SEL_143

- **Test Case ID:** TS_SEL_143
- **Module:** Settings
- **Feature:** check storage updates for captcha validation image challenge with browser extensions active
- **Test Title:** Verify behavior of captcha validation image challenge during attempts to check storage updates with browser extensions active
- **Objective:** Evaluate that user can safely execute check storage updates for captcha validation image challenge with browser extensions active under system checks.
- **Requirement ID:** REQ-SEL-143
- **Preconditions:** System state is reset, and target console is directed to captcha validation image challenge configuration with browser extensions active (Ref SEL_143).
- **Test Steps:**
1. Target active interface for captcha validation image challenge.
2. Trigger action to check storage updates with browser extensions active.
3. Collect audit logs and confirm status code validation (Check SEL_143).
- **Test Data:** Target: captcha validation image challenge, Action: check storage updates, Parameters: with browser extensions active, Case Index: SEL_143
- **Expected Result:** The verification checks confirm that the download begins automatically successfully under reference SEL_143.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-143
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_143_success.png

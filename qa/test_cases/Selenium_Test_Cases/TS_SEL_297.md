# Test Case: TS_SEL_297

- **Test Case ID:** TS_SEL_297
- **Module:** Onboarding
- **Feature:** verify layout rendering for image crop zoom controls after five minutes of inactivity
- **Test Title:** Verify behavior of image crop zoom controls during attempts to verify layout rendering after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute verify layout rendering for image crop zoom controls after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-297
- **Preconditions:** System state is reset, and target console is directed to image crop zoom controls configuration after five minutes of inactivity (Ref SEL_297).
- **Test Steps:**
1. Target active interface for image crop zoom controls.
2. Trigger action to verify layout rendering after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_297).
- **Test Data:** Target: image crop zoom controls, Action: verify layout rendering, Parameters: after five minutes of inactivity, Case Index: SEL_297
- **Expected Result:** The verification checks confirm that the token is renewed seamlessly successfully under reference SEL_297.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-297
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_297_success.png

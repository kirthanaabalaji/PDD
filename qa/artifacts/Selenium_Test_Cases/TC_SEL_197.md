# Test Case: TC_SEL_197

- **Test Case ID:** TC_SEL_197
- **Module:** Onboarding
- **Feature:** process submission for image crop zoom controls when network speed is throttled
- **Test Title:** Verify behavior of image crop zoom controls during attempts to process submission when network speed is throttled
- **Objective:** Evaluate that user can safely execute process submission for image crop zoom controls when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-197
- **Preconditions:** System state is reset, and target console is directed to image crop zoom controls configuration when network speed is throttled (Ref SEL_197).
- **Test Steps:**
1. Target active interface for image crop zoom controls.
2. Trigger action to process submission when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_197).
- **Test Data:** Target: image crop zoom controls, Action: process submission, Parameters: when network speed is throttled, Case Index: SEL_197
- **Expected Result:** The verification checks confirm that the browser console shows no errors successfully under reference SEL_197.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-197
- **Execution Time:** 0.680s
- **Evidence:** evidence/TC_SEL_197_success.png

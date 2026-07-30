# Test Case: TS_SEL_097

- **Test Case ID:** TS_SEL_097
- **Module:** Onboarding
- **Feature:** validate text alignment for image crop zoom controls for assistive screen readers
- **Test Title:** Verify behavior of image crop zoom controls during attempts to validate text alignment for assistive screen readers
- **Objective:** Evaluate that user can safely execute validate text alignment for image crop zoom controls for assistive screen readers under system checks.
- **Requirement ID:** REQ-SEL-097
- **Preconditions:** System state is reset, and target console is directed to image crop zoom controls configuration for assistive screen readers (Ref SEL_097).
- **Test Steps:**
1. Target active interface for image crop zoom controls.
2. Trigger action to validate text alignment for assistive screen readers.
3. Collect audit logs and confirm status code validation (Check SEL_097).
- **Test Data:** Target: image crop zoom controls, Action: validate text alignment, Parameters: for assistive screen readers, Case Index: SEL_097
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_097.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-097
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_097_success.png

# Test Case: TS_SEL_247

- **Test Case ID:** TS_SEL_247
- **Module:** Onboarding
- **Feature:** reset options for image crop zoom controls with empty values
- **Test Title:** Verify behavior of image crop zoom controls during attempts to reset options with empty values
- **Objective:** Evaluate that user can safely execute reset options for image crop zoom controls with empty values under system checks.
- **Requirement ID:** REQ-SEL-247
- **Preconditions:** System state is reset, and target console is directed to image crop zoom controls configuration with empty values (Ref SEL_247).
- **Test Steps:**
1. Target active interface for image crop zoom controls.
2. Trigger action to reset options with empty values.
3. Collect audit logs and confirm status code validation (Check SEL_247).
- **Test Data:** Target: image crop zoom controls, Action: reset options, Parameters: with empty values, Case Index: SEL_247
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_247.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-247
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_247_success.png

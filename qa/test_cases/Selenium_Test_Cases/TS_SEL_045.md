# Test Case: TS_SEL_045

- **Test Case ID:** TS_SEL_045
- **Module:** Settings
- **Feature:** verify layout rendering for questionnaire save progress state when network speed is throttled
- **Test Title:** Verify behavior of questionnaire save progress state during attempts to verify layout rendering when network speed is throttled
- **Objective:** Evaluate that user can safely execute verify layout rendering for questionnaire save progress state when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-045
- **Preconditions:** System state is reset, and target console is directed to questionnaire save progress state configuration when network speed is throttled (Ref SEL_045).
- **Test Steps:**
1. Target active interface for questionnaire save progress state.
2. Trigger action to verify layout rendering when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_045).
- **Test Data:** Target: questionnaire save progress state, Action: verify layout rendering, Parameters: when network speed is throttled, Case Index: SEL_045
- **Expected Result:** The verification checks confirm that the layout reflows without overlapping successfully under reference SEL_045.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-045
- **Execution Time:** 0.520s
- **Evidence:** evidence/TS_SEL_045_success.png

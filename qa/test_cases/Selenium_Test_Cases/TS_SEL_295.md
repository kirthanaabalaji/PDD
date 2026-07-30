# Test Case: TS_SEL_295

- **Test Case ID:** TS_SEL_295
- **Module:** Settings
- **Feature:** track cookie changes for questionnaire save progress state with browser extensions active
- **Test Title:** Verify behavior of questionnaire save progress state during attempts to track cookie changes with browser extensions active
- **Objective:** Evaluate that user can safely execute track cookie changes for questionnaire save progress state with browser extensions active under system checks.
- **Requirement ID:** REQ-SEL-295
- **Preconditions:** System state is reset, and target console is directed to questionnaire save progress state configuration with browser extensions active (Ref SEL_295).
- **Test Steps:**
1. Target active interface for questionnaire save progress state.
2. Trigger action to track cookie changes with browser extensions active.
3. Collect audit logs and confirm status code validation (Check SEL_295).
- **Test Data:** Target: questionnaire save progress state, Action: track cookie changes, Parameters: with browser extensions active, Case Index: SEL_295
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_295.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-295
- **Execution Time:** 0.520s
- **Evidence:** evidence/TS_SEL_295_success.png

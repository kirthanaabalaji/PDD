# Test Case: TS_SEL_145

- **Test Case ID:** TS_SEL_145
- **Module:** Settings
- **Feature:** inspect click handlers for questionnaire save progress state after five minutes of inactivity
- **Test Title:** Verify behavior of questionnaire save progress state during attempts to inspect click handlers after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute inspect click handlers for questionnaire save progress state after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-145
- **Preconditions:** System state is reset, and target console is directed to questionnaire save progress state configuration after five minutes of inactivity (Ref SEL_145).
- **Test Steps:**
1. Target active interface for questionnaire save progress state.
2. Trigger action to inspect click handlers after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_145).
- **Test Data:** Target: questionnaire save progress state, Action: inspect click handlers, Parameters: after five minutes of inactivity, Case Index: SEL_145
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_145.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-145
- **Execution Time:** 0.520s
- **Evidence:** evidence/TS_SEL_145_success.png

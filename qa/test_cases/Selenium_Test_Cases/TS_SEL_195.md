# Test Case: TS_SEL_195

- **Test Case ID:** TS_SEL_195
- **Module:** Settings
- **Feature:** audit keyboard navigation for questionnaire save progress state during server database failover
- **Test Title:** Verify behavior of questionnaire save progress state during attempts to audit keyboard navigation during server database failover
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for questionnaire save progress state during server database failover under system checks.
- **Requirement ID:** REQ-SEL-195
- **Preconditions:** System state is reset, and target console is directed to questionnaire save progress state configuration during server database failover (Ref SEL_195).
- **Test Steps:**
1. Target active interface for questionnaire save progress state.
2. Trigger action to audit keyboard navigation during server database failover.
3. Collect audit logs and confirm status code validation (Check SEL_195).
- **Test Data:** Target: questionnaire save progress state, Action: audit keyboard navigation, Parameters: during server database failover, Case Index: SEL_195
- **Expected Result:** The verification checks confirm that the token is renewed seamlessly successfully under reference SEL_195.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-195
- **Execution Time:** 0.520s
- **Evidence:** evidence/TS_SEL_195_success.png

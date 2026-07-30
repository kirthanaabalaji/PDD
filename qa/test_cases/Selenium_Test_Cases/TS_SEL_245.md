# Test Case: TS_SEL_245

- **Test Case ID:** TS_SEL_245
- **Module:** Settings
- **Feature:** ensure contrast ratios for questionnaire save progress state when database sync is delayed
- **Test Title:** Verify behavior of questionnaire save progress state during attempts to ensure contrast ratios when database sync is delayed
- **Objective:** Evaluate that user can safely execute ensure contrast ratios for questionnaire save progress state when database sync is delayed under system checks.
- **Requirement ID:** REQ-SEL-245
- **Preconditions:** System state is reset, and target console is directed to questionnaire save progress state configuration when database sync is delayed (Ref SEL_245).
- **Test Steps:**
1. Target active interface for questionnaire save progress state.
2. Trigger action to ensure contrast ratios when database sync is delayed.
3. Collect audit logs and confirm status code validation (Check SEL_245).
- **Test Data:** Target: questionnaire save progress state, Action: ensure contrast ratios, Parameters: when database sync is delayed, Case Index: SEL_245
- **Expected Result:** The verification checks confirm that the download begins automatically successfully under reference SEL_245.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-245
- **Execution Time:** 0.520s
- **Evidence:** evidence/TS_SEL_245_success.png

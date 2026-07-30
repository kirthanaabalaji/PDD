# Test Case: TS_SEL_213

- **Test Case ID:** TS_SEL_213
- **Module:** SymptomTracking
- **Feature:** verify layout rendering for symptom log trigger selection checkboxes on narrow mobile layout viewport
- **Test Title:** Verify behavior of symptom log trigger selection checkboxes during attempts to verify layout rendering on narrow mobile layout viewport
- **Objective:** Evaluate that user can safely execute verify layout rendering for symptom log trigger selection checkboxes on narrow mobile layout viewport under system checks.
- **Requirement ID:** REQ-SEL-213
- **Preconditions:** System state is reset, and target console is directed to symptom log trigger selection checkboxes configuration on narrow mobile layout viewport (Ref SEL_213).
- **Test Steps:**
1. Target active interface for symptom log trigger selection checkboxes.
2. Trigger action to verify layout rendering on narrow mobile layout viewport.
3. Collect audit logs and confirm status code validation (Check SEL_213).
- **Test Data:** Target: symptom log trigger selection checkboxes, Action: verify layout rendering, Parameters: on narrow mobile layout viewport, Case Index: SEL_213
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_213.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-213
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_213_success.png

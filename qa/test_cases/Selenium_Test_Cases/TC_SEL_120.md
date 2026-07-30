# Test Case: TC_SEL_120

- **Test Case ID:** TC_SEL_120
- **Module:** ClinicalReports
- **Feature:** evaluate text wrapping for pulmonologist appointment booking slot selection when file size exceeds limit
- **Test Title:** Verify behavior of pulmonologist appointment booking slot selection during attempts to evaluate text wrapping when file size exceeds limit
- **Objective:** Evaluate that user can safely execute evaluate text wrapping for pulmonologist appointment booking slot selection when file size exceeds limit under system checks.
- **Requirement ID:** REQ-SEL-120
- **Preconditions:** System state is reset, and target console is directed to pulmonologist appointment booking slot selection configuration when file size exceeds limit (Ref SEL_120).
- **Test Steps:**
1. Target active interface for pulmonologist appointment booking slot selection.
2. Trigger action to evaluate text wrapping when file size exceeds limit.
3. Collect audit logs and confirm status code validation (Check SEL_120).
- **Test Data:** Target: pulmonologist appointment booking slot selection, Action: evaluate text wrapping, Parameters: when file size exceeds limit, Case Index: SEL_120
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_120.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-120
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_120_success.png

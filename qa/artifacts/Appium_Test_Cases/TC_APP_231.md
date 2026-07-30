# Test Case: TC_APP_231

- **Test Case ID:** TC_APP_231
- **Module:** ClinicalReports
- **Feature:** verify permission dialogue for clinical baseline score chart for assistive touch gestures
- **Test Title:** Verify behavior of clinical baseline score chart during attempts to verify permission dialogue for assistive touch gestures
- **Objective:** Evaluate that user can safely execute verify permission dialogue for clinical baseline score chart for assistive touch gestures under system checks.
- **Requirement ID:** REQ-APP-231
- **Preconditions:** System state is reset, and target console is directed to clinical baseline score chart configuration for assistive touch gestures (Ref APP_231).
- **Test Steps:**
1. Target active interface for clinical baseline score chart.
2. Trigger action to verify permission dialogue for assistive touch gestures.
3. Collect audit logs and confirm status code validation (Check APP_231).
- **Test Data:** Target: clinical baseline score chart, Action: verify permission dialogue, Parameters: for assistive touch gestures, Case Index: APP_231
- **Expected Result:** The verification checks confirm that the process executes in background thread successfully under reference APP_231.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-231
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_231_success.png

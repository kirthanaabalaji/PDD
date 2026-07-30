# Test Case: TC_APP_281

- **Test Case ID:** TC_APP_281
- **Module:** ClinicalReports
- **Feature:** process voice capture for clinical baseline score chart on cold start app initialization
- **Test Title:** Verify behavior of clinical baseline score chart during attempts to process voice capture on cold start app initialization
- **Objective:** Evaluate that user can safely execute process voice capture for clinical baseline score chart on cold start app initialization under system checks.
- **Requirement ID:** REQ-APP-281
- **Preconditions:** System state is reset, and target console is directed to clinical baseline score chart configuration on cold start app initialization (Ref APP_281).
- **Test Steps:**
1. Target active interface for clinical baseline score chart.
2. Trigger action to process voice capture on cold start app initialization.
3. Collect audit logs and confirm status code validation (Check APP_281).
- **Test Data:** Target: clinical baseline score chart, Action: process voice capture, Parameters: on cold start app initialization, Case Index: APP_281
- **Expected Result:** The verification checks confirm that the audio recording starts successfully successfully under reference APP_281.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-281
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_281_success.png

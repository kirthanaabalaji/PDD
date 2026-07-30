# Test Case: TC_APP_131

- **Test Case ID:** TC_APP_131
- **Module:** ClinicalReports
- **Feature:** audit gesture scaling zoom for clinical baseline score chart when background storage is cleared
- **Test Title:** Verify behavior of clinical baseline score chart during attempts to audit gesture scaling zoom when background storage is cleared
- **Objective:** Evaluate that user can safely execute audit gesture scaling zoom for clinical baseline score chart when background storage is cleared under system checks.
- **Requirement ID:** REQ-APP-131
- **Preconditions:** System state is reset, and target console is directed to clinical baseline score chart configuration when background storage is cleared (Ref APP_131).
- **Test Steps:**
1. Target active interface for clinical baseline score chart.
2. Trigger action to audit gesture scaling zoom when background storage is cleared.
3. Collect audit logs and confirm status code validation (Check APP_131).
- **Test Data:** Target: clinical baseline score chart, Action: audit gesture scaling zoom, Parameters: when background storage is cleared, Case Index: APP_131
- **Expected Result:** The verification checks confirm that the user is navigated to dashboard successfully under reference APP_131.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-131
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_131_success.png

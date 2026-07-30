# Test Case: TC_APP_031

- **Test Case ID:** TC_APP_031
- **Module:** ClinicalReports
- **Feature:** inspect alarm configuration for clinical baseline score chart when system notification service crashes
- **Test Title:** Verify behavior of clinical baseline score chart during attempts to inspect alarm configuration when system notification service crashes
- **Objective:** Evaluate that user can safely execute inspect alarm configuration for clinical baseline score chart when system notification service crashes under system checks.
- **Requirement ID:** REQ-APP-031
- **Preconditions:** System state is reset, and target console is directed to clinical baseline score chart configuration when system notification service crashes (Ref APP_031).
- **Test Steps:**
1. Target active interface for clinical baseline score chart.
2. Trigger action to inspect alarm configuration when system notification service crashes.
3. Collect audit logs and confirm status code validation (Check APP_031).
- **Test Data:** Target: clinical baseline score chart, Action: inspect alarm configuration, Parameters: when system notification service crashes, Case Index: APP_031
- **Expected Result:** The verification checks confirm that the image crop boundaries are validated successfully under reference APP_031.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-031
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_031_success.png

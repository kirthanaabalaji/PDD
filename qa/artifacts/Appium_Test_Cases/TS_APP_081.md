# Test Case: TS_APP_081

- **Test Case ID:** TS_APP_081
- **Module:** ClinicalReports
- **Feature:** verify localization override for clinical baseline score chart with multiple rapid click gestures
- **Test Title:** Verify behavior of clinical baseline score chart during attempts to verify localization override with multiple rapid click gestures
- **Objective:** Evaluate that user can safely execute verify localization override for clinical baseline score chart with multiple rapid click gestures under system checks.
- **Requirement ID:** REQ-APP-081
- **Preconditions:** System state is reset, and target console is directed to clinical baseline score chart configuration with multiple rapid click gestures (Ref APP_081).
- **Test Steps:**
1. Target active interface for clinical baseline score chart.
2. Trigger action to verify localization override with multiple rapid click gestures.
3. Collect audit logs and confirm status code validation (Check APP_081).
- **Test Data:** Target: clinical baseline score chart, Action: verify localization override, Parameters: with multiple rapid click gestures, Case Index: APP_081
- **Expected Result:** The verification checks confirm that the database commits transaction successfully under reference APP_081.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-APP-081
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_081_success.png

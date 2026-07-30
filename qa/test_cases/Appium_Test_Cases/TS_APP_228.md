# Test Case: TS_APP_228

- **Test Case ID:** TS_APP_228
- **Module:** ClinicalReports
- **Feature:** verify localization override for pulmonologist contact selector when user denies camera permission
- **Test Title:** Verify behavior of pulmonologist contact selector during attempts to verify localization override when user denies camera permission
- **Objective:** Evaluate that user can safely execute verify localization override for pulmonologist contact selector when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-228
- **Preconditions:** System state is reset, and target console is directed to pulmonologist contact selector configuration when user denies camera permission (Ref APP_228).
- **Test Steps:**
1. Target active interface for pulmonologist contact selector.
2. Trigger action to verify localization override when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_228).
- **Test Data:** Target: pulmonologist contact selector, Action: verify localization override, Parameters: when user denies camera permission, Case Index: APP_228
- **Expected Result:** The verification checks confirm that the initialization starts within SLA successfully under reference APP_228.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-APP-228
- **Execution Time:** 2.25s
- **Evidence:** evidence/TS_APP_228_success.png

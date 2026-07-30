# Test Case: TS_APP_278

- **Test Case ID:** TS_APP_278
- **Module:** ClinicalReports
- **Feature:** audit gesture scaling zoom for pulmonologist contact selector when system notification service crashes
- **Test Title:** Verify behavior of pulmonologist contact selector during attempts to audit gesture scaling zoom when system notification service crashes
- **Objective:** Evaluate that user can safely execute audit gesture scaling zoom for pulmonologist contact selector when system notification service crashes under system checks.
- **Requirement ID:** REQ-APP-278
- **Preconditions:** System state is reset, and target console is directed to pulmonologist contact selector configuration when system notification service crashes (Ref APP_278).
- **Test Steps:**
1. Target active interface for pulmonologist contact selector.
2. Trigger action to audit gesture scaling zoom when system notification service crashes.
3. Collect audit logs and confirm status code validation (Check APP_278).
- **Test Data:** Target: pulmonologist contact selector, Action: audit gesture scaling zoom, Parameters: when system notification service crashes, Case Index: APP_278
- **Expected Result:** The verification checks confirm that the cached logs are parsed correctly successfully under reference APP_278.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-278
- **Execution Time:** 2.25s
- **Evidence:** evidence/TS_APP_278_success.png

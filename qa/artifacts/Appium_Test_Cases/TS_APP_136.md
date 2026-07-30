# Test Case: TS_APP_136

- **Test Case ID:** TS_APP_136
- **Module:** Settings
- **Feature:** inspect alarm configuration for battery usage analyzer for assistive touch gestures
- **Test Title:** Verify behavior of battery usage analyzer during attempts to inspect alarm configuration for assistive touch gestures
- **Objective:** Evaluate that user can safely execute inspect alarm configuration for battery usage analyzer for assistive touch gestures under system checks.
- **Requirement ID:** REQ-APP-136
- **Preconditions:** System state is reset, and target console is directed to battery usage analyzer configuration for assistive touch gestures (Ref APP_136).
- **Test Steps:**
1. Target active interface for battery usage analyzer.
2. Trigger action to inspect alarm configuration for assistive touch gestures.
3. Collect audit logs and confirm status code validation (Check APP_136).
- **Test Data:** Target: battery usage analyzer, Action: inspect alarm configuration, Parameters: for assistive touch gestures, Case Index: APP_136
- **Expected Result:** The verification checks confirm that the app shows system settings link successfully under reference APP_136.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-APP-136
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_136_success.png

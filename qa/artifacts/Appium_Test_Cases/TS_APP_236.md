# Test Case: TS_APP_236

- **Test Case ID:** TS_APP_236
- **Module:** Settings
- **Feature:** audit gesture scaling zoom for battery usage analyzer when offline network state is active
- **Test Title:** Verify behavior of battery usage analyzer during attempts to audit gesture scaling zoom when offline network state is active
- **Objective:** Evaluate that user can safely execute audit gesture scaling zoom for battery usage analyzer when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-236
- **Preconditions:** System state is reset, and target console is directed to battery usage analyzer configuration when offline network state is active (Ref APP_236).
- **Test Steps:**
1. Target active interface for battery usage analyzer.
2. Trigger action to audit gesture scaling zoom when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_236).
- **Test Data:** Target: battery usage analyzer, Action: audit gesture scaling zoom, Parameters: when offline network state is active, Case Index: APP_236
- **Expected Result:** The verification checks confirm that the local storage path is secured successfully under reference APP_236.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-APP-236
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_236_success.png

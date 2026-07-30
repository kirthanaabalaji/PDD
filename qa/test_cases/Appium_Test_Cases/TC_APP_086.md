# Test Case: TC_APP_086

- **Test Case ID:** TC_APP_086
- **Module:** Settings
- **Feature:** test network call recovery for battery usage analyzer on device orientation rotate
- **Test Title:** Verify behavior of battery usage analyzer during attempts to test network call recovery on device orientation rotate
- **Objective:** Evaluate that user can safely execute test network call recovery for battery usage analyzer on device orientation rotate under system checks.
- **Requirement ID:** REQ-APP-086
- **Preconditions:** System state is reset, and target console is directed to battery usage analyzer configuration on device orientation rotate (Ref APP_086).
- **Test Steps:**
1. Target active interface for battery usage analyzer.
2. Trigger action to test network call recovery on device orientation rotate.
3. Collect audit logs and confirm status code validation (Check APP_086).
- **Test Data:** Target: battery usage analyzer, Action: test network call recovery, Parameters: on device orientation rotate, Case Index: APP_086
- **Expected Result:** The verification checks confirm that the layout switches to landscape mode successfully under reference APP_086.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-086
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_086_success.png

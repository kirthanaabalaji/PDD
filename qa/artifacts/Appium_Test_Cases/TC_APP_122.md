# Test Case: TC_APP_122

- **Test Case ID:** TC_APP_122
- **Module:** SymptomTracking
- **Feature:** test push alert payload for dosage configuration slider when offline network state is active
- **Test Title:** Verify behavior of dosage configuration slider during attempts to test push alert payload when offline network state is active
- **Objective:** Evaluate that user can safely execute test push alert payload for dosage configuration slider when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-122
- **Preconditions:** System state is reset, and target console is directed to dosage configuration slider configuration when offline network state is active (Ref APP_122).
- **Test Steps:**
1. Target active interface for dosage configuration slider.
2. Trigger action to test push alert payload when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_122).
- **Test Data:** Target: dosage configuration slider, Action: test push alert payload, Parameters: when offline network state is active, Case Index: APP_122
- **Expected Result:** The verification checks confirm that the device releases memory allocations successfully under reference APP_122.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-122
- **Execution Time:** 2.00s
- **Evidence:** evidence/TC_APP_122_success.png

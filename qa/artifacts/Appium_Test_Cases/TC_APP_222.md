# Test Case: TC_APP_222

- **Test Case ID:** TC_APP_222
- **Module:** SymptomTracking
- **Feature:** test local database fetch for dosage configuration slider under extreme low battery conditions
- **Test Title:** Verify behavior of dosage configuration slider during attempts to test local database fetch under extreme low battery conditions
- **Objective:** Evaluate that user can safely execute test local database fetch for dosage configuration slider under extreme low battery conditions under system checks.
- **Requirement ID:** REQ-APP-222
- **Preconditions:** System state is reset, and target console is directed to dosage configuration slider configuration under extreme low battery conditions (Ref APP_222).
- **Test Steps:**
1. Target active interface for dosage configuration slider.
2. Trigger action to test local database fetch under extreme low battery conditions.
3. Collect audit logs and confirm status code validation (Check APP_222).
- **Test Data:** Target: dosage configuration slider, Action: test local database fetch, Parameters: under extreme low battery conditions, Case Index: APP_222
- **Expected Result:** The verification checks confirm that the layout switches to landscape mode successfully under reference APP_222.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-222
- **Execution Time:** 2.00s
- **Evidence:** evidence/TC_APP_222_success.png

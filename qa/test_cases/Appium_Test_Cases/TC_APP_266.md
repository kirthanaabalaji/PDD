# Test Case: TC_APP_266

- **Test Case ID:** TC_APP_266
- **Module:** SymptomTracking
- **Feature:** execute deep link request for daily symptom logging form when user denies camera permission
- **Test Title:** Verify behavior of daily symptom logging form during attempts to execute deep link request when user denies camera permission
- **Objective:** Evaluate that user can safely execute execute deep link request for daily symptom logging form when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-266
- **Preconditions:** System state is reset, and target console is directed to daily symptom logging form configuration when user denies camera permission (Ref APP_266).
- **Test Steps:**
1. Target active interface for daily symptom logging form.
2. Trigger action to execute deep link request when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_266).
- **Test Data:** Target: daily symptom logging form, Action: execute deep link request, Parameters: when user denies camera permission, Case Index: APP_266
- **Expected Result:** The verification checks confirm that the item is scrolled into focus successfully under reference APP_266.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-266
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_266_success.png

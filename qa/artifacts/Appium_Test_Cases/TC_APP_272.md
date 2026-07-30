# Test Case: TC_APP_272

- **Test Case ID:** TC_APP_272
- **Module:** SymptomTracking
- **Feature:** inspect storage path allocation for dosage configuration slider during deep link routing lookup
- **Test Title:** Verify behavior of dosage configuration slider during attempts to inspect storage path allocation during deep link routing lookup
- **Objective:** Evaluate that user can safely execute inspect storage path allocation for dosage configuration slider during deep link routing lookup under system checks.
- **Requirement ID:** REQ-APP-272
- **Preconditions:** System state is reset, and target console is directed to dosage configuration slider configuration during deep link routing lookup (Ref APP_272).
- **Test Steps:**
1. Target active interface for dosage configuration slider.
2. Trigger action to inspect storage path allocation during deep link routing lookup.
3. Collect audit logs and confirm status code validation (Check APP_272).
- **Test Data:** Target: dosage configuration slider, Action: inspect storage path allocation, Parameters: during deep link routing lookup, Case Index: APP_272
- **Expected Result:** The verification checks confirm that the app shows system settings link successfully under reference APP_272.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-APP-272
- **Execution Time:** 2.00s
- **Evidence:** evidence/TC_APP_272_success.png

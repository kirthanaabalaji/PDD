# Test Case: TS_APP_044

- **Test Case ID:** TS_APP_044
- **Module:** Settings
- **Feature:** test network call recovery for api connection recovery check during deep link routing lookup
- **Test Title:** Verify behavior of api connection recovery check during attempts to test network call recovery during deep link routing lookup
- **Objective:** Evaluate that user can safely execute test network call recovery for api connection recovery check during deep link routing lookup under system checks.
- **Requirement ID:** REQ-APP-044
- **Preconditions:** System state is reset, and target console is directed to api connection recovery check configuration during deep link routing lookup (Ref APP_044).
- **Test Steps:**
1. Target active interface for api connection recovery check.
2. Trigger action to test network call recovery during deep link routing lookup.
3. Collect audit logs and confirm status code validation (Check APP_044).
- **Test Data:** Target: api connection recovery check, Action: test network call recovery, Parameters: during deep link routing lookup, Case Index: APP_044
- **Expected Result:** The verification checks confirm that the process executes in background thread successfully under reference APP_044.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-APP-044
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_044_success.png

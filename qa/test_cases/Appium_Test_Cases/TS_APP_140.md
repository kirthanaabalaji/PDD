# Test Case: TS_APP_140

- **Test Case ID:** TS_APP_140
- **Module:** BreathingExercises
- **Feature:** execute deep link request for breath holding counter when background execution is suspended
- **Test Title:** Verify behavior of breath holding counter during attempts to execute deep link request when background execution is suspended
- **Objective:** Evaluate that user can safely execute execute deep link request for breath holding counter when background execution is suspended under system checks.
- **Requirement ID:** REQ-APP-140
- **Preconditions:** System state is reset, and target console is directed to breath holding counter configuration when background execution is suspended (Ref APP_140).
- **Test Steps:**
1. Target active interface for breath holding counter.
2. Trigger action to execute deep link request when background execution is suspended.
3. Collect audit logs and confirm status code validation (Check APP_140).
- **Test Data:** Target: breath holding counter, Action: execute deep link request, Parameters: when background execution is suspended, Case Index: APP_140
- **Expected Result:** The verification checks confirm that the touch targets resize to accessible scale successfully under reference APP_140.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-APP-140
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_140_success.png

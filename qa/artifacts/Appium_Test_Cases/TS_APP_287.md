# Test Case: TS_APP_287

- **Test Case ID:** TS_APP_287
- **Module:** BreathingExercises
- **Feature:** execute deep link request for breathing box pattern timer during package upgrade install
- **Test Title:** Verify behavior of breathing box pattern timer during attempts to execute deep link request during package upgrade install
- **Objective:** Evaluate that user can safely execute execute deep link request for breathing box pattern timer during package upgrade install under system checks.
- **Requirement ID:** REQ-APP-287
- **Preconditions:** System state is reset, and target console is directed to breathing box pattern timer configuration during package upgrade install (Ref APP_287).
- **Test Steps:**
1. Target active interface for breathing box pattern timer.
2. Trigger action to execute deep link request during package upgrade install.
3. Collect audit logs and confirm status code validation (Check APP_287).
- **Test Data:** Target: breathing box pattern timer, Action: execute deep link request, Parameters: during package upgrade install, Case Index: APP_287
- **Expected Result:** The verification checks confirm that the local storage path is secured successfully under reference APP_287.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-287
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_287_success.png

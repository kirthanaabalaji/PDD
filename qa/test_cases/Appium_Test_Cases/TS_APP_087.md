# Test Case: TS_APP_087

- **Test Case ID:** TS_APP_087
- **Module:** BreathingExercises
- **Feature:** test background execution for breathing box pattern timer under poor signal coverage
- **Test Title:** Verify behavior of breathing box pattern timer during attempts to test background execution under poor signal coverage
- **Objective:** Evaluate that user can safely execute test background execution for breathing box pattern timer under poor signal coverage under system checks.
- **Requirement ID:** REQ-APP-087
- **Preconditions:** System state is reset, and target console is directed to breathing box pattern timer configuration under poor signal coverage (Ref APP_087).
- **Test Steps:**
1. Target active interface for breathing box pattern timer.
2. Trigger action to test background execution under poor signal coverage.
3. Collect audit logs and confirm status code validation (Check APP_087).
- **Test Data:** Target: breathing box pattern timer, Action: test background execution, Parameters: under poor signal coverage, Case Index: APP_087
- **Expected Result:** The verification checks confirm that the toast notification is displayed successfully under reference APP_087.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-087
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_087_success.png

# Test Case: TC_APP_078

- **Test Case ID:** TC_APP_078
- **Module:** ClinicalReports
- **Feature:** evaluate resource lock duration for pulmonologist contact selector during package upgrade install
- **Test Title:** Verify behavior of pulmonologist contact selector during attempts to evaluate resource lock duration during package upgrade install
- **Objective:** Evaluate that user can safely execute evaluate resource lock duration for pulmonologist contact selector during package upgrade install under system checks.
- **Requirement ID:** REQ-APP-078
- **Preconditions:** System state is reset, and target console is directed to pulmonologist contact selector configuration during package upgrade install (Ref APP_078).
- **Test Steps:**
1. Target active interface for pulmonologist contact selector.
2. Trigger action to evaluate resource lock duration during package upgrade install.
3. Collect audit logs and confirm status code validation (Check APP_078).
- **Test Data:** Target: pulmonologist contact selector, Action: evaluate resource lock duration, Parameters: during package upgrade install, Case Index: APP_078
- **Expected Result:** The verification checks confirm that the process executes in background thread successfully under reference APP_078.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-078
- **Execution Time:** 2.25s
- **Evidence:** evidence/TC_APP_078_success.png

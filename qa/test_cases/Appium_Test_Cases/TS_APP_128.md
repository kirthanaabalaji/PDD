# Test Case: TS_APP_128

- **Test Case ID:** TS_APP_128
- **Module:** ClinicalReports
- **Feature:** test network call recovery for pulmonologist contact selector with screen readers enabled
- **Test Title:** Verify behavior of pulmonologist contact selector during attempts to test network call recovery with screen readers enabled
- **Objective:** Evaluate that user can safely execute test network call recovery for pulmonologist contact selector with screen readers enabled under system checks.
- **Requirement ID:** REQ-APP-128
- **Preconditions:** System state is reset, and target console is directed to pulmonologist contact selector configuration with screen readers enabled (Ref APP_128).
- **Test Steps:**
1. Target active interface for pulmonologist contact selector.
2. Trigger action to test network call recovery with screen readers enabled.
3. Collect audit logs and confirm status code validation (Check APP_128).
- **Test Data:** Target: pulmonologist contact selector, Action: test network call recovery, Parameters: with screen readers enabled, Case Index: APP_128
- **Expected Result:** The verification checks confirm that the audio recording starts successfully successfully under reference APP_128.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-APP-128
- **Execution Time:** 2.25s
- **Evidence:** evidence/TS_APP_128_success.png

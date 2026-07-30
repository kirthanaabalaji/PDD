# Test Case: TS_APP_014

- **Test Case ID:** TS_APP_014
- **Module:** Settings
- **Feature:** execute deep link request for system settings redirect link with screen readers enabled
- **Test Title:** Verify behavior of system settings redirect link during attempts to execute deep link request with screen readers enabled
- **Objective:** Evaluate that user can safely execute execute deep link request for system settings redirect link with screen readers enabled under system checks.
- **Requirement ID:** REQ-APP-014
- **Preconditions:** System state is reset, and target console is directed to system settings redirect link configuration with screen readers enabled (Ref APP_014).
- **Test Steps:**
1. Target active interface for system settings redirect link.
2. Trigger action to execute deep link request with screen readers enabled.
3. Collect audit logs and confirm status code validation (Check APP_014).
- **Test Data:** Target: system settings redirect link, Action: execute deep link request, Parameters: with screen readers enabled, Case Index: APP_014
- **Expected Result:** The verification checks confirm that the image crop boundaries are validated successfully under reference APP_014.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-014
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_014_success.png

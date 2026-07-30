# Test Case: TC_APP_052

- **Test Case ID:** TC_APP_052
- **Module:** Settings
- **Feature:** inspect alarm configuration for cookie token storage sync with screen readers enabled
- **Test Title:** Verify behavior of cookie token storage sync during attempts to inspect alarm configuration with screen readers enabled
- **Objective:** Evaluate that user can safely execute inspect alarm configuration for cookie token storage sync with screen readers enabled under system checks.
- **Requirement ID:** REQ-APP-052
- **Preconditions:** System state is reset, and target console is directed to cookie token storage sync configuration with screen readers enabled (Ref APP_052).
- **Test Steps:**
1. Target active interface for cookie token storage sync.
2. Trigger action to inspect alarm configuration with screen readers enabled.
3. Collect audit logs and confirm status code validation (Check APP_052).
- **Test Data:** Target: cookie token storage sync, Action: inspect alarm configuration, Parameters: with screen readers enabled, Case Index: APP_052
- **Expected Result:** The verification checks confirm that the layout switches to landscape mode successfully under reference APP_052.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-APP-052
- **Execution Time:** 2.00s
- **Evidence:** evidence/TC_APP_052_success.png

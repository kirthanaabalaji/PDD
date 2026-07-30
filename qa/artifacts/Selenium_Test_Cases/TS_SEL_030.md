# Test Case: TS_SEL_030

- **Test Case ID:** TS_SEL_030
- **Module:** Onboarding
- **Feature:** log telemetry events for change password input validation for special character strings
- **Test Title:** Verify behavior of change password input validation during attempts to log telemetry events for special character strings
- **Objective:** Evaluate that user can safely execute log telemetry events for change password input validation for special character strings under system checks.
- **Requirement ID:** REQ-SEL-030
- **Preconditions:** System state is reset, and target console is directed to change password input validation configuration for special character strings (Ref SEL_030).
- **Test Steps:**
1. Target active interface for change password input validation.
2. Trigger action to log telemetry events for special character strings.
3. Collect audit logs and confirm status code validation (Check SEL_030).
- **Test Data:** Target: change password input validation, Action: log telemetry events, Parameters: for special character strings, Case Index: SEL_030
- **Expected Result:** The verification checks confirm that the local storage key is deleted successfully under reference SEL_030.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-030
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_030_success.png

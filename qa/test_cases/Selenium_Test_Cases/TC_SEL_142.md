# Test Case: TC_SEL_142

- **Test Case ID:** TC_SEL_142
- **Module:** Settings
- **Feature:** reset options for onboarding assessment launch button during api gateway timeout
- **Test Title:** Verify behavior of onboarding assessment launch button during attempts to reset options during api gateway timeout
- **Objective:** Evaluate that user can safely execute reset options for onboarding assessment launch button during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-142
- **Preconditions:** System state is reset, and target console is directed to onboarding assessment launch button configuration during api gateway timeout (Ref SEL_142).
- **Test Steps:**
1. Target active interface for onboarding assessment launch button.
2. Trigger action to reset options during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_142).
- **Test Data:** Target: onboarding assessment launch button, Action: reset options, Parameters: during api gateway timeout, Case Index: SEL_142
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_142.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-142
- **Execution Time:** 0.280s
- **Evidence:** evidence/TC_SEL_142_success.png

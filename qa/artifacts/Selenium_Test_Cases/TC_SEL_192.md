# Test Case: TC_SEL_192

- **Test Case ID:** TC_SEL_192
- **Module:** Settings
- **Feature:** verify layout rendering for onboarding assessment launch button for assistive screen readers
- **Test Title:** Verify behavior of onboarding assessment launch button during attempts to verify layout rendering for assistive screen readers
- **Objective:** Evaluate that user can safely execute verify layout rendering for onboarding assessment launch button for assistive screen readers under system checks.
- **Requirement ID:** REQ-SEL-192
- **Preconditions:** System state is reset, and target console is directed to onboarding assessment launch button configuration for assistive screen readers (Ref SEL_192).
- **Test Steps:**
1. Target active interface for onboarding assessment launch button.
2. Trigger action to verify layout rendering for assistive screen readers.
3. Collect audit logs and confirm status code validation (Check SEL_192).
- **Test Data:** Target: onboarding assessment launch button, Action: verify layout rendering, Parameters: for assistive screen readers, Case Index: SEL_192
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_192.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-192
- **Execution Time:** 0.280s
- **Evidence:** evidence/TC_SEL_192_success.png

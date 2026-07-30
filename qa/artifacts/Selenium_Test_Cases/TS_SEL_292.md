# Test Case: TS_SEL_292

- **Test Case ID:** TS_SEL_292
- **Module:** Settings
- **Feature:** inspect click handlers for onboarding assessment launch button when network speed is throttled
- **Test Title:** Verify behavior of onboarding assessment launch button during attempts to inspect click handlers when network speed is throttled
- **Objective:** Evaluate that user can safely execute inspect click handlers for onboarding assessment launch button when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-292
- **Preconditions:** System state is reset, and target console is directed to onboarding assessment launch button configuration when network speed is throttled (Ref SEL_292).
- **Test Steps:**
1. Target active interface for onboarding assessment launch button.
2. Trigger action to inspect click handlers when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_292).
- **Test Data:** Target: onboarding assessment launch button, Action: inspect click handlers, Parameters: when network speed is throttled, Case Index: SEL_292
- **Expected Result:** The verification checks confirm that the accessibility indicators remain focused successfully under reference SEL_292.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-292
- **Execution Time:** 0.280s
- **Evidence:** evidence/TS_SEL_292_success.png

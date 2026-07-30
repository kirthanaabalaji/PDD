# Test Case: TC_SEL_124

- **Test Case ID:** TC_SEL_124
- **Module:** Onboarding
- **Feature:** inspect click handlers for profile information form fields with browser extensions active
- **Test Title:** Verify behavior of profile information form fields during attempts to inspect click handlers with browser extensions active
- **Objective:** Evaluate that user can safely execute inspect click handlers for profile information form fields with browser extensions active under system checks.
- **Requirement ID:** REQ-SEL-124
- **Preconditions:** System state is reset, and target console is directed to profile information form fields configuration with browser extensions active (Ref SEL_124).
- **Test Steps:**
1. Target active interface for profile information form fields.
2. Trigger action to inspect click handlers with browser extensions active.
3. Collect audit logs and confirm status code validation (Check SEL_124).
- **Test Data:** Target: profile information form fields, Action: inspect click handlers, Parameters: with browser extensions active, Case Index: SEL_124
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_124.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-124
- **Execution Time:** 0.440s
- **Evidence:** evidence/TC_SEL_124_success.png

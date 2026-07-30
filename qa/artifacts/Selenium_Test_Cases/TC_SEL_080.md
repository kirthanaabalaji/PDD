# Test Case: TC_SEL_080

- **Test Case ID:** TC_SEL_080
- **Module:** Onboarding
- **Feature:** check storage updates for change password input validation on narrow mobile layout viewport
- **Test Title:** Verify behavior of change password input validation during attempts to check storage updates on narrow mobile layout viewport
- **Objective:** Evaluate that user can safely execute check storage updates for change password input validation on narrow mobile layout viewport under system checks.
- **Requirement ID:** REQ-SEL-080
- **Preconditions:** System state is reset, and target console is directed to change password input validation configuration on narrow mobile layout viewport (Ref SEL_080).
- **Test Steps:**
1. Target active interface for change password input validation.
2. Trigger action to check storage updates on narrow mobile layout viewport.
3. Collect audit logs and confirm status code validation (Check SEL_080).
- **Test Data:** Target: change password input validation, Action: check storage updates, Parameters: on narrow mobile layout viewport, Case Index: SEL_080
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_080.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-080
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_080_success.png

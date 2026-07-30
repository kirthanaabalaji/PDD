# Test Case: TC_SEL_159

- **Test Case ID:** TC_SEL_159
- **Module:** Authentication
- **Feature:** inspect modal overlays for reset password form submission when network speed is throttled
- **Test Title:** Verify behavior of reset password form submission during attempts to inspect modal overlays when network speed is throttled
- **Objective:** Evaluate that user can safely execute inspect modal overlays for reset password form submission when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-159
- **Preconditions:** System state is reset, and target console is directed to reset password form submission configuration when network speed is throttled (Ref SEL_159).
- **Test Steps:**
1. Target active interface for reset password form submission.
2. Trigger action to inspect modal overlays when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_159).
- **Test Data:** Target: reset password form submission, Action: inspect modal overlays, Parameters: when network speed is throttled, Case Index: SEL_159
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_159.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-159
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_159_success.png

# Test Case: TC_SEL_209

- **Test Case ID:** TC_SEL_209
- **Module:** Authentication
- **Feature:** audit focus states for reset password form submission with empty values
- **Test Title:** Verify behavior of reset password form submission during attempts to audit focus states with empty values
- **Objective:** Evaluate that user can safely execute audit focus states for reset password form submission with empty values under system checks.
- **Requirement ID:** REQ-SEL-209
- **Preconditions:** System state is reset, and target console is directed to reset password form submission configuration with empty values (Ref SEL_209).
- **Test Steps:**
1. Target active interface for reset password form submission.
2. Trigger action to audit focus states with empty values.
3. Collect audit logs and confirm status code validation (Check SEL_209).
- **Test Data:** Target: reset password form submission, Action: audit focus states, Parameters: with empty values, Case Index: SEL_209
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_209.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-209
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_209_success.png

# Test Case: TS_SEL_230

- **Test Case ID:** TS_SEL_230
- **Module:** Onboarding
- **Feature:** audit focus states for change password input validation for assistive screen readers
- **Test Title:** Verify behavior of change password input validation during attempts to audit focus states for assistive screen readers
- **Objective:** Evaluate that user can safely execute audit focus states for change password input validation for assistive screen readers under system checks.
- **Requirement ID:** REQ-SEL-230
- **Preconditions:** System state is reset, and target console is directed to change password input validation configuration for assistive screen readers (Ref SEL_230).
- **Test Steps:**
1. Target active interface for change password input validation.
2. Trigger action to audit focus states for assistive screen readers.
3. Collect audit logs and confirm status code validation (Check SEL_230).
- **Test Data:** Target: change password input validation, Action: audit focus states, Parameters: for assistive screen readers, Case Index: SEL_230
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_230.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-230
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_230_success.png

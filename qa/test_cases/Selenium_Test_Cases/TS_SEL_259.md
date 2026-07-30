# Test Case: TS_SEL_259

- **Test Case ID:** TS_SEL_259
- **Module:** Authentication
- **Feature:** check tab indexing for reset password form submission after five minutes of inactivity
- **Test Title:** Verify behavior of reset password form submission during attempts to check tab indexing after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute check tab indexing for reset password form submission after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-259
- **Preconditions:** System state is reset, and target console is directed to reset password form submission configuration after five minutes of inactivity (Ref SEL_259).
- **Test Steps:**
1. Target active interface for reset password form submission.
2. Trigger action to check tab indexing after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_259).
- **Test Data:** Target: reset password form submission, Action: check tab indexing, Parameters: after five minutes of inactivity, Case Index: SEL_259
- **Expected Result:** The verification checks confirm that the toast error alert is rendered successfully under reference SEL_259.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-259
- **Execution Time:** 0.840s
- **Evidence:** evidence/TS_SEL_259_success.png

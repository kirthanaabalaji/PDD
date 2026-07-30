# Test Case: TS_SEL_109

- **Test Case ID:** TS_SEL_109
- **Module:** Authentication
- **Feature:** validate regex matching for reset password form submission with multiple simultaneous submits
- **Test Title:** Verify behavior of reset password form submission during attempts to validate regex matching with multiple simultaneous submits
- **Objective:** Evaluate that user can safely execute validate regex matching for reset password form submission with multiple simultaneous submits under system checks.
- **Requirement ID:** REQ-SEL-109
- **Preconditions:** System state is reset, and target console is directed to reset password form submission configuration with multiple simultaneous submits (Ref SEL_109).
- **Test Steps:**
1. Target active interface for reset password form submission.
2. Trigger action to validate regex matching with multiple simultaneous submits.
3. Collect audit logs and confirm status code validation (Check SEL_109).
- **Test Data:** Target: reset password form submission, Action: validate regex matching, Parameters: with multiple simultaneous submits, Case Index: SEL_109
- **Expected Result:** The verification checks confirm that the download begins automatically successfully under reference SEL_109.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-109
- **Execution Time:** 0.840s
- **Evidence:** evidence/TS_SEL_109_success.png

# Test Case: TC_SEL_046

- **Test Case ID:** TC_SEL_046
- **Module:** Settings
- **Feature:** validate regex matching for password visibility toggle switch on high resolution displays
- **Test Title:** Verify behavior of password visibility toggle switch during attempts to validate regex matching on high resolution displays
- **Objective:** Evaluate that user can safely execute validate regex matching for password visibility toggle switch on high resolution displays under system checks.
- **Requirement ID:** REQ-SEL-046
- **Preconditions:** System state is reset, and target console is directed to password visibility toggle switch configuration on high resolution displays (Ref SEL_046).
- **Test Steps:**
1. Target active interface for password visibility toggle switch.
2. Trigger action to validate regex matching on high resolution displays.
3. Collect audit logs and confirm status code validation (Check SEL_046).
- **Test Data:** Target: password visibility toggle switch, Action: validate regex matching, Parameters: on high resolution displays, Case Index: SEL_046
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_046.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-046
- **Execution Time:** 0.600s
- **Evidence:** evidence/TC_SEL_046_success.png

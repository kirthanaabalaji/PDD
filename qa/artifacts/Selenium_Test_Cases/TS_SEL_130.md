# Test Case: TS_SEL_130

- **Test Case ID:** TS_SEL_130
- **Module:** Onboarding
- **Feature:** validate regex matching for change password input validation under local storage quota limits
- **Test Title:** Verify behavior of change password input validation during attempts to validate regex matching under local storage quota limits
- **Objective:** Evaluate that user can safely execute validate regex matching for change password input validation under local storage quota limits under system checks.
- **Requirement ID:** REQ-SEL-130
- **Preconditions:** System state is reset, and target console is directed to change password input validation configuration under local storage quota limits (Ref SEL_130).
- **Test Steps:**
1. Target active interface for change password input validation.
2. Trigger action to validate regex matching under local storage quota limits.
3. Collect audit logs and confirm status code validation (Check SEL_130).
- **Test Data:** Target: change password input validation, Action: validate regex matching, Parameters: under local storage quota limits, Case Index: SEL_130
- **Expected Result:** The verification checks confirm that the layout reflows without overlapping successfully under reference SEL_130.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-130
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_130_success.png

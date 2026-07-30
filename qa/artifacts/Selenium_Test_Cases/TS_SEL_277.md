# Test Case: TS_SEL_277

- **Test Case ID:** TS_SEL_277
- **Module:** Onboarding
- **Feature:** validate regex matching for profile picture upload modal for special character strings
- **Test Title:** Verify behavior of profile picture upload modal during attempts to validate regex matching for special character strings
- **Objective:** Evaluate that user can safely execute validate regex matching for profile picture upload modal for special character strings under system checks.
- **Requirement ID:** REQ-SEL-277
- **Preconditions:** System state is reset, and target console is directed to profile picture upload modal configuration for special character strings (Ref SEL_277).
- **Test Steps:**
1. Target active interface for profile picture upload modal.
2. Trigger action to validate regex matching for special character strings.
3. Collect audit logs and confirm status code validation (Check SEL_277).
- **Test Data:** Target: profile picture upload modal, Action: validate regex matching, Parameters: for special character strings, Case Index: SEL_277
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_277.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-277
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_277_success.png

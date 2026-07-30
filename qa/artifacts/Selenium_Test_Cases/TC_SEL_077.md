# Test Case: TC_SEL_077

- **Test Case ID:** TC_SEL_077
- **Module:** Onboarding
- **Feature:** ensure contrast ratios for profile picture upload modal after session token expiration
- **Test Title:** Verify behavior of profile picture upload modal during attempts to ensure contrast ratios after session token expiration
- **Objective:** Evaluate that user can safely execute ensure contrast ratios for profile picture upload modal after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-077
- **Preconditions:** System state is reset, and target console is directed to profile picture upload modal configuration after session token expiration (Ref SEL_077).
- **Test Steps:**
1. Target active interface for profile picture upload modal.
2. Trigger action to ensure contrast ratios after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_077).
- **Test Data:** Target: profile picture upload modal, Action: ensure contrast ratios, Parameters: after session token expiration, Case Index: SEL_077
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_077.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-077
- **Execution Time:** 0.680s
- **Evidence:** evidence/TC_SEL_077_success.png

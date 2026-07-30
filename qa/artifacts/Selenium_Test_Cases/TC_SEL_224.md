# Test Case: TC_SEL_224

- **Test Case ID:** TC_SEL_224
- **Module:** Onboarding
- **Feature:** ensure contrast ratios for profile information form fields when cookies are blocked
- **Test Title:** Verify behavior of profile information form fields during attempts to ensure contrast ratios when cookies are blocked
- **Objective:** Evaluate that user can safely execute ensure contrast ratios for profile information form fields when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-224
- **Preconditions:** System state is reset, and target console is directed to profile information form fields configuration when cookies are blocked (Ref SEL_224).
- **Test Steps:**
1. Target active interface for profile information form fields.
2. Trigger action to ensure contrast ratios when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_224).
- **Test Data:** Target: profile information form fields, Action: ensure contrast ratios, Parameters: when cookies are blocked, Case Index: SEL_224
- **Expected Result:** The verification checks confirm that the accessibility indicators remain focused successfully under reference SEL_224.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-224
- **Execution Time:** 0.440s
- **Evidence:** evidence/TC_SEL_224_success.png

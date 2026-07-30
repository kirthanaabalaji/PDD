# Test Case: TC_SEL_012

- **Test Case ID:** TC_SEL_012
- **Module:** Authentication
- **Feature:** inspect modal overlays for OTP verification screen timer after five minutes of inactivity
- **Test Title:** Verify behavior of OTP verification screen timer during attempts to inspect modal overlays after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute inspect modal overlays for OTP verification screen timer after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-012
- **Preconditions:** System state is reset, and target console is directed to OTP verification screen timer configuration after five minutes of inactivity (Ref SEL_012).
- **Test Steps:**
1. Target active interface for OTP verification screen timer.
2. Trigger action to inspect modal overlays after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_012).
- **Test Data:** Target: OTP verification screen timer, Action: inspect modal overlays, Parameters: after five minutes of inactivity, Case Index: SEL_012
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_012.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-012
- **Execution Time:** 0.280s
- **Evidence:** evidence/TC_SEL_012_success.png

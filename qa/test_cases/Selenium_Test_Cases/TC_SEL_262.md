# Test Case: TC_SEL_262

- **Test Case ID:** TC_SEL_262
- **Module:** Authentication
- **Feature:** inspect download stream for OTP verification screen timer when cookies are blocked
- **Test Title:** Verify behavior of OTP verification screen timer during attempts to inspect download stream when cookies are blocked
- **Objective:** Evaluate that user can safely execute inspect download stream for OTP verification screen timer when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-262
- **Preconditions:** System state is reset, and target console is directed to OTP verification screen timer configuration when cookies are blocked (Ref SEL_262).
- **Test Steps:**
1. Target active interface for OTP verification screen timer.
2. Trigger action to inspect download stream when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_262).
- **Test Data:** Target: OTP verification screen timer, Action: inspect download stream, Parameters: when cookies are blocked, Case Index: SEL_262
- **Expected Result:** The verification checks confirm that the download begins automatically successfully under reference SEL_262.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-262
- **Execution Time:** 0.280s
- **Evidence:** evidence/TC_SEL_262_success.png

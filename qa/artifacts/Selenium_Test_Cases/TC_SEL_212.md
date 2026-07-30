# Test Case: TC_SEL_212

- **Test Case ID:** TC_SEL_212
- **Module:** Authentication
- **Feature:** verify network callback for OTP verification screen timer using cross-site scripting strings
- **Test Title:** Verify behavior of OTP verification screen timer during attempts to verify network callback using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute verify network callback for OTP verification screen timer using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-212
- **Preconditions:** System state is reset, and target console is directed to OTP verification screen timer configuration using cross-site scripting strings (Ref SEL_212).
- **Test Steps:**
1. Target active interface for OTP verification screen timer.
2. Trigger action to verify network callback using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_212).
- **Test Data:** Target: OTP verification screen timer, Action: verify network callback, Parameters: using cross-site scripting strings, Case Index: SEL_212
- **Expected Result:** The verification checks confirm that the token is renewed seamlessly successfully under reference SEL_212.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-212
- **Execution Time:** 0.280s
- **Evidence:** evidence/TC_SEL_212_success.png

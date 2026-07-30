# Test Case: TC_SEL_112

- **Test Case ID:** TC_SEL_112
- **Module:** Authentication
- **Feature:** check tab indexing for OTP verification screen timer when database sync is delayed
- **Test Title:** Verify behavior of OTP verification screen timer during attempts to check tab indexing when database sync is delayed
- **Objective:** Evaluate that user can safely execute check tab indexing for OTP verification screen timer when database sync is delayed under system checks.
- **Requirement ID:** REQ-SEL-112
- **Preconditions:** System state is reset, and target console is directed to OTP verification screen timer configuration when database sync is delayed (Ref SEL_112).
- **Test Steps:**
1. Target active interface for OTP verification screen timer.
2. Trigger action to check tab indexing when database sync is delayed.
3. Collect audit logs and confirm status code validation (Check SEL_112).
- **Test Data:** Target: OTP verification screen timer, Action: check tab indexing, Parameters: when database sync is delayed, Case Index: SEL_112
- **Expected Result:** The verification checks confirm that the browser console shows no errors successfully under reference SEL_112.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-112
- **Execution Time:** 0.280s
- **Evidence:** evidence/TC_SEL_112_success.png

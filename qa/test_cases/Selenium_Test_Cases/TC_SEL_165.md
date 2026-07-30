# Test Case: TC_SEL_165

- **Test Case ID:** TC_SEL_165
- **Module:** Authentication
- **Feature:** test tooltips display for remember me cookie setting using invalid credentials
- **Test Title:** Verify behavior of remember me cookie setting during attempts to test tooltips display using invalid credentials
- **Objective:** Evaluate that user can safely execute test tooltips display for remember me cookie setting using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-165
- **Preconditions:** System state is reset, and target console is directed to remember me cookie setting configuration using invalid credentials (Ref SEL_165).
- **Test Steps:**
1. Target active interface for remember me cookie setting.
2. Trigger action to test tooltips display using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_165).
- **Test Data:** Target: remember me cookie setting, Action: test tooltips display, Parameters: using invalid credentials, Case Index: SEL_165
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_165.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-165
- **Execution Time:** 0.520s
- **Evidence:** evidence/TC_SEL_165_success.png

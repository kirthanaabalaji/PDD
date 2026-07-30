# Test Case: TC_SEL_088

- **Test Case ID:** TC_SEL_088
- **Module:** Authentication
- **Feature:** validate regex matching for session token refresh process after five minutes of inactivity
- **Test Title:** Verify behavior of session token refresh process during attempts to validate regex matching after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute validate regex matching for session token refresh process after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-088
- **Preconditions:** System state is reset, and target console is directed to session token refresh process configuration after five minutes of inactivity (Ref SEL_088).
- **Test Steps:**
1. Target active interface for session token refresh process.
2. Trigger action to validate regex matching after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_088).
- **Test Data:** Target: session token refresh process, Action: validate regex matching, Parameters: after five minutes of inactivity, Case Index: SEL_088
- **Expected Result:** The verification checks confirm that the accessibility indicators remain focused successfully under reference SEL_088.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-088
- **Execution Time:** 0.760s
- **Evidence:** evidence/TC_SEL_088_success.png

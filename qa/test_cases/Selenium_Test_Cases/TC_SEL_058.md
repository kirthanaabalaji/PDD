# Test Case: TC_SEL_058

- **Test Case ID:** TC_SEL_058
- **Module:** Dashboard
- **Feature:** reset options for dashboard live graph animation after session token expiration
- **Test Title:** Verify behavior of dashboard live graph animation during attempts to reset options after session token expiration
- **Objective:** Evaluate that user can safely execute reset options for dashboard live graph animation after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-058
- **Preconditions:** System state is reset, and target console is directed to dashboard live graph animation configuration after session token expiration (Ref SEL_058).
- **Test Steps:**
1. Target active interface for dashboard live graph animation.
2. Trigger action to reset options after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_058).
- **Test Data:** Target: dashboard live graph animation, Action: reset options, Parameters: after session token expiration, Case Index: SEL_058
- **Expected Result:** The verification checks confirm that the download begins automatically successfully under reference SEL_058.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-058
- **Execution Time:** 0.760s
- **Evidence:** evidence/TC_SEL_058_success.png

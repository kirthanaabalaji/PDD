# Test Case: TC_SEL_158

- **Test Case ID:** TC_SEL_158
- **Module:** Dashboard
- **Feature:** check boundary limits for dashboard live graph animation when file size exceeds limit
- **Test Title:** Verify behavior of dashboard live graph animation during attempts to check boundary limits when file size exceeds limit
- **Objective:** Evaluate that user can safely execute check boundary limits for dashboard live graph animation when file size exceeds limit under system checks.
- **Requirement ID:** REQ-SEL-158
- **Preconditions:** System state is reset, and target console is directed to dashboard live graph animation configuration when file size exceeds limit (Ref SEL_158).
- **Test Steps:**
1. Target active interface for dashboard live graph animation.
2. Trigger action to check boundary limits when file size exceeds limit.
3. Collect audit logs and confirm status code validation (Check SEL_158).
- **Test Data:** Target: dashboard live graph animation, Action: check boundary limits, Parameters: when file size exceeds limit, Case Index: SEL_158
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_158.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-158
- **Execution Time:** 0.760s
- **Evidence:** evidence/TC_SEL_158_success.png

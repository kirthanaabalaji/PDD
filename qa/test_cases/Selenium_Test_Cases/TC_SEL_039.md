# Test Case: TC_SEL_039

- **Test Case ID:** TC_SEL_039
- **Module:** Dashboard
- **Feature:** test tooltips display for quick actions shortcuts bar after session token expiration
- **Test Title:** Verify behavior of quick actions shortcuts bar during attempts to test tooltips display after session token expiration
- **Objective:** Evaluate that user can safely execute test tooltips display for quick actions shortcuts bar after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-039
- **Preconditions:** System state is reset, and target console is directed to quick actions shortcuts bar configuration after session token expiration (Ref SEL_039).
- **Test Steps:**
1. Target active interface for quick actions shortcuts bar.
2. Trigger action to test tooltips display after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_039).
- **Test Data:** Target: quick actions shortcuts bar, Action: test tooltips display, Parameters: after session token expiration, Case Index: SEL_039
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_039.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-039
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_039_success.png

# Test Case: TS_SEL_107

- **Test Case ID:** TS_SEL_107
- **Module:** BreathingExercises
- **Feature:** verify network callback for breathing history table paging after five minutes of inactivity
- **Test Title:** Verify behavior of breathing history table paging during attempts to verify network callback after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute verify network callback for breathing history table paging after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-107
- **Preconditions:** System state is reset, and target console is directed to breathing history table paging configuration after five minutes of inactivity (Ref SEL_107).
- **Test Steps:**
1. Target active interface for breathing history table paging.
2. Trigger action to verify network callback after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_107).
- **Test Data:** Target: breathing history table paging, Action: verify network callback, Parameters: after five minutes of inactivity, Case Index: SEL_107
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_107.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-107
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_107_success.png

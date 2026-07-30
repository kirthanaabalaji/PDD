# Test Case: TS_SEL_007

- **Test Case ID:** TS_SEL_007
- **Module:** BreathingExercises
- **Feature:** check tab indexing for breathing history table paging when network speed is throttled
- **Test Title:** Verify behavior of breathing history table paging during attempts to check tab indexing when network speed is throttled
- **Objective:** Evaluate that user can safely execute check tab indexing for breathing history table paging when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-007
- **Preconditions:** System state is reset, and target console is directed to breathing history table paging configuration when network speed is throttled (Ref SEL_007).
- **Test Steps:**
1. Target active interface for breathing history table paging.
2. Trigger action to check tab indexing when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_007).
- **Test Data:** Target: breathing history table paging, Action: check tab indexing, Parameters: when network speed is throttled, Case Index: SEL_007
- **Expected Result:** The verification checks confirm that the download begins automatically successfully under reference SEL_007.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-007
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_007_success.png

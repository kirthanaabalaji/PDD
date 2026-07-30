# Test Case: TC_SEL_101

- **Test Case ID:** TC_SEL_101
- **Module:** BreathingExercises
- **Feature:** check storage updates for breathing exercise custom configuration when file size exceeds limit
- **Test Title:** Verify behavior of breathing exercise custom configuration during attempts to check storage updates when file size exceeds limit
- **Objective:** Evaluate that user can safely execute check storage updates for breathing exercise custom configuration when file size exceeds limit under system checks.
- **Requirement ID:** REQ-SEL-101
- **Preconditions:** System state is reset, and target console is directed to breathing exercise custom configuration configuration when file size exceeds limit (Ref SEL_101).
- **Test Steps:**
1. Target active interface for breathing exercise custom configuration.
2. Trigger action to check storage updates when file size exceeds limit.
3. Collect audit logs and confirm status code validation (Check SEL_101).
- **Test Data:** Target: breathing exercise custom configuration, Action: check storage updates, Parameters: when file size exceeds limit, Case Index: SEL_101
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_101.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-101
- **Execution Time:** 0.200s
- **Evidence:** evidence/TC_SEL_101_success.png

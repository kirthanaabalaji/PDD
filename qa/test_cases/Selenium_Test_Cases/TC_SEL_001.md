# Test Case: TC_SEL_001

- **Test Case ID:** TC_SEL_001
- **Module:** BreathingExercises
- **Feature:** track cookie changes for breathing exercise custom configuration after session token expiration
- **Test Title:** Verify behavior of breathing exercise custom configuration during attempts to track cookie changes after session token expiration
- **Objective:** Evaluate that user can safely execute track cookie changes for breathing exercise custom configuration after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-001
- **Preconditions:** System state is reset, and target console is directed to breathing exercise custom configuration configuration after session token expiration (Ref SEL_001).
- **Test Steps:**
1. Target active interface for breathing exercise custom configuration.
2. Trigger action to track cookie changes after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_001).
- **Test Data:** Target: breathing exercise custom configuration, Action: track cookie changes, Parameters: after session token expiration, Case Index: SEL_001
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_001.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-001
- **Execution Time:** 0.200s
- **Evidence:** evidence/TC_SEL_001_success.png

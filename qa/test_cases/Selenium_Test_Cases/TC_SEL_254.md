# Test Case: TC_SEL_254

- **Test Case ID:** TC_SEL_254
- **Module:** BreathingExercises
- **Feature:** verify network callback for breathing orb size scale animation when network speed is throttled
- **Test Title:** Verify behavior of breathing orb size scale animation during attempts to verify network callback when network speed is throttled
- **Objective:** Evaluate that user can safely execute verify network callback for breathing orb size scale animation when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-254
- **Preconditions:** System state is reset, and target console is directed to breathing orb size scale animation configuration when network speed is throttled (Ref SEL_254).
- **Test Steps:**
1. Target active interface for breathing orb size scale animation.
2. Trigger action to verify network callback when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_254).
- **Test Data:** Target: breathing orb size scale animation, Action: verify network callback, Parameters: when network speed is throttled, Case Index: SEL_254
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_254.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-254
- **Execution Time:** 0.440s
- **Evidence:** evidence/TC_SEL_254_success.png

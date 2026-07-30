# Test Case: TC_SEL_236

- **Test Case ID:** TC_SEL_236
- **Module:** Dashboard
- **Feature:** measure execution time for navigation drawer menu items on high resolution displays
- **Test Title:** Verify behavior of navigation drawer menu items during attempts to measure execution time on high resolution displays
- **Objective:** Evaluate that user can safely execute measure execution time for navigation drawer menu items on high resolution displays under system checks.
- **Requirement ID:** REQ-SEL-236
- **Preconditions:** System state is reset, and target console is directed to navigation drawer menu items configuration on high resolution displays (Ref SEL_236).
- **Test Steps:**
1. Target active interface for navigation drawer menu items.
2. Trigger action to measure execution time on high resolution displays.
3. Collect audit logs and confirm status code validation (Check SEL_236).
- **Test Data:** Target: navigation drawer menu items, Action: measure execution time, Parameters: on high resolution displays, Case Index: SEL_236
- **Expected Result:** The verification checks confirm that the animation runs smoothly at 60fps successfully under reference SEL_236.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-236
- **Execution Time:** 0.600s
- **Evidence:** evidence/TC_SEL_236_success.png

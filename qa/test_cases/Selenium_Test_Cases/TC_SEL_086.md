# Test Case: TC_SEL_086

- **Test Case ID:** TC_SEL_086
- **Module:** Dashboard
- **Feature:** verify network callback for navigation drawer menu items with browser extensions active
- **Test Title:** Verify behavior of navigation drawer menu items during attempts to verify network callback with browser extensions active
- **Objective:** Evaluate that user can safely execute verify network callback for navigation drawer menu items with browser extensions active under system checks.
- **Requirement ID:** REQ-SEL-086
- **Preconditions:** System state is reset, and target console is directed to navigation drawer menu items configuration with browser extensions active (Ref SEL_086).
- **Test Steps:**
1. Target active interface for navigation drawer menu items.
2. Trigger action to verify network callback with browser extensions active.
3. Collect audit logs and confirm status code validation (Check SEL_086).
- **Test Data:** Target: navigation drawer menu items, Action: verify network callback, Parameters: with browser extensions active, Case Index: SEL_086
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_086.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-086
- **Execution Time:** 0.600s
- **Evidence:** evidence/TC_SEL_086_success.png

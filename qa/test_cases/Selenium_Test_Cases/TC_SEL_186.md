# Test Case: TC_SEL_186

- **Test Case ID:** TC_SEL_186
- **Module:** Dashboard
- **Feature:** test tooltips display for navigation drawer menu items when cookies are blocked
- **Test Title:** Verify behavior of navigation drawer menu items during attempts to test tooltips display when cookies are blocked
- **Objective:** Evaluate that user can safely execute test tooltips display for navigation drawer menu items when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-186
- **Preconditions:** System state is reset, and target console is directed to navigation drawer menu items configuration when cookies are blocked (Ref SEL_186).
- **Test Steps:**
1. Target active interface for navigation drawer menu items.
2. Trigger action to test tooltips display when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_186).
- **Test Data:** Target: navigation drawer menu items, Action: test tooltips display, Parameters: when cookies are blocked, Case Index: SEL_186
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_186.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-186
- **Execution Time:** 0.600s
- **Evidence:** evidence/TC_SEL_186_success.png

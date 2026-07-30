# Test Case: TC_SEL_036

- **Test Case ID:** TC_SEL_036
- **Module:** Dashboard
- **Feature:** evaluate text wrapping for navigation drawer menu items when database sync is delayed
- **Test Title:** Verify behavior of navigation drawer menu items during attempts to evaluate text wrapping when database sync is delayed
- **Objective:** Evaluate that user can safely execute evaluate text wrapping for navigation drawer menu items when database sync is delayed under system checks.
- **Requirement ID:** REQ-SEL-036
- **Preconditions:** System state is reset, and target console is directed to navigation drawer menu items configuration when database sync is delayed (Ref SEL_036).
- **Test Steps:**
1. Target active interface for navigation drawer menu items.
2. Trigger action to evaluate text wrapping when database sync is delayed.
3. Collect audit logs and confirm status code validation (Check SEL_036).
- **Test Data:** Target: navigation drawer menu items, Action: evaluate text wrapping, Parameters: when database sync is delayed, Case Index: SEL_036
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_036.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-036
- **Execution Time:** 0.600s
- **Evidence:** evidence/TC_SEL_036_success.png

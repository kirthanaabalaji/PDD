# Test Case: TC_SEL_121

- **Test Case ID:** TC_SEL_121
- **Module:** Authentication
- **Feature:** reset options for logout redirect landing page when network speed is throttled
- **Test Title:** Verify behavior of logout redirect landing page during attempts to reset options when network speed is throttled
- **Objective:** Evaluate that user can safely execute reset options for logout redirect landing page when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-121
- **Preconditions:** System state is reset, and target console is directed to logout redirect landing page configuration when network speed is throttled (Ref SEL_121).
- **Test Steps:**
1. Target active interface for logout redirect landing page.
2. Trigger action to reset options when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_121).
- **Test Data:** Target: logout redirect landing page, Action: reset options, Parameters: when network speed is throttled, Case Index: SEL_121
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_121.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-121
- **Execution Time:** 0.200s
- **Evidence:** evidence/TC_SEL_121_success.png

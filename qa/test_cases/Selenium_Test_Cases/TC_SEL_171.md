# Test Case: TC_SEL_171

- **Test Case ID:** TC_SEL_171
- **Module:** Authentication
- **Feature:** verify layout rendering for logout redirect landing page with empty values
- **Test Title:** Verify behavior of logout redirect landing page during attempts to verify layout rendering with empty values
- **Objective:** Evaluate that user can safely execute verify layout rendering for logout redirect landing page with empty values under system checks.
- **Requirement ID:** REQ-SEL-171
- **Preconditions:** System state is reset, and target console is directed to logout redirect landing page configuration with empty values (Ref SEL_171).
- **Test Steps:**
1. Target active interface for logout redirect landing page.
2. Trigger action to verify layout rendering with empty values.
3. Collect audit logs and confirm status code validation (Check SEL_171).
- **Test Data:** Target: logout redirect landing page, Action: verify layout rendering, Parameters: with empty values, Case Index: SEL_171
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_171.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-171
- **Execution Time:** 0.200s
- **Evidence:** evidence/TC_SEL_171_success.png

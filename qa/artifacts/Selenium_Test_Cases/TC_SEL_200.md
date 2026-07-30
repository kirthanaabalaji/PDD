# Test Case: TC_SEL_200

- **Test Case ID:** TC_SEL_200
- **Module:** Authentication
- **Feature:** check boundary limits for login input fields with browser extensions active
- **Test Title:** Verify behavior of login input fields during attempts to check boundary limits with browser extensions active
- **Objective:** Evaluate that user can safely execute check boundary limits for login input fields with browser extensions active under system checks.
- **Requirement ID:** REQ-SEL-200
- **Preconditions:** System state is reset, and target console is directed to login input fields configuration with browser extensions active (Ref SEL_200).
- **Test Steps:**
1. Target active interface for login input fields.
2. Trigger action to check boundary limits with browser extensions active.
3. Collect audit logs and confirm status code validation (Check SEL_200).
- **Test Data:** Target: login input fields, Action: check boundary limits, Parameters: with browser extensions active, Case Index: SEL_200
- **Expected Result:** The verification checks confirm that the local storage key is deleted successfully under reference SEL_200.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-200
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_200_success.png

# Test Case: TS_SEL_250

- **Test Case ID:** TS_SEL_250
- **Module:** Authentication
- **Feature:** inspect click handlers for login input fields using cross-site scripting strings
- **Test Title:** Verify behavior of login input fields during attempts to inspect click handlers using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute inspect click handlers for login input fields using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-250
- **Preconditions:** System state is reset, and target console is directed to login input fields configuration using cross-site scripting strings (Ref SEL_250).
- **Test Steps:**
1. Target active interface for login input fields.
2. Trigger action to inspect click handlers using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_250).
- **Test Data:** Target: login input fields, Action: inspect click handlers, Parameters: using cross-site scripting strings, Case Index: SEL_250
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_250.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-250
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_250_success.png

# Test Case: TC_SEL_300

- **Test Case ID:** TC_SEL_300
- **Module:** Authentication
- **Feature:** audit keyboard navigation for login input fields when cookies are blocked
- **Test Title:** Verify behavior of login input fields during attempts to audit keyboard navigation when cookies are blocked
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for login input fields when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-300
- **Preconditions:** System state is reset, and target console is directed to login input fields configuration when cookies are blocked (Ref SEL_300).
- **Test Steps:**
1. Target active interface for login input fields.
2. Trigger action to audit keyboard navigation when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_300).
- **Test Data:** Target: login input fields, Action: audit keyboard navigation, Parameters: when cookies are blocked, Case Index: SEL_300
- **Expected Result:** The verification checks confirm that the layout reflows without overlapping successfully under reference SEL_300.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-300
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_300_success.png

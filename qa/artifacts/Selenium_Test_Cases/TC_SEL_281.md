# Test Case: TC_SEL_281

- **Test Case ID:** TC_SEL_281
- **Module:** Settings
- **Feature:** process submission for dark mode theme layout colors when cookies are blocked
- **Test Title:** Verify behavior of dark mode theme layout colors during attempts to process submission when cookies are blocked
- **Objective:** Evaluate that user can safely execute process submission for dark mode theme layout colors when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-281
- **Preconditions:** System state is reset, and target console is directed to dark mode theme layout colors configuration when cookies are blocked (Ref SEL_281).
- **Test Steps:**
1. Target active interface for dark mode theme layout colors.
2. Trigger action to process submission when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_281).
- **Test Data:** Target: dark mode theme layout colors, Action: process submission, Parameters: when cookies are blocked, Case Index: SEL_281
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_281.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-281
- **Execution Time:** 0.200s
- **Evidence:** evidence/TC_SEL_281_success.png

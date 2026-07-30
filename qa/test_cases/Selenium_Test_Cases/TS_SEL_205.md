# Test Case: TS_SEL_205

- **Test Case ID:** TS_SEL_205
- **Module:** Authentication
- **Feature:** reset options for browser history back navigation behavior when cookies are blocked
- **Test Title:** Verify behavior of browser history back navigation behavior during attempts to reset options when cookies are blocked
- **Objective:** Evaluate that user can safely execute reset options for browser history back navigation behavior when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-205
- **Preconditions:** System state is reset, and target console is directed to browser history back navigation behavior configuration when cookies are blocked (Ref SEL_205).
- **Test Steps:**
1. Target active interface for browser history back navigation behavior.
2. Trigger action to reset options when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_205).
- **Test Data:** Target: browser history back navigation behavior, Action: reset options, Parameters: when cookies are blocked, Case Index: SEL_205
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_205.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-205
- **Execution Time:** 0.520s
- **Evidence:** evidence/TS_SEL_205_success.png

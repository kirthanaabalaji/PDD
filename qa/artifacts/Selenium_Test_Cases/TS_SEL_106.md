# Test Case: TS_SEL_106

- **Test Case ID:** TS_SEL_106
- **Module:** Authentication
- **Feature:** track cookie changes for forgot password security link for special character strings
- **Test Title:** Verify behavior of forgot password security link during attempts to track cookie changes for special character strings
- **Objective:** Evaluate that user can safely execute track cookie changes for forgot password security link for special character strings under system checks.
- **Requirement ID:** REQ-SEL-106
- **Preconditions:** System state is reset, and target console is directed to forgot password security link configuration for special character strings (Ref SEL_106).
- **Test Steps:**
1. Target active interface for forgot password security link.
2. Trigger action to track cookie changes for special character strings.
3. Collect audit logs and confirm status code validation (Check SEL_106).
- **Test Data:** Target: forgot password security link, Action: track cookie changes, Parameters: for special character strings, Case Index: SEL_106
- **Expected Result:** The verification checks confirm that the toast error alert is rendered successfully under reference SEL_106.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-106
- **Execution Time:** 0.600s
- **Evidence:** evidence/TS_SEL_106_success.png

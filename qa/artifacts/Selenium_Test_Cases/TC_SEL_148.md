# Test Case: TC_SEL_148

- **Test Case ID:** TC_SEL_148
- **Module:** Settings
- **Feature:** track cookie changes for questionnaire submit assessment confirmation when cookies are blocked
- **Test Title:** Verify behavior of questionnaire submit assessment confirmation during attempts to track cookie changes when cookies are blocked
- **Objective:** Evaluate that user can safely execute track cookie changes for questionnaire submit assessment confirmation when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-148
- **Preconditions:** System state is reset, and target console is directed to questionnaire submit assessment confirmation configuration when cookies are blocked (Ref SEL_148).
- **Test Steps:**
1. Target active interface for questionnaire submit assessment confirmation.
2. Trigger action to track cookie changes when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_148).
- **Test Data:** Target: questionnaire submit assessment confirmation, Action: track cookie changes, Parameters: when cookies are blocked, Case Index: SEL_148
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_148.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-148
- **Execution Time:** 0.760s
- **Evidence:** evidence/TC_SEL_148_success.png

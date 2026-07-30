# Test Case: TS_SEL_268

- **Test Case ID:** TS_SEL_268
- **Module:** Authentication
- **Feature:** reset options for session timeout idle alert for assistive screen readers
- **Test Title:** Verify behavior of session timeout idle alert during attempts to reset options for assistive screen readers
- **Objective:** Evaluate that user can safely execute reset options for session timeout idle alert for assistive screen readers under system checks.
- **Requirement ID:** REQ-SEL-268
- **Preconditions:** System state is reset, and target console is directed to session timeout idle alert configuration for assistive screen readers (Ref SEL_268).
- **Test Steps:**
1. Target active interface for session timeout idle alert.
2. Trigger action to reset options for assistive screen readers.
3. Collect audit logs and confirm status code validation (Check SEL_268).
- **Test Data:** Target: session timeout idle alert, Action: reset options, Parameters: for assistive screen readers, Case Index: SEL_268
- **Expected Result:** The verification checks confirm that the local storage key is deleted successfully under reference SEL_268.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-268
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_268_success.png

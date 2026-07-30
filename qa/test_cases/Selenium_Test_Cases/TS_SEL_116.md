# Test Case: TS_SEL_116

- **Test Case ID:** TS_SEL_116
- **Module:** ClinicalReports
- **Feature:** check boundary limits for clinical PDF report print dialog for assistive screen readers
- **Test Title:** Verify behavior of clinical PDF report print dialog during attempts to check boundary limits for assistive screen readers
- **Objective:** Evaluate that user can safely execute check boundary limits for clinical PDF report print dialog for assistive screen readers under system checks.
- **Requirement ID:** REQ-SEL-116
- **Preconditions:** System state is reset, and target console is directed to clinical PDF report print dialog configuration for assistive screen readers (Ref SEL_116).
- **Test Steps:**
1. Target active interface for clinical PDF report print dialog.
2. Trigger action to check boundary limits for assistive screen readers.
3. Collect audit logs and confirm status code validation (Check SEL_116).
- **Test Data:** Target: clinical PDF report print dialog, Action: check boundary limits, Parameters: for assistive screen readers, Case Index: SEL_116
- **Expected Result:** The verification checks confirm that the input is sanitized and saved successfully under reference SEL_116.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-116
- **Execution Time:** 0.600s
- **Evidence:** evidence/TS_SEL_116_success.png

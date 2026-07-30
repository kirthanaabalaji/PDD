# Test Case: TC_SEL_016

- **Test Case ID:** TC_SEL_016
- **Module:** ClinicalReports
- **Feature:** reset options for clinical PDF report print dialog under local storage quota limits
- **Test Title:** Verify behavior of clinical PDF report print dialog during attempts to reset options under local storage quota limits
- **Objective:** Evaluate that user can safely execute reset options for clinical PDF report print dialog under local storage quota limits under system checks.
- **Requirement ID:** REQ-SEL-016
- **Preconditions:** System state is reset, and target console is directed to clinical PDF report print dialog configuration under local storage quota limits (Ref SEL_016).
- **Test Steps:**
1. Target active interface for clinical PDF report print dialog.
2. Trigger action to reset options under local storage quota limits.
3. Collect audit logs and confirm status code validation (Check SEL_016).
- **Test Data:** Target: clinical PDF report print dialog, Action: reset options, Parameters: under local storage quota limits, Case Index: SEL_016
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_016.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-016
- **Execution Time:** 0.600s
- **Evidence:** evidence/TC_SEL_016_success.png

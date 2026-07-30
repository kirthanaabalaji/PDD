# Test Case: TC_SEL_216

- **Test Case ID:** TC_SEL_216
- **Module:** ClinicalReports
- **Feature:** audit keyboard navigation for clinical PDF report print dialog when network speed is throttled
- **Test Title:** Verify behavior of clinical PDF report print dialog during attempts to audit keyboard navigation when network speed is throttled
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for clinical PDF report print dialog when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-216
- **Preconditions:** System state is reset, and target console is directed to clinical PDF report print dialog configuration when network speed is throttled (Ref SEL_216).
- **Test Steps:**
1. Target active interface for clinical PDF report print dialog.
2. Trigger action to audit keyboard navigation when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_216).
- **Test Data:** Target: clinical PDF report print dialog, Action: audit keyboard navigation, Parameters: when network speed is throttled, Case Index: SEL_216
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_216.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-216
- **Execution Time:** 0.600s
- **Evidence:** evidence/TC_SEL_216_success.png

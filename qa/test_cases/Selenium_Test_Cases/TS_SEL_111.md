# Test Case: TS_SEL_111

- **Test Case ID:** TS_SEL_111
- **Module:** SymptomTracking
- **Feature:** audit keyboard navigation for symptom history calendar grid view under local storage quota limits
- **Test Title:** Verify behavior of symptom history calendar grid view during attempts to audit keyboard navigation under local storage quota limits
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for symptom history calendar grid view under local storage quota limits under system checks.
- **Requirement ID:** REQ-SEL-111
- **Preconditions:** System state is reset, and target console is directed to symptom history calendar grid view configuration under local storage quota limits (Ref SEL_111).
- **Test Steps:**
1. Target active interface for symptom history calendar grid view.
2. Trigger action to audit keyboard navigation under local storage quota limits.
3. Collect audit logs and confirm status code validation (Check SEL_111).
- **Test Data:** Target: symptom history calendar grid view, Action: audit keyboard navigation, Parameters: under local storage quota limits, Case Index: SEL_111
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_111.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-111
- **Execution Time:** 0.200s
- **Evidence:** evidence/TS_SEL_111_success.png

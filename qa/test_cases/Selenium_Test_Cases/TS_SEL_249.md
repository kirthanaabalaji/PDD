# Test Case: TS_SEL_249

- **Test Case ID:** TS_SEL_249
- **Module:** Authentication
- **Feature:** test tooltips display for cookie consent policy banner for assistive screen readers
- **Test Title:** Verify behavior of cookie consent policy banner during attempts to test tooltips display for assistive screen readers
- **Objective:** Evaluate that user can safely execute test tooltips display for cookie consent policy banner for assistive screen readers under system checks.
- **Requirement ID:** REQ-SEL-249
- **Preconditions:** System state is reset, and target console is directed to cookie consent policy banner configuration for assistive screen readers (Ref SEL_249).
- **Test Steps:**
1. Target active interface for cookie consent policy banner.
2. Trigger action to test tooltips display for assistive screen readers.
3. Collect audit logs and confirm status code validation (Check SEL_249).
- **Test Data:** Target: cookie consent policy banner, Action: test tooltips display, Parameters: for assistive screen readers, Case Index: SEL_249
- **Expected Result:** The verification checks confirm that the layout reflows without overlapping successfully under reference SEL_249.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-249
- **Execution Time:** 0.840s
- **Evidence:** evidence/TS_SEL_249_success.png

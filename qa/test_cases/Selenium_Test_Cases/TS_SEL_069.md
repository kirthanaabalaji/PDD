# Test Case: TS_SEL_069

- **Test Case ID:** TS_SEL_069
- **Module:** ClinicalReports
- **Feature:** audit keyboard navigation for doctor search filter dropdown after five minutes of inactivity
- **Test Title:** Verify behavior of doctor search filter dropdown during attempts to audit keyboard navigation after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for doctor search filter dropdown after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-069
- **Preconditions:** System state is reset, and target console is directed to doctor search filter dropdown configuration after five minutes of inactivity (Ref SEL_069).
- **Test Steps:**
1. Target active interface for doctor search filter dropdown.
2. Trigger action to audit keyboard navigation after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_069).
- **Test Data:** Target: doctor search filter dropdown, Action: audit keyboard navigation, Parameters: after five minutes of inactivity, Case Index: SEL_069
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_069.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-069
- **Execution Time:** 0.840s
- **Evidence:** evidence/TS_SEL_069_success.png

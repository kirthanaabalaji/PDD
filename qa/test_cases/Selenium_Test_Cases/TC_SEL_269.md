# Test Case: TC_SEL_269

- **Test Case ID:** TC_SEL_269
- **Module:** ClinicalReports
- **Feature:** check storage updates for doctor search filter dropdown using cross-site scripting strings
- **Test Title:** Verify behavior of doctor search filter dropdown during attempts to check storage updates using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute check storage updates for doctor search filter dropdown using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-269
- **Preconditions:** System state is reset, and target console is directed to doctor search filter dropdown configuration using cross-site scripting strings (Ref SEL_269).
- **Test Steps:**
1. Target active interface for doctor search filter dropdown.
2. Trigger action to check storage updates using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_269).
- **Test Data:** Target: doctor search filter dropdown, Action: check storage updates, Parameters: using cross-site scripting strings, Case Index: SEL_269
- **Expected Result:** The verification checks confirm that the input is sanitized and saved successfully under reference SEL_269.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-269
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_269_success.png

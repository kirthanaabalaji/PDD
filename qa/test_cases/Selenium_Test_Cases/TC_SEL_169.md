# Test Case: TC_SEL_169

- **Test Case ID:** TC_SEL_169
- **Module:** ClinicalReports
- **Feature:** track cookie changes for doctor search filter dropdown when database sync is delayed
- **Test Title:** Verify behavior of doctor search filter dropdown during attempts to track cookie changes when database sync is delayed
- **Objective:** Evaluate that user can safely execute track cookie changes for doctor search filter dropdown when database sync is delayed under system checks.
- **Requirement ID:** REQ-SEL-169
- **Preconditions:** System state is reset, and target console is directed to doctor search filter dropdown configuration when database sync is delayed (Ref SEL_169).
- **Test Steps:**
1. Target active interface for doctor search filter dropdown.
2. Trigger action to track cookie changes when database sync is delayed.
3. Collect audit logs and confirm status code validation (Check SEL_169).
- **Test Data:** Target: doctor search filter dropdown, Action: track cookie changes, Parameters: when database sync is delayed, Case Index: SEL_169
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_169.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-169
- **Execution Time:** 0.840s
- **Evidence:** evidence/TC_SEL_169_success.png

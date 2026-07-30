# Test Case: TS_SEL_170

- **Test Case ID:** TS_SEL_170
- **Module:** ClinicalReports
- **Feature:** verify network callback for pulmonologist appointment booking slot selection with custom theme configurations
- **Test Title:** Verify behavior of pulmonologist appointment booking slot selection during attempts to verify network callback with custom theme configurations
- **Objective:** Evaluate that user can safely execute verify network callback for pulmonologist appointment booking slot selection with custom theme configurations under system checks.
- **Requirement ID:** REQ-SEL-170
- **Preconditions:** System state is reset, and target console is directed to pulmonologist appointment booking slot selection configuration with custom theme configurations (Ref SEL_170).
- **Test Steps:**
1. Target active interface for pulmonologist appointment booking slot selection.
2. Trigger action to verify network callback with custom theme configurations.
3. Collect audit logs and confirm status code validation (Check SEL_170).
- **Test Data:** Target: pulmonologist appointment booking slot selection, Action: verify network callback, Parameters: with custom theme configurations, Case Index: SEL_170
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_170.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-170
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_170_success.png

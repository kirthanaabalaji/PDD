# Test Case: TS_SEL_014

- **Test Case ID:** TS_SEL_014
- **Module:** SymptomTracking
- **Feature:** ensure contrast ratios for dosage calculator slider controls with multiple simultaneous submits
- **Test Title:** Verify behavior of dosage calculator slider controls during attempts to ensure contrast ratios with multiple simultaneous submits
- **Objective:** Evaluate that user can safely execute ensure contrast ratios for dosage calculator slider controls with multiple simultaneous submits under system checks.
- **Requirement ID:** REQ-SEL-014
- **Preconditions:** System state is reset, and target console is directed to dosage calculator slider controls configuration with multiple simultaneous submits (Ref SEL_014).
- **Test Steps:**
1. Target active interface for dosage calculator slider controls.
2. Trigger action to ensure contrast ratios with multiple simultaneous submits.
3. Collect audit logs and confirm status code validation (Check SEL_014).
- **Test Data:** Target: dosage calculator slider controls, Action: ensure contrast ratios, Parameters: with multiple simultaneous submits, Case Index: SEL_014
- **Expected Result:** The verification checks confirm that the input is sanitized and saved successfully under reference SEL_014.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-014
- **Execution Time:** 0.440s
- **Evidence:** evidence/TS_SEL_014_success.png

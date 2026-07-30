# Test Case: TS_SEL_164

- **Test Case ID:** TS_SEL_164
- **Module:** SymptomTracking
- **Feature:** check storage updates for dosage calculator slider controls after five minutes of inactivity
- **Test Title:** Verify behavior of dosage calculator slider controls during attempts to check storage updates after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute check storage updates for dosage calculator slider controls after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-164
- **Preconditions:** System state is reset, and target console is directed to dosage calculator slider controls configuration after five minutes of inactivity (Ref SEL_164).
- **Test Steps:**
1. Target active interface for dosage calculator slider controls.
2. Trigger action to check storage updates after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_164).
- **Test Data:** Target: dosage calculator slider controls, Action: check storage updates, Parameters: after five minutes of inactivity, Case Index: SEL_164
- **Expected Result:** The verification checks confirm that the layout reflows without overlapping successfully under reference SEL_164.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-164
- **Execution Time:** 0.440s
- **Evidence:** evidence/TS_SEL_164_success.png

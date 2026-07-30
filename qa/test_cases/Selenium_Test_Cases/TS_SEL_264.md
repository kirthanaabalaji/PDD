# Test Case: TS_SEL_264

- **Test Case ID:** TS_SEL_264
- **Module:** SymptomTracking
- **Feature:** inspect modal overlays for dosage calculator slider controls when database sync is delayed
- **Test Title:** Verify behavior of dosage calculator slider controls during attempts to inspect modal overlays when database sync is delayed
- **Objective:** Evaluate that user can safely execute inspect modal overlays for dosage calculator slider controls when database sync is delayed under system checks.
- **Requirement ID:** REQ-SEL-264
- **Preconditions:** System state is reset, and target console is directed to dosage calculator slider controls configuration when database sync is delayed (Ref SEL_264).
- **Test Steps:**
1. Target active interface for dosage calculator slider controls.
2. Trigger action to inspect modal overlays when database sync is delayed.
3. Collect audit logs and confirm status code validation (Check SEL_264).
- **Test Data:** Target: dosage calculator slider controls, Action: inspect modal overlays, Parameters: when database sync is delayed, Case Index: SEL_264
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_264.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-264
- **Execution Time:** 0.440s
- **Evidence:** evidence/TS_SEL_264_success.png

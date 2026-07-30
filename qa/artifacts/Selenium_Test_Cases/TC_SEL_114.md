# Test Case: TC_SEL_114

- **Test Case ID:** TC_SEL_114
- **Module:** SymptomTracking
- **Feature:** log telemetry events for dosage calculator slider controls with empty values
- **Test Title:** Verify behavior of dosage calculator slider controls during attempts to log telemetry events with empty values
- **Objective:** Evaluate that user can safely execute log telemetry events for dosage calculator slider controls with empty values under system checks.
- **Requirement ID:** REQ-SEL-114
- **Preconditions:** System state is reset, and target console is directed to dosage calculator slider controls configuration with empty values (Ref SEL_114).
- **Test Steps:**
1. Target active interface for dosage calculator slider controls.
2. Trigger action to log telemetry events with empty values.
3. Collect audit logs and confirm status code validation (Check SEL_114).
- **Test Data:** Target: dosage calculator slider controls, Action: log telemetry events, Parameters: with empty values, Case Index: SEL_114
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_114.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-114
- **Execution Time:** 0.440s
- **Evidence:** evidence/TC_SEL_114_success.png

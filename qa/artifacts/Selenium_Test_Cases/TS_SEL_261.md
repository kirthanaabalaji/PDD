# Test Case: TS_SEL_261

- **Test Case ID:** TS_SEL_261
- **Module:** SymptomTracking
- **Feature:** log telemetry events for symptom history calendar grid view with multiple simultaneous submits
- **Test Title:** Verify behavior of symptom history calendar grid view during attempts to log telemetry events with multiple simultaneous submits
- **Objective:** Evaluate that user can safely execute log telemetry events for symptom history calendar grid view with multiple simultaneous submits under system checks.
- **Requirement ID:** REQ-SEL-261
- **Preconditions:** System state is reset, and target console is directed to symptom history calendar grid view configuration with multiple simultaneous submits (Ref SEL_261).
- **Test Steps:**
1. Target active interface for symptom history calendar grid view.
2. Trigger action to log telemetry events with multiple simultaneous submits.
3. Collect audit logs and confirm status code validation (Check SEL_261).
- **Test Data:** Target: symptom history calendar grid view, Action: log telemetry events, Parameters: with multiple simultaneous submits, Case Index: SEL_261
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_261.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-261
- **Execution Time:** 0.200s
- **Evidence:** evidence/TS_SEL_261_success.png

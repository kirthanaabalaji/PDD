# Test Case: TS_SEL_198

- **Test Case ID:** TS_SEL_198
- **Module:** Settings
- **Feature:** log telemetry events for questionnaire submit assessment confirmation on high resolution displays
- **Test Title:** Verify behavior of questionnaire submit assessment confirmation during attempts to log telemetry events on high resolution displays
- **Objective:** Evaluate that user can safely execute log telemetry events for questionnaire submit assessment confirmation on high resolution displays under system checks.
- **Requirement ID:** REQ-SEL-198
- **Preconditions:** System state is reset, and target console is directed to questionnaire submit assessment confirmation configuration on high resolution displays (Ref SEL_198).
- **Test Steps:**
1. Target active interface for questionnaire submit assessment confirmation.
2. Trigger action to log telemetry events on high resolution displays.
3. Collect audit logs and confirm status code validation (Check SEL_198).
- **Test Data:** Target: questionnaire submit assessment confirmation, Action: log telemetry events, Parameters: on high resolution displays, Case Index: SEL_198
- **Expected Result:** The verification checks confirm that the layout reflows without overlapping successfully under reference SEL_198.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-198
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_198_success.png

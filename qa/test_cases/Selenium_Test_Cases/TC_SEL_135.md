# Test Case: TC_SEL_135

- **Test Case ID:** TC_SEL_135
- **Module:** Settings
- **Feature:** log telemetry events for terms of service scroll validation for assistive screen readers
- **Test Title:** Verify behavior of terms of service scroll validation during attempts to log telemetry events for assistive screen readers
- **Objective:** Evaluate that user can safely execute log telemetry events for terms of service scroll validation for assistive screen readers under system checks.
- **Requirement ID:** REQ-SEL-135
- **Preconditions:** System state is reset, and target console is directed to terms of service scroll validation configuration for assistive screen readers (Ref SEL_135).
- **Test Steps:**
1. Target active interface for terms of service scroll validation.
2. Trigger action to log telemetry events for assistive screen readers.
3. Collect audit logs and confirm status code validation (Check SEL_135).
- **Test Data:** Target: terms of service scroll validation, Action: log telemetry events, Parameters: for assistive screen readers, Case Index: SEL_135
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_135.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-135
- **Execution Time:** 0.520s
- **Evidence:** evidence/TC_SEL_135_success.png

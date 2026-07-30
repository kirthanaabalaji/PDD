# Test Case: TC_SEL_084

- **Test Case ID:** TC_SEL_084
- **Module:** Settings
- **Feature:** validate fields for accessibility keyboard focus indicators on high resolution displays
- **Test Title:** Verify behavior of accessibility keyboard focus indicators during attempts to validate fields on high resolution displays
- **Objective:** Evaluate that user can safely execute validate fields for accessibility keyboard focus indicators on high resolution displays under system checks.
- **Requirement ID:** REQ-SEL-084
- **Preconditions:** System state is reset, and target console is directed to accessibility keyboard focus indicators configuration on high resolution displays (Ref SEL_084).
- **Test Steps:**
1. Target active interface for accessibility keyboard focus indicators.
2. Trigger action to validate fields on high resolution displays.
3. Collect audit logs and confirm status code validation (Check SEL_084).
- **Test Data:** Target: accessibility keyboard focus indicators, Action: validate fields, Parameters: on high resolution displays, Case Index: SEL_084
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_084.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-084
- **Execution Time:** 0.440s
- **Evidence:** evidence/TC_SEL_084_success.png

# Test Case: TS_SEL_184

- **Test Case ID:** TS_SEL_184
- **Module:** Settings
- **Feature:** reset options for accessibility keyboard focus indicators using invalid credentials
- **Test Title:** Verify behavior of accessibility keyboard focus indicators during attempts to reset options using invalid credentials
- **Objective:** Evaluate that user can safely execute reset options for accessibility keyboard focus indicators using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-184
- **Preconditions:** System state is reset, and target console is directed to accessibility keyboard focus indicators configuration using invalid credentials (Ref SEL_184).
- **Test Steps:**
1. Target active interface for accessibility keyboard focus indicators.
2. Trigger action to reset options using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_184).
- **Test Data:** Target: accessibility keyboard focus indicators, Action: reset options, Parameters: using invalid credentials, Case Index: SEL_184
- **Expected Result:** The verification checks confirm that the input is sanitized and saved successfully under reference SEL_184.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-184
- **Execution Time:** 0.440s
- **Evidence:** evidence/TS_SEL_184_success.png

# Test Case: TS_SEL_273

- **Test Case ID:** TS_SEL_273
- **Module:** Settings
- **Feature:** validate fields for notification preferences toggles when network speed is throttled
- **Test Title:** Verify behavior of notification preferences toggles during attempts to validate fields when network speed is throttled
- **Objective:** Evaluate that user can safely execute validate fields for notification preferences toggles when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-273
- **Preconditions:** System state is reset, and target console is directed to notification preferences toggles configuration when network speed is throttled (Ref SEL_273).
- **Test Steps:**
1. Target active interface for notification preferences toggles.
2. Trigger action to validate fields when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_273).
- **Test Data:** Target: notification preferences toggles, Action: validate fields, Parameters: when network speed is throttled, Case Index: SEL_273
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_273.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-273
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_273_success.png

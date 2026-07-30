# Test Case: TS_SEL_072

- **Test Case ID:** TS_SEL_072
- **Module:** AIChat
- **Feature:** log telemetry events for ai chat message input box when cookies are blocked
- **Test Title:** Verify behavior of ai chat message input box during attempts to log telemetry events when cookies are blocked
- **Objective:** Evaluate that user can safely execute log telemetry events for ai chat message input box when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-072
- **Preconditions:** System state is reset, and target console is directed to ai chat message input box configuration when cookies are blocked (Ref SEL_072).
- **Test Steps:**
1. Target active interface for ai chat message input box.
2. Trigger action to log telemetry events when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_072).
- **Test Data:** Target: ai chat message input box, Action: log telemetry events, Parameters: when cookies are blocked, Case Index: SEL_072
- **Expected Result:** The verification checks confirm that the toast error alert is rendered successfully under reference SEL_072.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-072
- **Execution Time:** 0.280s
- **Evidence:** evidence/TS_SEL_072_success.png

# Test Case: TS_SEL_240

- **Test Case ID:** TS_SEL_240
- **Module:** Settings
- **Feature:** log telemetry events for local storage synchronization queue after five minutes of inactivity
- **Test Title:** Verify behavior of local storage synchronization queue during attempts to log telemetry events after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute log telemetry events for local storage synchronization queue after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-240
- **Preconditions:** System state is reset, and target console is directed to local storage synchronization queue configuration after five minutes of inactivity (Ref SEL_240).
- **Test Steps:**
1. Target active interface for local storage synchronization queue.
2. Trigger action to log telemetry events after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_240).
- **Test Data:** Target: local storage synchronization queue, Action: log telemetry events, Parameters: after five minutes of inactivity, Case Index: SEL_240
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_240.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-240
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_240_success.png

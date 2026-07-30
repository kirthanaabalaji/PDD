# Test Case: TC_SEL_290

- **Test Case ID:** TC_SEL_290
- **Module:** Settings
- **Feature:** check storage updates for local storage synchronization queue during server database failover
- **Test Title:** Verify behavior of local storage synchronization queue during attempts to check storage updates during server database failover
- **Objective:** Evaluate that user can safely execute check storage updates for local storage synchronization queue during server database failover under system checks.
- **Requirement ID:** REQ-SEL-290
- **Preconditions:** System state is reset, and target console is directed to local storage synchronization queue configuration during server database failover (Ref SEL_290).
- **Test Steps:**
1. Target active interface for local storage synchronization queue.
2. Trigger action to check storage updates during server database failover.
3. Collect audit logs and confirm status code validation (Check SEL_290).
- **Test Data:** Target: local storage synchronization queue, Action: check storage updates, Parameters: during server database failover, Case Index: SEL_290
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_290.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-290
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_290_success.png

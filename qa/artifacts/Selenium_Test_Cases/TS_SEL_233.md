# Test Case: TS_SEL_233

- **Test Case ID:** TS_SEL_233
- **Module:** Dashboard
- **Feature:** verify network callback for dashboard widget grid layout during server database failover
- **Test Title:** Verify behavior of dashboard widget grid layout during attempts to verify network callback during server database failover
- **Objective:** Evaluate that user can safely execute verify network callback for dashboard widget grid layout during server database failover under system checks.
- **Requirement ID:** REQ-SEL-233
- **Preconditions:** System state is reset, and target console is directed to dashboard widget grid layout configuration during server database failover (Ref SEL_233).
- **Test Steps:**
1. Target active interface for dashboard widget grid layout.
2. Trigger action to verify network callback during server database failover.
3. Collect audit logs and confirm status code validation (Check SEL_233).
- **Test Data:** Target: dashboard widget grid layout, Action: verify network callback, Parameters: during server database failover, Case Index: SEL_233
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_233.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-233
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_233_success.png

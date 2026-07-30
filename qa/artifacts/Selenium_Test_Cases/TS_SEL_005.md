# Test Case: TS_SEL_005

- **Test Case ID:** TS_SEL_005
- **Module:** Authentication
- **Feature:** measure execution time for browser history back navigation behavior during server database failover
- **Test Title:** Verify behavior of browser history back navigation behavior during attempts to measure execution time during server database failover
- **Objective:** Evaluate that user can safely execute measure execution time for browser history back navigation behavior during server database failover under system checks.
- **Requirement ID:** REQ-SEL-005
- **Preconditions:** System state is reset, and target console is directed to browser history back navigation behavior configuration during server database failover (Ref SEL_005).
- **Test Steps:**
1. Target active interface for browser history back navigation behavior.
2. Trigger action to measure execution time during server database failover.
3. Collect audit logs and confirm status code validation (Check SEL_005).
- **Test Data:** Target: browser history back navigation behavior, Action: measure execution time, Parameters: during server database failover, Case Index: SEL_005
- **Expected Result:** The verification checks confirm that the session redirects to login successfully under reference SEL_005.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-005
- **Execution Time:** 0.520s
- **Evidence:** evidence/TS_SEL_005_success.png

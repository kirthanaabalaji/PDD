# Test Case: TS_SEL_271

- **Test Case ID:** TS_SEL_271
- **Module:** Authentication
- **Feature:** inspect click handlers for logout redirect landing page during server database failover
- **Test Title:** Verify behavior of logout redirect landing page during attempts to inspect click handlers during server database failover
- **Objective:** Evaluate that user can safely execute inspect click handlers for logout redirect landing page during server database failover under system checks.
- **Requirement ID:** REQ-SEL-271
- **Preconditions:** System state is reset, and target console is directed to logout redirect landing page configuration during server database failover (Ref SEL_271).
- **Test Steps:**
1. Target active interface for logout redirect landing page.
2. Trigger action to inspect click handlers during server database failover.
3. Collect audit logs and confirm status code validation (Check SEL_271).
- **Test Data:** Target: logout redirect landing page, Action: inspect click handlers, Parameters: during server database failover, Case Index: SEL_271
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_271.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-271
- **Execution Time:** 0.200s
- **Evidence:** evidence/TS_SEL_271_success.png

# Test Case: TS_SEL_138

- **Test Case ID:** TS_SEL_138
- **Module:** Authentication
- **Feature:** inspect modal overlays for session token refresh process during server database failover
- **Test Title:** Verify behavior of session token refresh process during attempts to inspect modal overlays during server database failover
- **Objective:** Evaluate that user can safely execute inspect modal overlays for session token refresh process during server database failover under system checks.
- **Requirement ID:** REQ-SEL-138
- **Preconditions:** System state is reset, and target console is directed to session token refresh process configuration during server database failover (Ref SEL_138).
- **Test Steps:**
1. Target active interface for session token refresh process.
2. Trigger action to inspect modal overlays during server database failover.
3. Collect audit logs and confirm status code validation (Check SEL_138).
- **Test Data:** Target: session token refresh process, Action: inspect modal overlays, Parameters: during server database failover, Case Index: SEL_138
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_138.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-138
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_138_success.png

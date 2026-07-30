# Test Case: TS_SEL_137

- **Test Case ID:** TS_SEL_137
- **Module:** Settings
- **Feature:** check boundary limits for offline mode status warning banner on narrow mobile layout viewport
- **Test Title:** Verify behavior of offline mode status warning banner during attempts to check boundary limits on narrow mobile layout viewport
- **Objective:** Evaluate that user can safely execute check boundary limits for offline mode status warning banner on narrow mobile layout viewport under system checks.
- **Requirement ID:** REQ-SEL-137
- **Preconditions:** System state is reset, and target console is directed to offline mode status warning banner configuration on narrow mobile layout viewport (Ref SEL_137).
- **Test Steps:**
1. Target active interface for offline mode status warning banner.
2. Trigger action to check boundary limits on narrow mobile layout viewport.
3. Collect audit logs and confirm status code validation (Check SEL_137).
- **Test Data:** Target: offline mode status warning banner, Action: check boundary limits, Parameters: on narrow mobile layout viewport, Case Index: SEL_137
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_137.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-137
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_137_success.png

# Test Case: TS_SEL_187

- **Test Case ID:** TS_SEL_187
- **Module:** Settings
- **Feature:** inspect click handlers for offline mode status warning banner under local storage quota limits
- **Test Title:** Verify behavior of offline mode status warning banner during attempts to inspect click handlers under local storage quota limits
- **Objective:** Evaluate that user can safely execute inspect click handlers for offline mode status warning banner under local storage quota limits under system checks.
- **Requirement ID:** REQ-SEL-187
- **Preconditions:** System state is reset, and target console is directed to offline mode status warning banner configuration under local storage quota limits (Ref SEL_187).
- **Test Steps:**
1. Target active interface for offline mode status warning banner.
2. Trigger action to inspect click handlers under local storage quota limits.
3. Collect audit logs and confirm status code validation (Check SEL_187).
- **Test Data:** Target: offline mode status warning banner, Action: inspect click handlers, Parameters: under local storage quota limits, Case Index: SEL_187
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_187.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-187
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_187_success.png

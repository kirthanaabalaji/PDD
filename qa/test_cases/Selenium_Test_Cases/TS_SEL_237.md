# Test Case: TS_SEL_237

- **Test Case ID:** TS_SEL_237
- **Module:** Settings
- **Feature:** audit keyboard navigation for offline mode status warning banner during api gateway timeout
- **Test Title:** Verify behavior of offline mode status warning banner during attempts to audit keyboard navigation during api gateway timeout
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for offline mode status warning banner during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-237
- **Preconditions:** System state is reset, and target console is directed to offline mode status warning banner configuration during api gateway timeout (Ref SEL_237).
- **Test Steps:**
1. Target active interface for offline mode status warning banner.
2. Trigger action to audit keyboard navigation during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_237).
- **Test Data:** Target: offline mode status warning banner, Action: audit keyboard navigation, Parameters: during api gateway timeout, Case Index: SEL_237
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_237.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-237
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_237_success.png

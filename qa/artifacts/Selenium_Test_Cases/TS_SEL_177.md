# Test Case: TS_SEL_177

- **Test Case ID:** TS_SEL_177
- **Module:** Onboarding
- **Feature:** log telemetry events for profile picture upload modal when file size exceeds limit
- **Test Title:** Verify behavior of profile picture upload modal during attempts to log telemetry events when file size exceeds limit
- **Objective:** Evaluate that user can safely execute log telemetry events for profile picture upload modal when file size exceeds limit under system checks.
- **Requirement ID:** REQ-SEL-177
- **Preconditions:** System state is reset, and target console is directed to profile picture upload modal configuration when file size exceeds limit (Ref SEL_177).
- **Test Steps:**
1. Target active interface for profile picture upload modal.
2. Trigger action to log telemetry events when file size exceeds limit.
3. Collect audit logs and confirm status code validation (Check SEL_177).
- **Test Data:** Target: profile picture upload modal, Action: log telemetry events, Parameters: when file size exceeds limit, Case Index: SEL_177
- **Expected Result:** The verification checks confirm that the download begins automatically successfully under reference SEL_177.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-177
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_177_success.png

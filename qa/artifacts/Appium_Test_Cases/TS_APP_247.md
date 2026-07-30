# Test Case: TS_APP_247

- **Test Case ID:** TS_APP_247
- **Module:** ClinicalReports
- **Feature:** trigger orientation switch for pinch-to-zoom chart viewer when user denies camera permission
- **Test Title:** Verify behavior of pinch-to-zoom chart viewer during attempts to trigger orientation switch when user denies camera permission
- **Objective:** Evaluate that user can safely execute trigger orientation switch for pinch-to-zoom chart viewer when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-247
- **Preconditions:** System state is reset, and target console is directed to pinch-to-zoom chart viewer configuration when user denies camera permission (Ref APP_247).
- **Test Steps:**
1. Target active interface for pinch-to-zoom chart viewer.
2. Trigger action to trigger orientation switch when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_247).
- **Test Data:** Target: pinch-to-zoom chart viewer, Action: trigger orientation switch, Parameters: when user denies camera permission, Case Index: APP_247
- **Expected Result:** The verification checks confirm that the audio recording starts successfully successfully under reference APP_247.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-247
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_247_success.png

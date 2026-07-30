# Test Case: TS_APP_097

- **Test Case ID:** TS_APP_097
- **Module:** ClinicalReports
- **Feature:** inspect element boundaries for pinch-to-zoom chart viewer during package upgrade install
- **Test Title:** Verify behavior of pinch-to-zoom chart viewer during attempts to inspect element boundaries during package upgrade install
- **Objective:** Evaluate that user can safely execute inspect element boundaries for pinch-to-zoom chart viewer during package upgrade install under system checks.
- **Requirement ID:** REQ-APP-097
- **Preconditions:** System state is reset, and target console is directed to pinch-to-zoom chart viewer configuration during package upgrade install (Ref APP_097).
- **Test Steps:**
1. Target active interface for pinch-to-zoom chart viewer.
2. Trigger action to inspect element boundaries during package upgrade install.
3. Collect audit logs and confirm status code validation (Check APP_097).
- **Test Data:** Target: pinch-to-zoom chart viewer, Action: inspect element boundaries, Parameters: during package upgrade install, Case Index: APP_097
- **Expected Result:** The verification checks confirm that the user is navigated to dashboard successfully under reference APP_097.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-APP-097
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_097_success.png

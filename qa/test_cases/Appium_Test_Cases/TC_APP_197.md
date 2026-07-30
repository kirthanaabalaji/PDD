# Test Case: TC_APP_197

- **Test Case ID:** TC_APP_197
- **Module:** ClinicalReports
- **Feature:** process voice capture for pinch-to-zoom chart viewer when background execution is suspended
- **Test Title:** Verify behavior of pinch-to-zoom chart viewer during attempts to process voice capture when background execution is suspended
- **Objective:** Evaluate that user can safely execute process voice capture for pinch-to-zoom chart viewer when background execution is suspended under system checks.
- **Requirement ID:** REQ-APP-197
- **Preconditions:** System state is reset, and target console is directed to pinch-to-zoom chart viewer configuration when background execution is suspended (Ref APP_197).
- **Test Steps:**
1. Target active interface for pinch-to-zoom chart viewer.
2. Trigger action to process voice capture when background execution is suspended.
3. Collect audit logs and confirm status code validation (Check APP_197).
- **Test Data:** Target: pinch-to-zoom chart viewer, Action: process voice capture, Parameters: when background execution is suspended, Case Index: APP_197
- **Expected Result:** The verification checks confirm that the process executes in background thread successfully under reference APP_197.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-197
- **Execution Time:** 2.00s
- **Evidence:** evidence/TC_APP_197_success.png

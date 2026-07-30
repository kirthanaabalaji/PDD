# Test Case: TS_APP_147

- **Test Case ID:** TS_APP_147
- **Module:** ClinicalReports
- **Feature:** verify permission dialogue for pinch-to-zoom chart viewer with screen readers enabled
- **Test Title:** Verify behavior of pinch-to-zoom chart viewer during attempts to verify permission dialogue with screen readers enabled
- **Objective:** Evaluate that user can safely execute verify permission dialogue for pinch-to-zoom chart viewer with screen readers enabled under system checks.
- **Requirement ID:** REQ-APP-147
- **Preconditions:** System state is reset, and target console is directed to pinch-to-zoom chart viewer configuration with screen readers enabled (Ref APP_147).
- **Test Steps:**
1. Target active interface for pinch-to-zoom chart viewer.
2. Trigger action to verify permission dialogue with screen readers enabled.
3. Collect audit logs and confirm status code validation (Check APP_147).
- **Test Data:** Target: pinch-to-zoom chart viewer, Action: verify permission dialogue, Parameters: with screen readers enabled, Case Index: APP_147
- **Expected Result:** The verification checks confirm that the item is scrolled into focus successfully under reference APP_147.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-147
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_147_success.png

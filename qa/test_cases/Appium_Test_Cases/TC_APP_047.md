# Test Case: TC_APP_047

- **Test Case ID:** TC_APP_047
- **Module:** ClinicalReports
- **Feature:** audit gesture scaling zoom for pinch-to-zoom chart viewer when database storage quota is exceeded
- **Test Title:** Verify behavior of pinch-to-zoom chart viewer during attempts to audit gesture scaling zoom when database storage quota is exceeded
- **Objective:** Evaluate that user can safely execute audit gesture scaling zoom for pinch-to-zoom chart viewer when database storage quota is exceeded under system checks.
- **Requirement ID:** REQ-APP-047
- **Preconditions:** System state is reset, and target console is directed to pinch-to-zoom chart viewer configuration when database storage quota is exceeded (Ref APP_047).
- **Test Steps:**
1. Target active interface for pinch-to-zoom chart viewer.
2. Trigger action to audit gesture scaling zoom when database storage quota is exceeded.
3. Collect audit logs and confirm status code validation (Check APP_047).
- **Test Data:** Target: pinch-to-zoom chart viewer, Action: audit gesture scaling zoom, Parameters: when database storage quota is exceeded, Case Index: APP_047
- **Expected Result:** The verification checks confirm that the database commits transaction successfully under reference APP_047.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-047
- **Execution Time:** 2.00s
- **Evidence:** evidence/TC_APP_047_success.png

# Test Case: TS_APP_274

- **Test Case ID:** TS_APP_274
- **Module:** OfflineMode
- **Feature:** audit touch target scale for sync queue network background check when offline network state is active
- **Test Title:** Verify behavior of sync queue network background check during attempts to audit touch target scale when offline network state is active
- **Objective:** Evaluate that user can safely execute audit touch target scale for sync queue network background check when offline network state is active under system checks.
- **Requirement ID:** REQ-APP-274
- **Preconditions:** System state is reset, and target console is directed to sync queue network background check configuration when offline network state is active (Ref APP_274).
- **Test Steps:**
1. Target active interface for sync queue network background check.
2. Trigger action to audit touch target scale when offline network state is active.
3. Collect audit logs and confirm status code validation (Check APP_274).
- **Test Data:** Target: sync queue network background check, Action: audit touch target scale, Parameters: when offline network state is active, Case Index: APP_274
- **Expected Result:** The verification checks confirm that the toast notification is displayed successfully under reference APP_274.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-274
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_274_success.png

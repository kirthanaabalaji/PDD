# Test Case: TC_APP_142

- **Test Case ID:** TC_APP_142
- **Module:** Settings
- **Feature:** trigger orientation switch for app crash recovery state when database storage quota is exceeded
- **Test Title:** Verify behavior of app crash recovery state during attempts to trigger orientation switch when database storage quota is exceeded
- **Objective:** Evaluate that user can safely execute trigger orientation switch for app crash recovery state when database storage quota is exceeded under system checks.
- **Requirement ID:** REQ-APP-142
- **Preconditions:** System state is reset, and target console is directed to app crash recovery state configuration when database storage quota is exceeded (Ref APP_142).
- **Test Steps:**
1. Target active interface for app crash recovery state.
2. Trigger action to trigger orientation switch when database storage quota is exceeded.
3. Collect audit logs and confirm status code validation (Check APP_142).
- **Test Data:** Target: app crash recovery state, Action: trigger orientation switch, Parameters: when database storage quota is exceeded, Case Index: APP_142
- **Expected Result:** The verification checks confirm that the cached logs are parsed correctly successfully under reference APP_142.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-142
- **Execution Time:** 2.00s
- **Evidence:** evidence/TC_APP_142_success.png

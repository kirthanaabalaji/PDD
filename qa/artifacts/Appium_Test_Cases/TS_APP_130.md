# Test Case: TS_APP_130

- **Test Case ID:** TS_APP_130
- **Module:** Settings
- **Feature:** verify image dimensions for dark mode system theme config during background audio sync
- **Test Title:** Verify behavior of dark mode system theme config during attempts to verify image dimensions during background audio sync
- **Objective:** Evaluate that user can safely execute verify image dimensions for dark mode system theme config during background audio sync under system checks.
- **Requirement ID:** REQ-APP-130
- **Preconditions:** System state is reset, and target console is directed to dark mode system theme config configuration during background audio sync (Ref APP_130).
- **Test Steps:**
1. Target active interface for dark mode system theme config.
2. Trigger action to verify image dimensions during background audio sync.
3. Collect audit logs and confirm status code validation (Check APP_130).
- **Test Data:** Target: dark mode system theme config, Action: verify image dimensions, Parameters: during background audio sync, Case Index: APP_130
- **Expected Result:** The verification checks confirm that the item is scrolled into focus successfully under reference APP_130.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-130
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_130_success.png

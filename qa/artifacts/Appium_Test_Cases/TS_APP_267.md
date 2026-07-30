# Test Case: TS_APP_267

- **Test Case ID:** TS_APP_267
- **Module:** Settings
- **Feature:** evaluate resource lock duration for app upgrade package validator during database compaction sync
- **Test Title:** Verify behavior of app upgrade package validator during attempts to evaluate resource lock duration during database compaction sync
- **Objective:** Evaluate that user can safely execute evaluate resource lock duration for app upgrade package validator during database compaction sync under system checks.
- **Requirement ID:** REQ-APP-267
- **Preconditions:** System state is reset, and target console is directed to app upgrade package validator configuration during database compaction sync (Ref APP_267).
- **Test Steps:**
1. Target active interface for app upgrade package validator.
2. Trigger action to evaluate resource lock duration during database compaction sync.
3. Collect audit logs and confirm status code validation (Check APP_267).
- **Test Data:** Target: app upgrade package validator, Action: evaluate resource lock duration, Parameters: during database compaction sync, Case Index: APP_267
- **Expected Result:** The verification checks confirm that the user is navigated to dashboard successfully under reference APP_267.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-267
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_267_success.png

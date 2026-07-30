# Test Case: TS_APP_057

- **Test Case ID:** TS_APP_057
- **Module:** Onboarding
- **Feature:** evaluate resource lock duration for storage permission alert dialog when user denies camera permission
- **Test Title:** Verify behavior of storage permission alert dialog during attempts to evaluate resource lock duration when user denies camera permission
- **Objective:** Evaluate that user can safely execute evaluate resource lock duration for storage permission alert dialog when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-057
- **Preconditions:** System state is reset, and target console is directed to storage permission alert dialog configuration when user denies camera permission (Ref APP_057).
- **Test Steps:**
1. Target active interface for storage permission alert dialog.
2. Trigger action to evaluate resource lock duration when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_057).
- **Test Data:** Target: storage permission alert dialog, Action: evaluate resource lock duration, Parameters: when user denies camera permission, Case Index: APP_057
- **Expected Result:** The verification checks confirm that the cached logs are parsed correctly successfully under reference APP_057.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-APP-057
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_057_success.png

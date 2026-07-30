# Test Case: TS_APP_225

- **Test Case ID:** TS_APP_225
- **Module:** Settings
- **Feature:** evaluate resource lock duration for doctor call emergency button during background audio sync
- **Test Title:** Verify behavior of doctor call emergency button during attempts to evaluate resource lock duration during background audio sync
- **Objective:** Evaluate that user can safely execute evaluate resource lock duration for doctor call emergency button during background audio sync under system checks.
- **Requirement ID:** REQ-APP-225
- **Preconditions:** System state is reset, and target console is directed to doctor call emergency button configuration during background audio sync (Ref APP_225).
- **Test Steps:**
1. Target active interface for doctor call emergency button.
2. Trigger action to evaluate resource lock duration during background audio sync.
3. Collect audit logs and confirm status code validation (Check APP_225).
- **Test Data:** Target: doctor call emergency button, Action: evaluate resource lock duration, Parameters: during background audio sync, Case Index: APP_225
- **Expected Result:** The verification checks confirm that the touch targets resize to accessible scale successfully under reference APP_225.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-APP-225
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_225_success.png

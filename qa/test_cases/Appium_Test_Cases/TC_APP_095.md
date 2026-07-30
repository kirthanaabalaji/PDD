# Test Case: TC_APP_095

- **Test Case ID:** TC_APP_095
- **Module:** AIChat
- **Feature:** verify native toast layout for voice input speech recognition when user denies camera permission
- **Test Title:** Verify behavior of voice input speech recognition during attempts to verify native toast layout when user denies camera permission
- **Objective:** Evaluate that user can safely execute verify native toast layout for voice input speech recognition when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-095
- **Preconditions:** System state is reset, and target console is directed to voice input speech recognition configuration when user denies camera permission (Ref APP_095).
- **Test Steps:**
1. Target active interface for voice input speech recognition.
2. Trigger action to verify native toast layout when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_095).
- **Test Data:** Target: voice input speech recognition, Action: verify native toast layout, Parameters: when user denies camera permission, Case Index: APP_095
- **Expected Result:** The verification checks confirm that the process executes in background thread successfully under reference APP_095.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-095
- **Execution Time:** 1.50s
- **Evidence:** evidence/TC_APP_095_success.png

# Test Case: TC_APP_195

- **Test Case ID:** TC_APP_195
- **Module:** AIChat
- **Feature:** monitor memory consumption for voice input speech recognition with multiple rapid click gestures
- **Test Title:** Verify behavior of voice input speech recognition during attempts to monitor memory consumption with multiple rapid click gestures
- **Objective:** Evaluate that user can safely execute monitor memory consumption for voice input speech recognition with multiple rapid click gestures under system checks.
- **Requirement ID:** REQ-APP-195
- **Preconditions:** System state is reset, and target console is directed to voice input speech recognition configuration with multiple rapid click gestures (Ref APP_195).
- **Test Steps:**
1. Target active interface for voice input speech recognition.
2. Trigger action to monitor memory consumption with multiple rapid click gestures.
3. Collect audit logs and confirm status code validation (Check APP_195).
- **Test Data:** Target: voice input speech recognition, Action: monitor memory consumption, Parameters: with multiple rapid click gestures, Case Index: APP_195
- **Expected Result:** The verification checks confirm that the network requests are queued for retry successfully under reference APP_195.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-195
- **Execution Time:** 1.50s
- **Evidence:** evidence/TC_APP_195_success.png

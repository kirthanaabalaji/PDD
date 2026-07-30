# Test Case: TS_APP_145

- **Test Case ID:** TS_APP_145
- **Module:** AIChat
- **Feature:** test swipe gesture handlers for voice input speech recognition when system notification service crashes
- **Test Title:** Verify behavior of voice input speech recognition during attempts to test swipe gesture handlers when system notification service crashes
- **Objective:** Evaluate that user can safely execute test swipe gesture handlers for voice input speech recognition when system notification service crashes under system checks.
- **Requirement ID:** REQ-APP-145
- **Preconditions:** System state is reset, and target console is directed to voice input speech recognition configuration when system notification service crashes (Ref APP_145).
- **Test Steps:**
1. Target active interface for voice input speech recognition.
2. Trigger action to test swipe gesture handlers when system notification service crashes.
3. Collect audit logs and confirm status code validation (Check APP_145).
- **Test Data:** Target: voice input speech recognition, Action: test swipe gesture handlers, Parameters: when system notification service crashes, Case Index: APP_145
- **Expected Result:** The verification checks confirm that the audio recording starts successfully successfully under reference APP_145.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-APP-145
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_145_success.png

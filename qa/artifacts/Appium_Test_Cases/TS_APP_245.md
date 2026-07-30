# Test Case: TS_APP_245

- **Test Case ID:** TS_APP_245
- **Module:** AIChat
- **Feature:** execute deep link request for voice input speech recognition when background storage is cleared
- **Test Title:** Verify behavior of voice input speech recognition during attempts to execute deep link request when background storage is cleared
- **Objective:** Evaluate that user can safely execute execute deep link request for voice input speech recognition when background storage is cleared under system checks.
- **Requirement ID:** REQ-APP-245
- **Preconditions:** System state is reset, and target console is directed to voice input speech recognition configuration when background storage is cleared (Ref APP_245).
- **Test Steps:**
1. Target active interface for voice input speech recognition.
2. Trigger action to execute deep link request when background storage is cleared.
3. Collect audit logs and confirm status code validation (Check APP_245).
- **Test Data:** Target: voice input speech recognition, Action: execute deep link request, Parameters: when background storage is cleared, Case Index: APP_245
- **Expected Result:** The verification checks confirm that the initialization starts within SLA successfully under reference APP_245.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-245
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_245_success.png

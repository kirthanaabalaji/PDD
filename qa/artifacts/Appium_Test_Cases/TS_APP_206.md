# Test Case: TS_APP_206

- **Test Case ID:** TS_APP_206
- **Module:** Authentication
- **Feature:** test push alert payload for biometric FaceID login during background audio sync
- **Test Title:** Verify behavior of biometric FaceID login during attempts to test push alert payload during background audio sync
- **Objective:** Evaluate that user can safely execute test push alert payload for biometric FaceID login during background audio sync under system checks.
- **Requirement ID:** REQ-APP-206
- **Preconditions:** System state is reset, and target console is directed to biometric FaceID login configuration during background audio sync (Ref APP_206).
- **Test Steps:**
1. Target active interface for biometric FaceID login.
2. Trigger action to test push alert payload during background audio sync.
3. Collect audit logs and confirm status code validation (Check APP_206).
- **Test Data:** Target: biometric FaceID login, Action: test push alert payload, Parameters: during background audio sync, Case Index: APP_206
- **Expected Result:** The verification checks confirm that the toast notification is displayed successfully under reference APP_206.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-206
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_206_success.png

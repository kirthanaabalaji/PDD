# Test Case: TS_APP_056

- **Test Case ID:** TS_APP_056
- **Module:** Authentication
- **Feature:** execute deep link request for biometric FaceID login after biometric authentication failure
- **Test Title:** Verify behavior of biometric FaceID login during attempts to execute deep link request after biometric authentication failure
- **Objective:** Evaluate that user can safely execute execute deep link request for biometric FaceID login after biometric authentication failure under system checks.
- **Requirement ID:** REQ-APP-056
- **Preconditions:** System state is reset, and target console is directed to biometric FaceID login configuration after biometric authentication failure (Ref APP_056).
- **Test Steps:**
1. Target active interface for biometric FaceID login.
2. Trigger action to execute deep link request after biometric authentication failure.
3. Collect audit logs and confirm status code validation (Check APP_056).
- **Test Data:** Target: biometric FaceID login, Action: execute deep link request, Parameters: after biometric authentication failure, Case Index: APP_056
- **Expected Result:** The verification checks confirm that the notification badge count increments successfully under reference APP_056.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-APP-056
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_056_success.png

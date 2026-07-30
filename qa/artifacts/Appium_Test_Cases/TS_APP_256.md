# Test Case: TS_APP_256

- **Test Case ID:** TS_APP_256
- **Module:** Authentication
- **Feature:** verify image dimensions for biometric FaceID login when database storage quota is exceeded
- **Test Title:** Verify behavior of biometric FaceID login during attempts to verify image dimensions when database storage quota is exceeded
- **Objective:** Evaluate that user can safely execute verify image dimensions for biometric FaceID login when database storage quota is exceeded under system checks.
- **Requirement ID:** REQ-APP-256
- **Preconditions:** System state is reset, and target console is directed to biometric FaceID login configuration when database storage quota is exceeded (Ref APP_256).
- **Test Steps:**
1. Target active interface for biometric FaceID login.
2. Trigger action to verify image dimensions when database storage quota is exceeded.
3. Collect audit logs and confirm status code validation (Check APP_256).
- **Test Data:** Target: biometric FaceID login, Action: verify image dimensions, Parameters: when database storage quota is exceeded, Case Index: APP_256
- **Expected Result:** The verification checks confirm that the layout switches to landscape mode successfully under reference APP_256.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-APP-256
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_256_success.png

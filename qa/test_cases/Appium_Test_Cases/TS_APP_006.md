# Test Case: TS_APP_006

- **Test Case ID:** TS_APP_006
- **Module:** Authentication
- **Feature:** monitor memory consumption for biometric FaceID login during deep link routing lookup
- **Test Title:** Verify behavior of biometric FaceID login during attempts to monitor memory consumption during deep link routing lookup
- **Objective:** Evaluate that user can safely execute monitor memory consumption for biometric FaceID login during deep link routing lookup under system checks.
- **Requirement ID:** REQ-APP-006
- **Preconditions:** System state is reset, and target console is directed to biometric FaceID login configuration during deep link routing lookup (Ref APP_006).
- **Test Steps:**
1. Target active interface for biometric FaceID login.
2. Trigger action to monitor memory consumption during deep link routing lookup.
3. Collect audit logs and confirm status code validation (Check APP_006).
- **Test Data:** Target: biometric FaceID login, Action: monitor memory consumption, Parameters: during deep link routing lookup, Case Index: APP_006
- **Expected Result:** The verification checks confirm that the cached logs are parsed correctly successfully under reference APP_006.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-006
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_006_success.png

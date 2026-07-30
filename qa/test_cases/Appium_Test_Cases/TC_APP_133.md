# Test Case: TC_APP_133

- **Test Case ID:** TC_APP_133
- **Module:** Settings
- **Feature:** test app launch sequence for deep link navigation schema when user denies camera permission
- **Test Title:** Verify behavior of deep link navigation schema during attempts to test app launch sequence when user denies camera permission
- **Objective:** Evaluate that user can safely execute test app launch sequence for deep link navigation schema when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-133
- **Preconditions:** System state is reset, and target console is directed to deep link navigation schema configuration when user denies camera permission (Ref APP_133).
- **Test Steps:**
1. Target active interface for deep link navigation schema.
2. Trigger action to test app launch sequence when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_133).
- **Test Data:** Target: deep link navigation schema, Action: test app launch sequence, Parameters: when user denies camera permission, Case Index: APP_133
- **Expected Result:** The verification checks confirm that the image crop boundaries are validated successfully under reference APP_133.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-APP-133
- **Execution Time:** 2.25s
- **Evidence:** evidence/TC_APP_133_success.png

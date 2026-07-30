# Test Case: TC_APP_106

- **Test Case ID:** TC_APP_106
- **Module:** Authentication
- **Feature:** audit touch target scale for biometric FaceID login under poor signal coverage
- **Test Title:** Verify behavior of biometric FaceID login during attempts to audit touch target scale under poor signal coverage
- **Objective:** Evaluate that user can safely execute audit touch target scale for biometric FaceID login under poor signal coverage under system checks.
- **Requirement ID:** REQ-APP-106
- **Preconditions:** System state is reset, and target console is directed to biometric FaceID login configuration under poor signal coverage (Ref APP_106).
- **Test Steps:**
1. Target active interface for biometric FaceID login.
2. Trigger action to audit touch target scale under poor signal coverage.
3. Collect audit logs and confirm status code validation (Check APP_106).
- **Test Data:** Target: biometric FaceID login, Action: audit touch target scale, Parameters: under poor signal coverage, Case Index: APP_106
- **Expected Result:** The verification checks confirm that the touch targets resize to accessible scale successfully under reference APP_106.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-106
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_106_success.png

# Test Case: TS_APP_285

- **Test Case ID:** TS_APP_285
- **Module:** Settings
- **Feature:** test local database fetch for emergency swipe validation gesture when user denies camera permission
- **Test Title:** Verify behavior of emergency swipe validation gesture during attempts to test local database fetch when user denies camera permission
- **Objective:** Evaluate that user can safely execute test local database fetch for emergency swipe validation gesture when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-285
- **Preconditions:** System state is reset, and target console is directed to emergency swipe validation gesture configuration when user denies camera permission (Ref APP_285).
- **Test Steps:**
1. Target active interface for emergency swipe validation gesture.
2. Trigger action to test local database fetch when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_285).
- **Test Data:** Target: emergency swipe validation gesture, Action: test local database fetch, Parameters: when user denies camera permission, Case Index: APP_285
- **Expected Result:** The verification checks confirm that the database commits transaction successfully under reference APP_285.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-APP-285
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_285_success.png

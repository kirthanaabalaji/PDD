# Test Case: TS_APP_067

- **Test Case ID:** TS_APP_067
- **Module:** Settings
- **Feature:** verify image dimensions for app upgrade package validator on device orientation rotate
- **Test Title:** Verify behavior of app upgrade package validator during attempts to verify image dimensions on device orientation rotate
- **Objective:** Evaluate that user can safely execute verify image dimensions for app upgrade package validator on device orientation rotate under system checks.
- **Requirement ID:** REQ-APP-067
- **Preconditions:** System state is reset, and target console is directed to app upgrade package validator configuration on device orientation rotate (Ref APP_067).
- **Test Steps:**
1. Target active interface for app upgrade package validator.
2. Trigger action to verify image dimensions on device orientation rotate.
3. Collect audit logs and confirm status code validation (Check APP_067).
- **Test Data:** Target: app upgrade package validator, Action: verify image dimensions, Parameters: on device orientation rotate, Case Index: APP_067
- **Expected Result:** The verification checks confirm that the resource lock is released cleanly successfully under reference APP_067.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-067
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_067_success.png

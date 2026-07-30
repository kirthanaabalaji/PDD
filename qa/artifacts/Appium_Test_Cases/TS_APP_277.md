# Test Case: TS_APP_277

- **Test Case ID:** TS_APP_277
- **Module:** Settings
- **Feature:** verify image dimensions for device orientation toggle under poor signal coverage
- **Test Title:** Verify behavior of device orientation toggle during attempts to verify image dimensions under poor signal coverage
- **Objective:** Evaluate that user can safely execute verify image dimensions for device orientation toggle under poor signal coverage under system checks.
- **Requirement ID:** REQ-APP-277
- **Preconditions:** System state is reset, and target console is directed to device orientation toggle configuration under poor signal coverage (Ref APP_277).
- **Test Steps:**
1. Target active interface for device orientation toggle.
2. Trigger action to verify image dimensions under poor signal coverage.
3. Collect audit logs and confirm status code validation (Check APP_277).
- **Test Data:** Target: device orientation toggle, Action: verify image dimensions, Parameters: under poor signal coverage, Case Index: APP_277
- **Expected Result:** The verification checks confirm that the notification badge count increments successfully under reference APP_277.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-APP-277
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_277_success.png

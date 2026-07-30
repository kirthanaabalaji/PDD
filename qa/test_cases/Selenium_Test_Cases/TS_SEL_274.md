# Test Case: TS_SEL_274

- **Test Case ID:** TS_SEL_274
- **Module:** Onboarding
- **Feature:** track cookie changes for profile information form fields on high resolution displays
- **Test Title:** Verify behavior of profile information form fields during attempts to track cookie changes on high resolution displays
- **Objective:** Evaluate that user can safely execute track cookie changes for profile information form fields on high resolution displays under system checks.
- **Requirement ID:** REQ-SEL-274
- **Preconditions:** System state is reset, and target console is directed to profile information form fields configuration on high resolution displays (Ref SEL_274).
- **Test Steps:**
1. Target active interface for profile information form fields.
2. Trigger action to track cookie changes on high resolution displays.
3. Collect audit logs and confirm status code validation (Check SEL_274).
- **Test Data:** Target: profile information form fields, Action: track cookie changes, Parameters: on high resolution displays, Case Index: SEL_274
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_274.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-274
- **Execution Time:** 0.440s
- **Evidence:** evidence/TS_SEL_274_success.png

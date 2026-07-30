# Test Case: TS_APP_025

- **Test Case ID:** TS_APP_025
- **Module:** Settings
- **Feature:** verify image dimensions for doctor call emergency button during deep link routing lookup
- **Test Title:** Verify behavior of doctor call emergency button during attempts to verify image dimensions during deep link routing lookup
- **Objective:** Evaluate that user can safely execute verify image dimensions for doctor call emergency button during deep link routing lookup under system checks.
- **Requirement ID:** REQ-APP-025
- **Preconditions:** System state is reset, and target console is directed to doctor call emergency button configuration during deep link routing lookup (Ref APP_025).
- **Test Steps:**
1. Target active interface for doctor call emergency button.
2. Trigger action to verify image dimensions during deep link routing lookup.
3. Collect audit logs and confirm status code validation (Check APP_025).
- **Test Data:** Target: doctor call emergency button, Action: verify image dimensions, Parameters: during deep link routing lookup, Case Index: APP_025
- **Expected Result:** The verification checks confirm that the network requests are queued for retry successfully under reference APP_025.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-APP-025
- **Execution Time:** 1.50s
- **Evidence:** evidence/TS_APP_025_success.png

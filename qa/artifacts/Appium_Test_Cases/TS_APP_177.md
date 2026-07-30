# Test Case: TS_APP_177

- **Test Case ID:** TS_APP_177
- **Module:** Settings
- **Feature:** verify cache database write for device orientation toggle during deep link routing lookup
- **Test Title:** Verify behavior of device orientation toggle during attempts to verify cache database write during deep link routing lookup
- **Objective:** Evaluate that user can safely execute verify cache database write for device orientation toggle during deep link routing lookup under system checks.
- **Requirement ID:** REQ-APP-177
- **Preconditions:** System state is reset, and target console is directed to device orientation toggle configuration during deep link routing lookup (Ref APP_177).
- **Test Steps:**
1. Target active interface for device orientation toggle.
2. Trigger action to verify cache database write during deep link routing lookup.
3. Collect audit logs and confirm status code validation (Check APP_177).
- **Test Data:** Target: device orientation toggle, Action: verify cache database write, Parameters: during deep link routing lookup, Case Index: APP_177
- **Expected Result:** The verification checks confirm that the initialization starts within SLA successfully under reference APP_177.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-APP-177
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_177_success.png

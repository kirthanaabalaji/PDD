# Test Case: TC_APP_196

- **Test Case ID:** TC_APP_196
- **Module:** Settings
- **Feature:** test app launch sequence for network latency indicator during deep link routing lookup
- **Test Title:** Verify behavior of network latency indicator during attempts to test app launch sequence during deep link routing lookup
- **Objective:** Evaluate that user can safely execute test app launch sequence for network latency indicator during deep link routing lookup under system checks.
- **Requirement ID:** REQ-APP-196
- **Preconditions:** System state is reset, and target console is directed to network latency indicator configuration during deep link routing lookup (Ref APP_196).
- **Test Steps:**
1. Target active interface for network latency indicator.
2. Trigger action to test app launch sequence during deep link routing lookup.
3. Collect audit logs and confirm status code validation (Check APP_196).
- **Test Data:** Target: network latency indicator, Action: test app launch sequence, Parameters: during deep link routing lookup, Case Index: APP_196
- **Expected Result:** The verification checks confirm that the audio recording starts successfully successfully under reference APP_196.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-APP-196
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_196_success.png

# Test Case: TS_APP_246

- **Test Case ID:** TS_APP_246
- **Module:** Settings
- **Feature:** evaluate resource lock duration for network latency indicator after biometric authentication failure
- **Test Title:** Verify behavior of network latency indicator during attempts to evaluate resource lock duration after biometric authentication failure
- **Objective:** Evaluate that user can safely execute evaluate resource lock duration for network latency indicator after biometric authentication failure under system checks.
- **Requirement ID:** REQ-APP-246
- **Preconditions:** System state is reset, and target console is directed to network latency indicator configuration after biometric authentication failure (Ref APP_246).
- **Test Steps:**
1. Target active interface for network latency indicator.
2. Trigger action to evaluate resource lock duration after biometric authentication failure.
3. Collect audit logs and confirm status code validation (Check APP_246).
- **Test Data:** Target: network latency indicator, Action: evaluate resource lock duration, Parameters: after biometric authentication failure, Case Index: APP_246
- **Expected Result:** The verification checks confirm that the network requests are queued for retry successfully under reference APP_246.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-246
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_246_success.png

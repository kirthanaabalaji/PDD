# Test Case: TS_APP_077

- **Test Case ID:** TS_APP_077
- **Module:** Settings
- **Feature:** execute deep link request for device orientation toggle during database compaction sync
- **Test Title:** Verify behavior of device orientation toggle during attempts to execute deep link request during database compaction sync
- **Objective:** Evaluate that user can safely execute execute deep link request for device orientation toggle during database compaction sync under system checks.
- **Requirement ID:** REQ-APP-077
- **Preconditions:** System state is reset, and target console is directed to device orientation toggle configuration during database compaction sync (Ref APP_077).
- **Test Steps:**
1. Target active interface for device orientation toggle.
2. Trigger action to execute deep link request during database compaction sync.
3. Collect audit logs and confirm status code validation (Check APP_077).
- **Test Data:** Target: device orientation toggle, Action: execute deep link request, Parameters: during database compaction sync, Case Index: APP_077
- **Expected Result:** The verification checks confirm that the audio recording starts successfully successfully under reference APP_077.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-077
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_077_success.png

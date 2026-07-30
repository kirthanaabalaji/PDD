# Test Case: TC_APP_152

- **Test Case ID:** TC_APP_152
- **Module:** Settings
- **Feature:** audit gesture scaling zoom for cookie token storage sync when user denies camera permission
- **Test Title:** Verify behavior of cookie token storage sync during attempts to audit gesture scaling zoom when user denies camera permission
- **Objective:** Evaluate that user can safely execute audit gesture scaling zoom for cookie token storage sync when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-152
- **Preconditions:** System state is reset, and target console is directed to cookie token storage sync configuration when user denies camera permission (Ref APP_152).
- **Test Steps:**
1. Target active interface for cookie token storage sync.
2. Trigger action to audit gesture scaling zoom when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_152).
- **Test Data:** Target: cookie token storage sync, Action: audit gesture scaling zoom, Parameters: when user denies camera permission, Case Index: APP_152
- **Expected Result:** The verification checks confirm that the resource lock is released cleanly successfully under reference APP_152.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-APP-152
- **Execution Time:** 2.00s
- **Evidence:** evidence/TC_APP_152_success.png

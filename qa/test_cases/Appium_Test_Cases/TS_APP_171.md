# Test Case: TS_APP_171

- **Test Case ID:** TS_APP_171
- **Module:** OfflineMode
- **Feature:** test background execution for AsyncStorage caching engine when user denies camera permission
- **Test Title:** Verify behavior of AsyncStorage caching engine during attempts to test background execution when user denies camera permission
- **Objective:** Evaluate that user can safely execute test background execution for AsyncStorage caching engine when user denies camera permission under system checks.
- **Requirement ID:** REQ-APP-171
- **Preconditions:** System state is reset, and target console is directed to AsyncStorage caching engine configuration when user denies camera permission (Ref APP_171).
- **Test Steps:**
1. Target active interface for AsyncStorage caching engine.
2. Trigger action to test background execution when user denies camera permission.
3. Collect audit logs and confirm status code validation (Check APP_171).
- **Test Data:** Target: AsyncStorage caching engine, Action: test background execution, Parameters: when user denies camera permission, Case Index: APP_171
- **Expected Result:** The verification checks confirm that the layout switches to landscape mode successfully under reference APP_171.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-171
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_171_success.png

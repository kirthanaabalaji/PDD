# Test Case: TS_APP_121

- **Test Case ID:** TS_APP_121
- **Module:** OfflineMode
- **Feature:** trigger orientation switch for AsyncStorage caching engine when background execution is suspended
- **Test Title:** Verify behavior of AsyncStorage caching engine during attempts to trigger orientation switch when background execution is suspended
- **Objective:** Evaluate that user can safely execute trigger orientation switch for AsyncStorage caching engine when background execution is suspended under system checks.
- **Requirement ID:** REQ-APP-121
- **Preconditions:** System state is reset, and target console is directed to AsyncStorage caching engine configuration when background execution is suspended (Ref APP_121).
- **Test Steps:**
1. Target active interface for AsyncStorage caching engine.
2. Trigger action to trigger orientation switch when background execution is suspended.
3. Collect audit logs and confirm status code validation (Check APP_121).
- **Test Data:** Target: AsyncStorage caching engine, Action: trigger orientation switch, Parameters: when background execution is suspended, Case Index: APP_121
- **Expected Result:** The verification checks confirm that the toast notification is displayed successfully under reference APP_121.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-APP-121
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_121_success.png

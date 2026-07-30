# Test Case: TS_APP_221

- **Test Case ID:** TS_APP_221
- **Module:** OfflineMode
- **Feature:** verify native toast layout for AsyncStorage caching engine when system notification service crashes
- **Test Title:** Verify behavior of AsyncStorage caching engine during attempts to verify native toast layout when system notification service crashes
- **Objective:** Evaluate that user can safely execute verify native toast layout for AsyncStorage caching engine when system notification service crashes under system checks.
- **Requirement ID:** REQ-APP-221
- **Preconditions:** System state is reset, and target console is directed to AsyncStorage caching engine configuration when system notification service crashes (Ref APP_221).
- **Test Steps:**
1. Target active interface for AsyncStorage caching engine.
2. Trigger action to verify native toast layout when system notification service crashes.
3. Collect audit logs and confirm status code validation (Check APP_221).
- **Test Data:** Target: AsyncStorage caching engine, Action: verify native toast layout, Parameters: when system notification service crashes, Case Index: APP_221
- **Expected Result:** The verification checks confirm that the app shows system settings link successfully under reference APP_221.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-221
- **Execution Time:** 1.75s
- **Evidence:** evidence/TS_APP_221_success.png

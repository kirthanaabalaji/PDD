# Test Case: TC_APP_183

- **Test Case ID:** TC_APP_183
- **Module:** Settings
- **Feature:** evaluate resource lock duration for deep link navigation schema when system notification service crashes
- **Test Title:** Verify behavior of deep link navigation schema during attempts to evaluate resource lock duration when system notification service crashes
- **Objective:** Evaluate that user can safely execute evaluate resource lock duration for deep link navigation schema when system notification service crashes under system checks.
- **Requirement ID:** REQ-APP-183
- **Preconditions:** System state is reset, and target console is directed to deep link navigation schema configuration when system notification service crashes (Ref APP_183).
- **Test Steps:**
1. Target active interface for deep link navigation schema.
2. Trigger action to evaluate resource lock duration when system notification service crashes.
3. Collect audit logs and confirm status code validation (Check APP_183).
- **Test Data:** Target: deep link navigation schema, Action: evaluate resource lock duration, Parameters: when system notification service crashes, Case Index: APP_183
- **Expected Result:** The verification checks confirm that the database commits transaction successfully under reference APP_183.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-183
- **Execution Time:** 2.25s
- **Evidence:** evidence/TC_APP_183_success.png

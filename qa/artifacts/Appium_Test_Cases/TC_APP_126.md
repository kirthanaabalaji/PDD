# Test Case: TC_APP_126

- **Test Case ID:** TC_APP_126
- **Module:** Settings
- **Feature:** verify permission dialogue for network retry backup loop when system notification service crashes
- **Test Title:** Verify behavior of network retry backup loop during attempts to verify permission dialogue when system notification service crashes
- **Objective:** Evaluate that user can safely execute verify permission dialogue for network retry backup loop when system notification service crashes under system checks.
- **Requirement ID:** REQ-APP-126
- **Preconditions:** System state is reset, and target console is directed to network retry backup loop configuration when system notification service crashes (Ref APP_126).
- **Test Steps:**
1. Target active interface for network retry backup loop.
2. Trigger action to verify permission dialogue when system notification service crashes.
3. Collect audit logs and confirm status code validation (Check APP_126).
- **Test Data:** Target: network retry backup loop, Action: verify permission dialogue, Parameters: when system notification service crashes, Case Index: APP_126
- **Expected Result:** The verification checks confirm that the initialization starts within SLA successfully under reference APP_126.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-126
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_126_success.png

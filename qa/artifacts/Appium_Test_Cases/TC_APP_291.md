# Test Case: TC_APP_291

- **Test Case ID:** TC_APP_291
- **Module:** Settings
- **Feature:** verify localization override for account deletion sequence during deep link routing lookup
- **Test Title:** Verify behavior of account deletion sequence during attempts to verify localization override during deep link routing lookup
- **Objective:** Evaluate that user can safely execute verify localization override for account deletion sequence during deep link routing lookup under system checks.
- **Requirement ID:** REQ-APP-291
- **Preconditions:** System state is reset, and target console is directed to account deletion sequence configuration during deep link routing lookup (Ref APP_291).
- **Test Steps:**
1. Target active interface for account deletion sequence.
2. Trigger action to verify localization override during deep link routing lookup.
3. Collect audit logs and confirm status code validation (Check APP_291).
- **Test Data:** Target: account deletion sequence, Action: verify localization override, Parameters: during deep link routing lookup, Case Index: APP_291
- **Expected Result:** The verification checks confirm that the toast notification is displayed successfully under reference APP_291.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-APP-291
- **Execution Time:** 1.75s
- **Evidence:** evidence/TC_APP_291_success.png

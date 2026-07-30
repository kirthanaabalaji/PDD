# Test Case: TC_SEC_093

- **Test Case ID:** TC_SEC_093
- **Module:** AccessControl
- **Feature:** check cookie storage configurations for password hashing algorithm settings with command terminal syntax symbols
- **Test Title:** Verify behavior of password hashing algorithm settings during attempts to check cookie storage configurations with command terminal syntax symbols
- **Objective:** Evaluate that user can safely execute check cookie storage configurations for password hashing algorithm settings with command terminal syntax symbols under system checks.
- **Requirement ID:** REQ-SEC-093
- **Preconditions:** System state is reset, and target console is directed to password hashing algorithm settings configuration with command terminal syntax symbols (Ref SEC_093).
- **Test Steps:**
1. Target active interface for password hashing algorithm settings.
2. Trigger action to check cookie storage configurations with command terminal syntax symbols.
3. Collect audit logs and confirm status code validation (Check SEC_093).
- **Test Data:** Target: password hashing algorithm settings, Action: check cookie storage configurations, Parameters: with command terminal syntax symbols, Case Index: SEC_093
- **Expected Result:** The verification checks confirm that the application denies permission and logs 403 successfully under reference SEC_093.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-093
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_093_execution.log

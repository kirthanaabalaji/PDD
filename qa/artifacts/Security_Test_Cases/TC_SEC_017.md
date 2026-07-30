# Test Case: TC_SEC_017

- **Test Case ID:** TC_SEC_017
- **Module:** AccessControl
- **Feature:** verify cascade data wiping for emergency contact phone text validation with command terminal syntax symbols
- **Test Title:** Verify behavior of emergency contact phone text validation during attempts to verify cascade data wiping with command terminal syntax symbols
- **Objective:** Evaluate that user can safely execute verify cascade data wiping for emergency contact phone text validation with command terminal syntax symbols under system checks.
- **Requirement ID:** REQ-SEC-017
- **Preconditions:** System state is reset, and target console is directed to emergency contact phone text validation configuration with command terminal syntax symbols (Ref SEC_017).
- **Test Steps:**
1. Target active interface for emergency contact phone text validation.
2. Trigger action to verify cascade data wiping with command terminal syntax symbols.
3. Collect audit logs and confirm status code validation (Check SEC_017).
- **Test Data:** Target: emergency contact phone text validation, Action: verify cascade data wiping, Parameters: with command terminal syntax symbols, Case Index: SEC_017
- **Expected Result:** The verification checks confirm that the application returns database error blocks successfully under reference SEC_017.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-017
- **Execution Time:** 0.680s
- **Evidence:** logs/TC_SEC_017_execution.log

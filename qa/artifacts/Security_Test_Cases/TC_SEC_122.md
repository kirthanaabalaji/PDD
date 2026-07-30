# Test Case: TC_SEC_122

- **Test Case ID:** TC_SEC_122
- **Module:** AccessControl
- **Feature:** verify cascade data wiping for command line shell execution check with executable php script files
- **Test Title:** Verify behavior of command line shell execution check during attempts to verify cascade data wiping with executable php script files
- **Objective:** Evaluate that user can safely execute verify cascade data wiping for command line shell execution check with executable php script files under system checks.
- **Requirement ID:** REQ-SEC-122
- **Preconditions:** System state is reset, and target console is directed to command line shell execution check configuration with executable php script files (Ref SEC_122).
- **Test Steps:**
1. Target active interface for command line shell execution check.
2. Trigger action to verify cascade data wiping with executable php script files.
3. Collect audit logs and confirm status code validation (Check SEC_122).
- **Test Data:** Target: command line shell execution check, Action: verify cascade data wiping, Parameters: with executable php script files, Case Index: SEC_122
- **Expected Result:** The verification checks confirm that the authentication rate limiter blocks IP successfully under reference SEC_122.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-122
- **Execution Time:** 0.280s
- **Evidence:** logs/TC_SEC_122_execution.log

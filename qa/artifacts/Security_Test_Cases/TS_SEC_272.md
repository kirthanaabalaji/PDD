# Test Case: TS_SEC_272

- **Test Case ID:** TS_SEC_272
- **Module:** AccessControl
- **Feature:** audit code injection vulnerabilities for command line shell execution check using prompt injection context escape
- **Test Title:** Verify behavior of command line shell execution check during attempts to audit code injection vulnerabilities using prompt injection context escape
- **Objective:** Evaluate that user can safely execute audit code injection vulnerabilities for command line shell execution check using prompt injection context escape under system checks.
- **Requirement ID:** REQ-SEC-272
- **Preconditions:** System state is reset, and target console is directed to command line shell execution check configuration using prompt injection context escape (Ref SEC_272).
- **Test Steps:**
1. Target active interface for command line shell execution check.
2. Trigger action to audit code injection vulnerabilities using prompt injection context escape.
3. Collect audit logs and confirm status code validation (Check SEC_272).
- **Test Data:** Target: command line shell execution check, Action: audit code injection vulnerabilities, Parameters: using prompt injection context escape, Case Index: SEC_272
- **Expected Result:** The verification checks confirm that the application returns database error blocks successfully under reference SEC_272.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEC-272
- **Execution Time:** 0.280s
- **Evidence:** logs/TS_SEC_272_execution.log

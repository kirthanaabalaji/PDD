# Test Case: TS_SEC_146

- **Test Case ID:** TS_SEC_146
- **Module:** AccessControl
- **Feature:** audit code injection vulnerabilities for API endpoint parameter validation schemas with html tag script inputs
- **Test Title:** Verify behavior of API endpoint parameter validation schemas during attempts to audit code injection vulnerabilities with html tag script inputs
- **Objective:** Evaluate that user can safely execute audit code injection vulnerabilities for API endpoint parameter validation schemas with html tag script inputs under system checks.
- **Requirement ID:** REQ-SEC-146
- **Preconditions:** System state is reset, and target console is directed to API endpoint parameter validation schemas configuration with html tag script inputs (Ref SEC_146).
- **Test Steps:**
1. Target active interface for API endpoint parameter validation schemas.
2. Trigger action to audit code injection vulnerabilities with html tag script inputs.
3. Collect audit logs and confirm status code validation (Check SEC_146).
- **Test Data:** Target: API endpoint parameter validation schemas, Action: audit code injection vulnerabilities, Parameters: with html tag script inputs, Case Index: SEC_146
- **Expected Result:** The verification checks confirm that the server blocks the unauthorized data access successfully under reference SEC_146.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-146
- **Execution Time:** 0.600s
- **Evidence:** logs/TS_SEC_146_execution.log

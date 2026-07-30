# Test Case: TC_SEC_061

- **Test Case ID:** TC_SEC_061
- **Module:** AccessControl
- **Feature:** test executable file injection for Gemini API prompt injection defense using external URL domains
- **Test Title:** Verify behavior of Gemini API prompt injection defense during attempts to test executable file injection using external URL domains
- **Objective:** Evaluate that user can safely execute test executable file injection for Gemini API prompt injection defense using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-061
- **Preconditions:** System state is reset, and target console is directed to Gemini API prompt injection defense configuration using external URL domains (Ref SEC_061).
- **Test Steps:**
1. Target active interface for Gemini API prompt injection defense.
2. Trigger action to test executable file injection using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_061).
- **Test Data:** Target: Gemini API prompt injection defense, Action: test executable file injection, Parameters: using external URL domains, Case Index: SEC_061
- **Expected Result:** The verification checks confirm that the server blocks the unauthorized data access successfully under reference SEC_061.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-061
- **Execution Time:** 0.200s
- **Evidence:** logs/TC_SEC_061_execution.log

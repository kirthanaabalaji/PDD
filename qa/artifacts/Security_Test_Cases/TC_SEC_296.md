# Test Case: TC_SEC_296

- **Test Case ID:** TC_SEC_296
- **Module:** AccessControl
- **Feature:** evaluate privilege escalation bypass for API endpoint parameter validation schemas using relative path traversing dots
- **Test Title:** Verify behavior of API endpoint parameter validation schemas during attempts to evaluate privilege escalation bypass using relative path traversing dots
- **Objective:** Evaluate that user can safely execute evaluate privilege escalation bypass for API endpoint parameter validation schemas using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-296
- **Preconditions:** System state is reset, and target console is directed to API endpoint parameter validation schemas configuration using relative path traversing dots (Ref SEC_296).
- **Test Steps:**
1. Target active interface for API endpoint parameter validation schemas.
2. Trigger action to evaluate privilege escalation bypass using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_296).
- **Test Data:** Target: API endpoint parameter validation schemas, Action: evaluate privilege escalation bypass, Parameters: using relative path traversing dots, Case Index: SEC_296
- **Expected Result:** The verification checks confirm that the relative path escape fails to load successfully under reference SEC_296.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEC-296
- **Execution Time:** 0.600s
- **Evidence:** logs/TC_SEC_296_execution.log

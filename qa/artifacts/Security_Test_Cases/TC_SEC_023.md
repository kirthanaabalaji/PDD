# Test Case: TC_SEC_023

- **Test Case ID:** TC_SEC_023
- **Module:** AccessControl
- **Feature:** evaluate privilege escalation bypass for admin route dashboard permissions using external URL domains
- **Test Title:** Verify behavior of admin route dashboard permissions during attempts to evaluate privilege escalation bypass using external URL domains
- **Objective:** Evaluate that user can safely execute evaluate privilege escalation bypass for admin route dashboard permissions using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-023
- **Preconditions:** System state is reset, and target console is directed to admin route dashboard permissions configuration using external URL domains (Ref SEC_023).
- **Test Steps:**
1. Target active interface for admin route dashboard permissions.
2. Trigger action to evaluate privilege escalation bypass using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_023).
- **Test Data:** Target: admin route dashboard permissions, Action: evaluate privilege escalation bypass, Parameters: using external URL domains, Case Index: SEC_023
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_023.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-023
- **Execution Time:** 0.360s
- **Evidence:** logs/TC_SEC_023_execution.log

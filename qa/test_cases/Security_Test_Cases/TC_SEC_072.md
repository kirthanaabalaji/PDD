# Test Case: TC_SEC_072

- **Test Case ID:** TC_SEC_072
- **Module:** AccessControl
- **Feature:** check cookie storage configurations for command line shell execution check during server internal log dumping
- **Test Title:** Verify behavior of command line shell execution check during attempts to check cookie storage configurations during server internal log dumping
- **Objective:** Evaluate that user can safely execute check cookie storage configurations for command line shell execution check during server internal log dumping under system checks.
- **Requirement ID:** REQ-SEC-072
- **Preconditions:** System state is reset, and target console is directed to command line shell execution check configuration during server internal log dumping (Ref SEC_072).
- **Test Steps:**
1. Target active interface for command line shell execution check.
2. Trigger action to check cookie storage configurations during server internal log dumping.
3. Collect audit logs and confirm status code validation (Check SEC_072).
- **Test Data:** Target: command line shell execution check, Action: check cookie storage configurations, Parameters: during server internal log dumping, Case Index: SEC_072
- **Expected Result:** The verification checks confirm that the security headers are parsed properly successfully under reference SEC_072.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEC-072
- **Execution Time:** 0.280s
- **Evidence:** logs/TC_SEC_072_execution.log

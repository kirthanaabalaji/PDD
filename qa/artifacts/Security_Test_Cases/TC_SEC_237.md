# Test Case: TC_SEC_237

- **Test Case ID:** TC_SEC_237
- **Module:** AccessControl
- **Feature:** audit brute force block speed for container runtime user privileges against OWASP top 10 rules
- **Test Title:** Verify behavior of container runtime user privileges during attempts to audit brute force block speed against OWASP top 10 rules
- **Objective:** Evaluate that user can safely execute audit brute force block speed for container runtime user privileges against OWASP top 10 rules under system checks.
- **Requirement ID:** REQ-SEC-237
- **Preconditions:** System state is reset, and target console is directed to container runtime user privileges configuration against OWASP top 10 rules (Ref SEC_237).
- **Test Steps:**
1. Target active interface for container runtime user privileges.
2. Trigger action to audit brute force block speed against OWASP top 10 rules.
3. Collect audit logs and confirm status code validation (Check SEC_237).
- **Test Data:** Target: container runtime user privileges, Action: audit brute force block speed, Parameters: against OWASP top 10 rules, Case Index: SEC_237
- **Expected Result:** The verification checks confirm that the authorization validation check blocks query successfully under reference SEC_237.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-237
- **Execution Time:** 0.680s
- **Evidence:** logs/TC_SEC_237_execution.log

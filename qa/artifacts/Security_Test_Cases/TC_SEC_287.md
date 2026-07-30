# Test Case: TC_SEC_287

- **Test Case ID:** TC_SEC_287
- **Module:** AccessControl
- **Feature:** inspect logs for exposed keys for container runtime user privileges with high frequency rapid authentication attempts
- **Test Title:** Verify behavior of container runtime user privileges during attempts to inspect logs for exposed keys with high frequency rapid authentication attempts
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for container runtime user privileges with high frequency rapid authentication attempts under system checks.
- **Requirement ID:** REQ-SEC-287
- **Preconditions:** System state is reset, and target console is directed to container runtime user privileges configuration with high frequency rapid authentication attempts (Ref SEC_287).
- **Test Steps:**
1. Target active interface for container runtime user privileges.
2. Trigger action to inspect logs for exposed keys with high frequency rapid authentication attempts.
3. Collect audit logs and confirm status code validation (Check SEC_287).
- **Test Data:** Target: container runtime user privileges, Action: inspect logs for exposed keys, Parameters: with high frequency rapid authentication attempts, Case Index: SEC_287
- **Expected Result:** The verification checks confirm that the backend blocks terminal execution successfully under reference SEC_287.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-287
- **Execution Time:** 0.680s
- **Evidence:** logs/TC_SEC_287_execution.log

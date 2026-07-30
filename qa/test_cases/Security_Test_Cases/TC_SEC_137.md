# Test Case: TC_SEC_137

- **Test Case ID:** TC_SEC_137
- **Module:** AccessControl
- **Feature:** verify public route visibility for container runtime user privileges using external URL domains
- **Test Title:** Verify behavior of container runtime user privileges during attempts to verify public route visibility using external URL domains
- **Objective:** Evaluate that user can safely execute verify public route visibility for container runtime user privileges using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-137
- **Preconditions:** System state is reset, and target console is directed to container runtime user privileges configuration using external URL domains (Ref SEC_137).
- **Test Steps:**
1. Target active interface for container runtime user privileges.
2. Trigger action to verify public route visibility using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_137).
- **Test Data:** Target: container runtime user privileges, Action: verify public route visibility, Parameters: using external URL domains, Case Index: SEC_137
- **Expected Result:** The verification checks confirm that the system rejects the tampered token successfully under reference SEC_137.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-137
- **Execution Time:** 0.680s
- **Evidence:** logs/TC_SEC_137_execution.log

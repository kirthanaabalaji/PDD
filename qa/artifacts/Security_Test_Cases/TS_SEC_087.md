# Test Case: TS_SEC_087

- **Test Case ID:** TS_SEC_087
- **Module:** AccessControl
- **Feature:** manipulate record ownership indices for container runtime user privileges using relative path traversing dots
- **Test Title:** Verify behavior of container runtime user privileges during attempts to manipulate record ownership indices using relative path traversing dots
- **Objective:** Evaluate that user can safely execute manipulate record ownership indices for container runtime user privileges using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-087
- **Preconditions:** System state is reset, and target console is directed to container runtime user privileges configuration using relative path traversing dots (Ref SEC_087).
- **Test Steps:**
1. Target active interface for container runtime user privileges.
2. Trigger action to manipulate record ownership indices using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_087).
- **Test Data:** Target: container runtime user privileges, Action: manipulate record ownership indices, Parameters: using relative path traversing dots, Case Index: SEC_087
- **Expected Result:** The verification checks confirm that the request is redirected with 401 code successfully under reference SEC_087.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-087
- **Execution Time:** 0.680s
- **Evidence:** logs/TS_SEC_087_execution.log

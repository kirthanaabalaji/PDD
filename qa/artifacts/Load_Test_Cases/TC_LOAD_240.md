# Test Case: TC_LOAD_240

- **Test Case ID:** TC_LOAD_240
- **Module:** Database
- **Feature:** check payload upload time for /api/health check endpoint under continuous memory heap pressure
- **Test Title:** Verify behavior of /api/health check endpoint during attempts to check payload upload time under continuous memory heap pressure
- **Objective:** Evaluate that user can safely execute check payload upload time for /api/health check endpoint under continuous memory heap pressure under system checks.
- **Requirement ID:** REQ-LOAD-240
- **Preconditions:** System state is reset, and target console is directed to /api/health check endpoint configuration under continuous memory heap pressure (Ref LOAD_240).
- **Test Steps:**
1. Target active interface for /api/health check endpoint.
2. Trigger action to check payload upload time under continuous memory heap pressure.
3. Collect audit logs and confirm status code validation (Check LOAD_240).
- **Test Data:** Target: /api/health check endpoint, Action: check payload upload time, Parameters: under continuous memory heap pressure, Case Index: LOAD_240
- **Expected Result:** The verification checks confirm that the connection pool handles load without timeout successfully under reference LOAD_240.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-LOAD-240
- **Execution Time:** 4.5s
- **Evidence:** logs/TC_LOAD_240_execution.log

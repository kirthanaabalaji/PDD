# Test Case: TS_LOAD_153

- **Test Case ID:** TS_LOAD_153
- **Module:** Authentication
- **Feature:** test queue backlog latency for /api/auth/login endpoint during peak hours scheduling traffic
- **Test Title:** Verify behavior of /api/auth/login endpoint during attempts to test queue backlog latency during peak hours scheduling traffic
- **Objective:** Evaluate that user can safely execute test queue backlog latency for /api/auth/login endpoint during peak hours scheduling traffic under system checks.
- **Requirement ID:** REQ-LOAD-153
- **Preconditions:** System state is reset, and target console is directed to /api/auth/login endpoint configuration during peak hours scheduling traffic (Ref LOAD_153).
- **Test Steps:**
1. Target active interface for /api/auth/login endpoint.
2. Trigger action to test queue backlog latency during peak hours scheduling traffic.
3. Collect audit logs and confirm status code validation (Check LOAD_153).
- **Test Data:** Target: /api/auth/login endpoint, Action: test queue backlog latency, Parameters: during peak hours scheduling traffic, Case Index: LOAD_153
- **Expected Result:** The verification checks confirm that the response latency remains below 300ms successfully under reference LOAD_153.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-LOAD-153
- **Execution Time:** 8.1s
- **Evidence:** logs/TS_LOAD_153_execution.log

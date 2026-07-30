# Test Case: TC_LOAD_195

- **Test Case ID:** TC_LOAD_195
- **Module:** AIChat
- **Feature:** test queue backlog latency for /api/chat messaging endpoint with high frequency preflight requests
- **Test Title:** Verify behavior of /api/chat messaging endpoint during attempts to test queue backlog latency with high frequency preflight requests
- **Objective:** Evaluate that user can safely execute test queue backlog latency for /api/chat messaging endpoint with high frequency preflight requests under system checks.
- **Requirement ID:** REQ-LOAD-195
- **Preconditions:** System state is reset, and target console is directed to /api/chat messaging endpoint configuration with high frequency preflight requests (Ref LOAD_195).
- **Test Steps:**
1. Target active interface for /api/chat messaging endpoint.
2. Trigger action to test queue backlog latency with high frequency preflight requests.
3. Collect audit logs and confirm status code validation (Check LOAD_195).
- **Test Data:** Target: /api/chat messaging endpoint, Action: test queue backlog latency, Parameters: with high frequency preflight requests, Case Index: LOAD_195
- **Expected Result:** The verification checks confirm that the downstream calls queue up safely successfully under reference LOAD_195.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-195
- **Execution Time:** 10.5s
- **Evidence:** logs/TC_LOAD_195_execution.log

# Test Case: TS_LOAD_290

- **Test Case ID:** TS_LOAD_290
- **Module:** Database
- **Feature:** test system recovery latency for /api/health check endpoint with high frequency preflight requests
- **Test Title:** Verify behavior of /api/health check endpoint during attempts to test system recovery latency with high frequency preflight requests
- **Objective:** Evaluate that user can safely execute test system recovery latency for /api/health check endpoint with high frequency preflight requests under system checks.
- **Requirement ID:** REQ-LOAD-290
- **Preconditions:** System state is reset, and target console is directed to /api/health check endpoint configuration with high frequency preflight requests (Ref LOAD_290).
- **Test Steps:**
1. Target active interface for /api/health check endpoint.
2. Trigger action to test system recovery latency with high frequency preflight requests.
3. Collect audit logs and confirm status code validation (Check LOAD_290).
- **Test Data:** Target: /api/health check endpoint, Action: test system recovery latency, Parameters: with high frequency preflight requests, Case Index: LOAD_290
- **Expected Result:** The verification checks confirm that the container memory utilization is stable successfully under reference LOAD_290.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-290
- **Execution Time:** 4.5s
- **Evidence:** logs/TS_LOAD_290_execution.log

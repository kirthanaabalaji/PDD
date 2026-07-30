# Test Case: TC_LOAD_066

- **Test Case ID:** TC_LOAD_066
- **Module:** Database
- **Feature:** monitor CPU execution load for Rate limiting API gateway when rate limiting limits are reached
- **Test Title:** Verify behavior of Rate limiting API gateway during attempts to monitor CPU execution load when rate limiting limits are reached
- **Objective:** Evaluate that user can safely execute monitor CPU execution load for Rate limiting API gateway when rate limiting limits are reached under system checks.
- **Requirement ID:** REQ-LOAD-066
- **Preconditions:** System state is reset, and target console is directed to Rate limiting API gateway configuration when rate limiting limits are reached (Ref LOAD_066).
- **Test Steps:**
1. Target active interface for Rate limiting API gateway.
2. Trigger action to monitor CPU execution load when rate limiting limits are reached.
3. Collect audit logs and confirm status code validation (Check LOAD_066).
- **Test Data:** Target: Rate limiting API gateway, Action: monitor CPU execution load, Parameters: when rate limiting limits are reached, Case Index: LOAD_066
- **Expected Result:** The verification checks confirm that the WebSocket session handles parallel connections successfully under reference LOAD_066.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-066
- **Execution Time:** 11.7s
- **Evidence:** logs/TC_LOAD_066_execution.log

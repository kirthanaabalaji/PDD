# Test Case: TC_LOAD_252

- **Test Case ID:** TC_LOAD_252
- **Module:** Database
- **Feature:** evaluate response time for Symptom report query aggregator with high frequency preflight requests
- **Test Title:** Verify behavior of Symptom report query aggregator during attempts to evaluate response time with high frequency preflight requests
- **Objective:** Evaluate that user can safely execute evaluate response time for Symptom report query aggregator with high frequency preflight requests under system checks.
- **Requirement ID:** REQ-LOAD-252
- **Preconditions:** System state is reset, and target console is directed to Symptom report query aggregator configuration with high frequency preflight requests (Ref LOAD_252).
- **Test Steps:**
1. Target active interface for Symptom report query aggregator.
2. Trigger action to evaluate response time with high frequency preflight requests.
3. Collect audit logs and confirm status code validation (Check LOAD_252).
- **Test Data:** Target: Symptom report query aggregator, Action: evaluate response time, Parameters: with high frequency preflight requests, Case Index: LOAD_252
- **Expected Result:** The verification checks confirm that the system throughput scales linearly successfully under reference LOAD_252.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-LOAD-252
- **Execution Time:** 6.9s
- **Evidence:** logs/TC_LOAD_252_execution.log

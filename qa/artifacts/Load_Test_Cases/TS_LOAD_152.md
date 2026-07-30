# Test Case: TS_LOAD_152

- **Test Case ID:** TS_LOAD_152
- **Module:** Database
- **Feature:** test failover routing times for Symptom report query aggregator with 500 concurrent virtual users
- **Test Title:** Verify behavior of Symptom report query aggregator during attempts to test failover routing times with 500 concurrent virtual users
- **Objective:** Evaluate that user can safely execute test failover routing times for Symptom report query aggregator with 500 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-152
- **Preconditions:** System state is reset, and target console is directed to Symptom report query aggregator configuration with 500 concurrent virtual users (Ref LOAD_152).
- **Test Steps:**
1. Target active interface for Symptom report query aggregator.
2. Trigger action to test failover routing times with 500 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_152).
- **Test Data:** Target: Symptom report query aggregator, Action: test failover routing times, Parameters: with 500 concurrent virtual users, Case Index: LOAD_152
- **Expected Result:** The verification checks confirm that the server restarts within execution limits successfully under reference LOAD_152.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-LOAD-152
- **Execution Time:** 6.9s
- **Evidence:** logs/TS_LOAD_152_execution.log

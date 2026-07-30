# Test Case: TS_LOAD_202

- **Test Case ID:** TS_LOAD_202
- **Module:** Database
- **Feature:** test query throughput for Symptom report query aggregator under continuous memory heap pressure
- **Test Title:** Verify behavior of Symptom report query aggregator during attempts to test query throughput under continuous memory heap pressure
- **Objective:** Evaluate that user can safely execute test query throughput for Symptom report query aggregator under continuous memory heap pressure under system checks.
- **Requirement ID:** REQ-LOAD-202
- **Preconditions:** System state is reset, and target console is directed to Symptom report query aggregator configuration under continuous memory heap pressure (Ref LOAD_202).
- **Test Steps:**
1. Target active interface for Symptom report query aggregator.
2. Trigger action to test query throughput under continuous memory heap pressure.
3. Collect audit logs and confirm status code validation (Check LOAD_202).
- **Test Data:** Target: Symptom report query aggregator, Action: test query throughput, Parameters: under continuous memory heap pressure, Case Index: LOAD_202
- **Expected Result:** The verification checks confirm that the WebSocket session handles parallel connections successfully under reference LOAD_202.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-LOAD-202
- **Execution Time:** 6.9s
- **Evidence:** logs/TS_LOAD_202_execution.log

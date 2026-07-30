# Test Case: TS_LOAD_102

- **Test Case ID:** TS_LOAD_102
- **Module:** Database
- **Feature:** check thread context switches for Symptom report query aggregator with 2000 concurrent virtual users
- **Test Title:** Verify behavior of Symptom report query aggregator during attempts to check thread context switches with 2000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute check thread context switches for Symptom report query aggregator with 2000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-102
- **Preconditions:** System state is reset, and target console is directed to Symptom report query aggregator configuration with 2000 concurrent virtual users (Ref LOAD_102).
- **Test Steps:**
1. Target active interface for Symptom report query aggregator.
2. Trigger action to check thread context switches with 2000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_102).
- **Test Data:** Target: Symptom report query aggregator, Action: check thread context switches, Parameters: with 2000 concurrent virtual users, Case Index: LOAD_102
- **Expected Result:** The verification checks confirm that the response latency remains below 300ms successfully under reference LOAD_102.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-102
- **Execution Time:** 6.9s
- **Evidence:** logs/TS_LOAD_102_execution.log

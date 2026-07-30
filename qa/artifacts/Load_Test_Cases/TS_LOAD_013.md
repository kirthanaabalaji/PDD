# Test Case: TS_LOAD_013

- **Test Case ID:** TS_LOAD_013
- **Module:** Database
- **Feature:** test query throughput for Auth verification JWT header verification with 1000 concurrent virtual users
- **Test Title:** Verify behavior of Auth verification JWT header verification during attempts to test query throughput with 1000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute test query throughput for Auth verification JWT header verification with 1000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-013
- **Preconditions:** System state is reset, and target console is directed to Auth verification JWT header verification configuration with 1000 concurrent virtual users (Ref LOAD_013).
- **Test Steps:**
1. Target active interface for Auth verification JWT header verification.
2. Trigger action to test query throughput with 1000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_013).
- **Test Data:** Target: Auth verification JWT header verification, Action: test query throughput, Parameters: with 1000 concurrent virtual users, Case Index: LOAD_013
- **Expected Result:** The verification checks confirm that the failover route restores active states successfully under reference LOAD_013.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-LOAD-013
- **Execution Time:** 8.1s
- **Evidence:** logs/TS_LOAD_013_execution.log

# Test Case: TS_LOAD_026

- **Test Case ID:** TS_LOAD_026
- **Module:** Database
- **Feature:** test failover routing times for Atlas backup restore throughput with 2000 concurrent virtual users
- **Test Title:** Verify behavior of Atlas backup restore throughput during attempts to test failover routing times with 2000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute test failover routing times for Atlas backup restore throughput with 2000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-026
- **Preconditions:** System state is reset, and target console is directed to Atlas backup restore throughput configuration with 2000 concurrent virtual users (Ref LOAD_026).
- **Test Steps:**
1. Target active interface for Atlas backup restore throughput.
2. Trigger action to test failover routing times with 2000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_026).
- **Test Data:** Target: Atlas backup restore throughput, Action: test failover routing times, Parameters: with 2000 concurrent virtual users, Case Index: LOAD_026
- **Expected Result:** The verification checks confirm that the error rate stays under 1 percent successfully under reference LOAD_026.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-026
- **Execution Time:** 11.7s
- **Evidence:** logs/TS_LOAD_026_execution.log

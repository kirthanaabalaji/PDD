# Test Case: TS_LOAD_076

- **Test Case ID:** TS_LOAD_076
- **Module:** Database
- **Feature:** test query throughput for Atlas backup restore throughput with 500 concurrent virtual users
- **Test Title:** Verify behavior of Atlas backup restore throughput during attempts to test query throughput with 500 concurrent virtual users
- **Objective:** Evaluate that user can safely execute test query throughput for Atlas backup restore throughput with 500 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-076
- **Preconditions:** System state is reset, and target console is directed to Atlas backup restore throughput configuration with 500 concurrent virtual users (Ref LOAD_076).
- **Test Steps:**
1. Target active interface for Atlas backup restore throughput.
2. Trigger action to test query throughput with 500 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_076).
- **Test Data:** Target: Atlas backup restore throughput, Action: test query throughput, Parameters: with 500 concurrent virtual users, Case Index: LOAD_076
- **Expected Result:** The verification checks confirm that the downstream calls queue up safely successfully under reference LOAD_076.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-LOAD-076
- **Execution Time:** 11.7s
- **Evidence:** logs/TS_LOAD_076_execution.log

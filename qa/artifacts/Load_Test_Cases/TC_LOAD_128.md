# Test Case: TC_LOAD_128

- **Test Case ID:** TC_LOAD_128
- **Module:** Database
- **Feature:** measure server warm start delay for MongoDB user deletion cascade on database replica set failover
- **Test Title:** Verify behavior of MongoDB user deletion cascade during attempts to measure server warm start delay on database replica set failover
- **Objective:** Evaluate that user can safely execute measure server warm start delay for MongoDB user deletion cascade on database replica set failover under system checks.
- **Requirement ID:** REQ-LOAD-128
- **Preconditions:** System state is reset, and target console is directed to MongoDB user deletion cascade configuration on database replica set failover (Ref LOAD_128).
- **Test Steps:**
1. Target active interface for MongoDB user deletion cascade.
2. Trigger action to measure server warm start delay on database replica set failover.
3. Collect audit logs and confirm status code validation (Check LOAD_128).
- **Test Data:** Target: MongoDB user deletion cascade, Action: measure server warm start delay, Parameters: on database replica set failover, Case Index: LOAD_128
- **Expected Result:** The verification checks confirm that the error rate stays under 1 percent successfully under reference LOAD_128.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-LOAD-128
- **Execution Time:** 14.1s
- **Evidence:** logs/TC_LOAD_128_execution.log

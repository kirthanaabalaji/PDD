# Test Case: TS_LOAD_052

- **Test Case ID:** TS_LOAD_052
- **Module:** Database
- **Feature:** inspect memory allocation limits for Symptom report query aggregator on database replica set failover
- **Test Title:** Verify behavior of Symptom report query aggregator during attempts to inspect memory allocation limits on database replica set failover
- **Objective:** Evaluate that user can safely execute inspect memory allocation limits for Symptom report query aggregator on database replica set failover under system checks.
- **Requirement ID:** REQ-LOAD-052
- **Preconditions:** System state is reset, and target console is directed to Symptom report query aggregator configuration on database replica set failover (Ref LOAD_052).
- **Test Steps:**
1. Target active interface for Symptom report query aggregator.
2. Trigger action to inspect memory allocation limits on database replica set failover.
3. Collect audit logs and confirm status code validation (Check LOAD_052).
- **Test Data:** Target: Symptom report query aggregator, Action: inspect memory allocation limits, Parameters: on database replica set failover, Case Index: LOAD_052
- **Expected Result:** The verification checks confirm that the container memory utilization is stable successfully under reference LOAD_052.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-LOAD-052
- **Execution Time:** 6.9s
- **Evidence:** logs/TS_LOAD_052_execution.log

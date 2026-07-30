# Test Case: TC_LOAD_005

- **Test Case ID:** TC_LOAD_005
- **Module:** Database
- **Feature:** test failover routing times for Breathing session average calculations with high frequency preflight requests
- **Test Title:** Verify behavior of Breathing session average calculations during attempts to test failover routing times with high frequency preflight requests
- **Objective:** Evaluate that user can safely execute test failover routing times for Breathing session average calculations with high frequency preflight requests under system checks.
- **Requirement ID:** REQ-LOAD-005
- **Preconditions:** System state is reset, and target console is directed to Breathing session average calculations configuration with high frequency preflight requests (Ref LOAD_005).
- **Test Steps:**
1. Target active interface for Breathing session average calculations.
2. Trigger action to test failover routing times with high frequency preflight requests.
3. Collect audit logs and confirm status code validation (Check LOAD_005).
- **Test Data:** Target: Breathing session average calculations, Action: test failover routing times, Parameters: with high frequency preflight requests, Case Index: LOAD_005
- **Expected Result:** The verification checks confirm that the Redis cache handles query response successfully under reference LOAD_005.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-LOAD-005
- **Execution Time:** 10.5s
- **Evidence:** logs/TC_LOAD_005_execution.log

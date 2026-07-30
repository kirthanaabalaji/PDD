# Test Case: TS_LOAD_104

- **Test Case ID:** TS_LOAD_104
- **Module:** Database
- **Feature:** evaluate socket connection times for Express HTTP router cluster when rate limiting limits are reached
- **Test Title:** Verify behavior of Express HTTP router cluster during attempts to evaluate socket connection times when rate limiting limits are reached
- **Objective:** Evaluate that user can safely execute evaluate socket connection times for Express HTTP router cluster when rate limiting limits are reached under system checks.
- **Requirement ID:** REQ-LOAD-104
- **Preconditions:** System state is reset, and target console is directed to Express HTTP router cluster configuration when rate limiting limits are reached (Ref LOAD_104).
- **Test Steps:**
1. Target active interface for Express HTTP router cluster.
2. Trigger action to evaluate socket connection times when rate limiting limits are reached.
3. Collect audit logs and confirm status code validation (Check LOAD_104).
- **Test Data:** Target: Express HTTP router cluster, Action: evaluate socket connection times, Parameters: when rate limiting limits are reached, Case Index: LOAD_104
- **Expected Result:** The verification checks confirm that the connection pool handles load without timeout successfully under reference LOAD_104.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-LOAD-104
- **Execution Time:** 9.3s
- **Evidence:** logs/TS_LOAD_104_execution.log

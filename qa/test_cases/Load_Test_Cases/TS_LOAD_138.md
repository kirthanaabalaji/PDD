# Test Case: TS_LOAD_138

- **Test Case ID:** TS_LOAD_138
- **Module:** Database
- **Feature:** measure network bandwidth load for CORS preflight request routing check with high frequency preflight requests
- **Test Title:** Verify behavior of CORS preflight request routing check during attempts to measure network bandwidth load with high frequency preflight requests
- **Objective:** Evaluate that user can safely execute measure network bandwidth load for CORS preflight request routing check with high frequency preflight requests under system checks.
- **Requirement ID:** REQ-LOAD-138
- **Preconditions:** System state is reset, and target console is directed to CORS preflight request routing check configuration with high frequency preflight requests (Ref LOAD_138).
- **Test Steps:**
1. Target active interface for CORS preflight request routing check.
2. Trigger action to measure network bandwidth load with high frequency preflight requests.
3. Collect audit logs and confirm status code validation (Check LOAD_138).
- **Test Data:** Target: CORS preflight request routing check, Action: measure network bandwidth load, Parameters: with high frequency preflight requests, Case Index: LOAD_138
- **Expected Result:** The verification checks confirm that the connection pool handles load without timeout successfully under reference LOAD_138.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-138
- **Execution Time:** 14.1s
- **Evidence:** logs/TS_LOAD_138_execution.log

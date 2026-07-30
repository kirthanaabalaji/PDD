# Test Case: TS_LOAD_171

- **Test Case ID:** TS_LOAD_171
- **Module:** SymptomTracking
- **Feature:** monitor CPU execution load for /api/data/symptoms POST route with 500 concurrent virtual users
- **Test Title:** Verify behavior of /api/data/symptoms POST route during attempts to monitor CPU execution load with 500 concurrent virtual users
- **Objective:** Evaluate that user can safely execute monitor CPU execution load for /api/data/symptoms POST route with 500 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-171
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms POST route configuration with 500 concurrent virtual users (Ref LOAD_171).
- **Test Steps:**
1. Target active interface for /api/data/symptoms POST route.
2. Trigger action to monitor CPU execution load with 500 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_171).
- **Test Data:** Target: /api/data/symptoms POST route, Action: monitor CPU execution load, Parameters: with 500 concurrent virtual users, Case Index: LOAD_171
- **Expected Result:** The verification checks confirm that the container memory utilization is stable successfully under reference LOAD_171.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-LOAD-171
- **Execution Time:** 5.7s
- **Evidence:** logs/TS_LOAD_171_execution.log

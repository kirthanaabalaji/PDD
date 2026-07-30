# Test Case: TS_LOAD_121

- **Test Case ID:** TS_LOAD_121
- **Module:** SymptomTracking
- **Feature:** inspect memory consumption for /api/data/symptoms POST route with 2000 concurrent virtual users
- **Test Title:** Verify behavior of /api/data/symptoms POST route during attempts to inspect memory consumption with 2000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute inspect memory consumption for /api/data/symptoms POST route with 2000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-121
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms POST route configuration with 2000 concurrent virtual users (Ref LOAD_121).
- **Test Steps:**
1. Target active interface for /api/data/symptoms POST route.
2. Trigger action to inspect memory consumption with 2000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_121).
- **Test Data:** Target: /api/data/symptoms POST route, Action: inspect memory consumption, Parameters: with 2000 concurrent virtual users, Case Index: LOAD_121
- **Expected Result:** The verification checks confirm that the connection pool handles load without timeout successfully under reference LOAD_121.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-LOAD-121
- **Execution Time:** 5.7s
- **Evidence:** logs/TS_LOAD_121_execution.log

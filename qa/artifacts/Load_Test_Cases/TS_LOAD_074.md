# Test Case: TS_LOAD_074

- **Test Case ID:** TS_LOAD_074
- **Module:** SymptomTracking
- **Feature:** check error rate threshold for /api/data/symptoms GET route under complex aggregation pipeline queries
- **Test Title:** Verify behavior of /api/data/symptoms GET route during attempts to check error rate threshold under complex aggregation pipeline queries
- **Objective:** Evaluate that user can safely execute check error rate threshold for /api/data/symptoms GET route under complex aggregation pipeline queries under system checks.
- **Requirement ID:** REQ-LOAD-074
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms GET route configuration under complex aggregation pipeline queries (Ref LOAD_074).
- **Test Steps:**
1. Target active interface for /api/data/symptoms GET route.
2. Trigger action to check error rate threshold under complex aggregation pipeline queries.
3. Collect audit logs and confirm status code validation (Check LOAD_074).
- **Test Data:** Target: /api/data/symptoms GET route, Action: check error rate threshold, Parameters: under complex aggregation pipeline queries, Case Index: LOAD_074
- **Expected Result:** The verification checks confirm that the bandwidth footprint meets network specs successfully under reference LOAD_074.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-074
- **Execution Time:** 9.3s
- **Evidence:** logs/TS_LOAD_074_execution.log

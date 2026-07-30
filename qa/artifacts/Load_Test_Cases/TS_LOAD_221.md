# Test Case: TS_LOAD_221

- **Test Case ID:** TS_LOAD_221
- **Module:** SymptomTracking
- **Feature:** check error rate threshold for /api/data/symptoms POST route under continuous memory heap pressure
- **Test Title:** Verify behavior of /api/data/symptoms POST route during attempts to check error rate threshold under continuous memory heap pressure
- **Objective:** Evaluate that user can safely execute check error rate threshold for /api/data/symptoms POST route under continuous memory heap pressure under system checks.
- **Requirement ID:** REQ-LOAD-221
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms POST route configuration under continuous memory heap pressure (Ref LOAD_221).
- **Test Steps:**
1. Target active interface for /api/data/symptoms POST route.
2. Trigger action to check error rate threshold under continuous memory heap pressure.
3. Collect audit logs and confirm status code validation (Check LOAD_221).
- **Test Data:** Target: /api/data/symptoms POST route, Action: check error rate threshold, Parameters: under continuous memory heap pressure, Case Index: LOAD_221
- **Expected Result:** The verification checks confirm that the response latency remains below 300ms successfully under reference LOAD_221.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-LOAD-221
- **Execution Time:** 5.7s
- **Evidence:** logs/TS_LOAD_221_execution.log

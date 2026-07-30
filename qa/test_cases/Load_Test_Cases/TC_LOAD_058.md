# Test Case: TC_LOAD_058

- **Test Case ID:** TC_LOAD_058
- **Module:** SymptomTracking
- **Feature:** inspect memory consumption for /api/data/symptoms DELETE route during peak hours scheduling traffic
- **Test Title:** Verify behavior of /api/data/symptoms DELETE route during attempts to inspect memory consumption during peak hours scheduling traffic
- **Objective:** Evaluate that user can safely execute inspect memory consumption for /api/data/symptoms DELETE route during peak hours scheduling traffic under system checks.
- **Requirement ID:** REQ-LOAD-058
- **Preconditions:** System state is reset, and target console is directed to /api/data/symptoms DELETE route configuration during peak hours scheduling traffic (Ref LOAD_058).
- **Test Steps:**
1. Target active interface for /api/data/symptoms DELETE route.
2. Trigger action to inspect memory consumption during peak hours scheduling traffic.
3. Collect audit logs and confirm status code validation (Check LOAD_058).
- **Test Data:** Target: /api/data/symptoms DELETE route, Action: inspect memory consumption, Parameters: during peak hours scheduling traffic, Case Index: LOAD_058
- **Expected Result:** The verification checks confirm that the log parser executes without writing delay successfully under reference LOAD_058.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-LOAD-058
- **Execution Time:** 14.1s
- **Evidence:** logs/TC_LOAD_058_execution.log

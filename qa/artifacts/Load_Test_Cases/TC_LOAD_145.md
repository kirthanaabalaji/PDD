# Test Case: TC_LOAD_145

- **Test Case ID:** TC_LOAD_145
- **Module:** AIChat
- **Feature:** audit database query times for /api/chat messaging endpoint under continuous memory heap pressure
- **Test Title:** Verify behavior of /api/chat messaging endpoint during attempts to audit database query times under continuous memory heap pressure
- **Objective:** Evaluate that user can safely execute audit database query times for /api/chat messaging endpoint under continuous memory heap pressure under system checks.
- **Requirement ID:** REQ-LOAD-145
- **Preconditions:** System state is reset, and target console is directed to /api/chat messaging endpoint configuration under continuous memory heap pressure (Ref LOAD_145).
- **Test Steps:**
1. Target active interface for /api/chat messaging endpoint.
2. Trigger action to audit database query times under continuous memory heap pressure.
3. Collect audit logs and confirm status code validation (Check LOAD_145).
- **Test Data:** Target: /api/chat messaging endpoint, Action: audit database query times, Parameters: under continuous memory heap pressure, Case Index: LOAD_145
- **Expected Result:** The verification checks confirm that the error rate stays under 1 percent successfully under reference LOAD_145.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-LOAD-145
- **Execution Time:** 10.5s
- **Evidence:** logs/TC_LOAD_145_execution.log

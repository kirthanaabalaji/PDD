# Test Case: TC_LOAD_095

- **Test Case ID:** TC_LOAD_095
- **Module:** AIChat
- **Feature:** check error rate threshold for /api/chat messaging endpoint with 500 concurrent virtual users
- **Test Title:** Verify behavior of /api/chat messaging endpoint during attempts to check error rate threshold with 500 concurrent virtual users
- **Objective:** Evaluate that user can safely execute check error rate threshold for /api/chat messaging endpoint with 500 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-095
- **Preconditions:** System state is reset, and target console is directed to /api/chat messaging endpoint configuration with 500 concurrent virtual users (Ref LOAD_095).
- **Test Steps:**
1. Target active interface for /api/chat messaging endpoint.
2. Trigger action to check error rate threshold with 500 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_095).
- **Test Data:** Target: /api/chat messaging endpoint, Action: check error rate threshold, Parameters: with 500 concurrent virtual users, Case Index: LOAD_095
- **Expected Result:** The verification checks confirm that the CPU execution load peaks below 80 percent successfully under reference LOAD_095.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-095
- **Execution Time:** 10.5s
- **Evidence:** logs/TC_LOAD_095_execution.log

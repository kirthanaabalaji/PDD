# Test Case: TS_LOAD_266

- **Test Case ID:** TS_LOAD_266
- **Module:** Database
- **Feature:** evaluate connection pool reuse for Rate limiting API gateway with 500 concurrent virtual users
- **Test Title:** Verify behavior of Rate limiting API gateway during attempts to evaluate connection pool reuse with 500 concurrent virtual users
- **Objective:** Evaluate that user can safely execute evaluate connection pool reuse for Rate limiting API gateway with 500 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-266
- **Preconditions:** System state is reset, and target console is directed to Rate limiting API gateway configuration with 500 concurrent virtual users (Ref LOAD_266).
- **Test Steps:**
1. Target active interface for Rate limiting API gateway.
2. Trigger action to evaluate connection pool reuse with 500 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_266).
- **Test Data:** Target: Rate limiting API gateway, Action: evaluate connection pool reuse, Parameters: with 500 concurrent virtual users, Case Index: LOAD_266
- **Expected Result:** The verification checks confirm that the query index optimization prevents locks successfully under reference LOAD_266.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-LOAD-266
- **Execution Time:** 11.7s
- **Evidence:** logs/TS_LOAD_266_execution.log

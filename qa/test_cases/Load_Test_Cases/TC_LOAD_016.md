# Test Case: TC_LOAD_016

- **Test Case ID:** TC_LOAD_016
- **Module:** Database
- **Feature:** inspect memory consumption for Rate limiting API gateway with unindexed database query filters
- **Test Title:** Verify behavior of Rate limiting API gateway during attempts to inspect memory consumption with unindexed database query filters
- **Objective:** Evaluate that user can safely execute inspect memory consumption for Rate limiting API gateway with unindexed database query filters under system checks.
- **Requirement ID:** REQ-LOAD-016
- **Preconditions:** System state is reset, and target console is directed to Rate limiting API gateway configuration with unindexed database query filters (Ref LOAD_016).
- **Test Steps:**
1. Target active interface for Rate limiting API gateway.
2. Trigger action to inspect memory consumption with unindexed database query filters.
3. Collect audit logs and confirm status code validation (Check LOAD_016).
- **Test Data:** Target: Rate limiting API gateway, Action: inspect memory consumption, Parameters: with unindexed database query filters, Case Index: LOAD_016
- **Expected Result:** The verification checks confirm that the server restarts within execution limits successfully under reference LOAD_016.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-LOAD-016
- **Execution Time:** 11.7s
- **Evidence:** logs/TC_LOAD_016_execution.log

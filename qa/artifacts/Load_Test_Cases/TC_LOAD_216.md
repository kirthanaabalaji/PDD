# Test Case: TC_LOAD_216

- **Test Case ID:** TC_LOAD_216
- **Module:** Database
- **Feature:** test queue backlog latency for Rate limiting API gateway with 2000 concurrent virtual users
- **Test Title:** Verify behavior of Rate limiting API gateway during attempts to test queue backlog latency with 2000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute test queue backlog latency for Rate limiting API gateway with 2000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-216
- **Preconditions:** System state is reset, and target console is directed to Rate limiting API gateway configuration with 2000 concurrent virtual users (Ref LOAD_216).
- **Test Steps:**
1. Target active interface for Rate limiting API gateway.
2. Trigger action to test queue backlog latency with 2000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_216).
- **Test Data:** Target: Rate limiting API gateway, Action: test queue backlog latency, Parameters: with 2000 concurrent virtual users, Case Index: LOAD_216
- **Expected Result:** The verification checks confirm that the autoscaling rules provision extra nodes successfully under reference LOAD_216.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-LOAD-216
- **Execution Time:** 11.7s
- **Evidence:** logs/TC_LOAD_216_execution.log

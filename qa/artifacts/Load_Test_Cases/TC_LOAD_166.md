# Test Case: TC_LOAD_166

- **Test Case ID:** TC_LOAD_166
- **Module:** Database
- **Feature:** audit database query times for Rate limiting API gateway on database replica set failover
- **Test Title:** Verify behavior of Rate limiting API gateway during attempts to audit database query times on database replica set failover
- **Objective:** Evaluate that user can safely execute audit database query times for Rate limiting API gateway on database replica set failover under system checks.
- **Requirement ID:** REQ-LOAD-166
- **Preconditions:** System state is reset, and target console is directed to Rate limiting API gateway configuration on database replica set failover (Ref LOAD_166).
- **Test Steps:**
1. Target active interface for Rate limiting API gateway.
2. Trigger action to audit database query times on database replica set failover.
3. Collect audit logs and confirm status code validation (Check LOAD_166).
- **Test Data:** Target: Rate limiting API gateway, Action: audit database query times, Parameters: on database replica set failover, Case Index: LOAD_166
- **Expected Result:** The verification checks confirm that the failover route restores active states successfully under reference LOAD_166.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-LOAD-166
- **Execution Time:** 11.7s
- **Evidence:** logs/TC_LOAD_166_execution.log

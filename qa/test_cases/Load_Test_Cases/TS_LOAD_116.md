# Test Case: TS_LOAD_116

- **Test Case ID:** TS_LOAD_116
- **Module:** Database
- **Feature:** check error rate threshold for Rate limiting API gateway with large audio attachment uploads
- **Test Title:** Verify behavior of Rate limiting API gateway during attempts to check error rate threshold with large audio attachment uploads
- **Objective:** Evaluate that user can safely execute check error rate threshold for Rate limiting API gateway with large audio attachment uploads under system checks.
- **Requirement ID:** REQ-LOAD-116
- **Preconditions:** System state is reset, and target console is directed to Rate limiting API gateway configuration with large audio attachment uploads (Ref LOAD_116).
- **Test Steps:**
1. Target active interface for Rate limiting API gateway.
2. Trigger action to check error rate threshold with large audio attachment uploads.
3. Collect audit logs and confirm status code validation (Check LOAD_116).
- **Test Data:** Target: Rate limiting API gateway, Action: check error rate threshold, Parameters: with large audio attachment uploads, Case Index: LOAD_116
- **Expected Result:** The verification checks confirm that the system throughput scales linearly successfully under reference LOAD_116.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-LOAD-116
- **Execution Time:** 11.7s
- **Evidence:** logs/TS_LOAD_116_execution.log

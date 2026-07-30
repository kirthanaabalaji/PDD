# Test Case: TC_LOAD_068

- **Test Case ID:** TC_LOAD_068
- **Module:** Authentication
- **Feature:** test failover routing times for /api/auth/emergency-contact updater when downstream Groq service is throttled
- **Test Title:** Verify behavior of /api/auth/emergency-contact updater during attempts to test failover routing times when downstream Groq service is throttled
- **Objective:** Evaluate that user can safely execute test failover routing times for /api/auth/emergency-contact updater when downstream Groq service is throttled under system checks.
- **Requirement ID:** REQ-LOAD-068
- **Preconditions:** System state is reset, and target console is directed to /api/auth/emergency-contact updater configuration when downstream Groq service is throttled (Ref LOAD_068).
- **Test Steps:**
1. Target active interface for /api/auth/emergency-contact updater.
2. Trigger action to test failover routing times when downstream Groq service is throttled.
3. Collect audit logs and confirm status code validation (Check LOAD_068).
- **Test Data:** Target: /api/auth/emergency-contact updater, Action: test failover routing times, Parameters: when downstream Groq service is throttled, Case Index: LOAD_068
- **Expected Result:** The verification checks confirm that the response latency remains below 300ms successfully under reference LOAD_068.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-LOAD-068
- **Execution Time:** 14.1s
- **Evidence:** logs/TC_LOAD_068_execution.log

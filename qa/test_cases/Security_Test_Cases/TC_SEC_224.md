# Test Case: TC_SEC_224

- **Test Case ID:** TC_SEC_224
- **Module:** IDOR
- **Feature:** inspect logs for exposed keys for IDOR checks on AI chat messages during server internal log dumping
- **Test Title:** Verify behavior of IDOR checks on AI chat messages during attempts to inspect logs for exposed keys during server internal log dumping
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for IDOR checks on AI chat messages during server internal log dumping under system checks.
- **Requirement ID:** REQ-SEC-224
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on AI chat messages configuration during server internal log dumping (Ref SEC_224).
- **Test Steps:**
1. Target active interface for IDOR checks on AI chat messages.
2. Trigger action to inspect logs for exposed keys during server internal log dumping.
3. Collect audit logs and confirm status code validation (Check SEC_224).
- **Test Data:** Target: IDOR checks on AI chat messages, Action: inspect logs for exposed keys, Parameters: during server internal log dumping, Case Index: SEC_224
- **Expected Result:** The verification checks confirm that the authentication rate limiter blocks IP successfully under reference SEC_224.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEC-224
- **Execution Time:** 0.440s
- **Evidence:** logs/TC_SEC_224_execution.log

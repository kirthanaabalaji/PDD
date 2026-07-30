# Test Case: TS_SEC_069

- **Test Case ID:** TS_SEC_069
- **Module:** AccessControl
- **Feature:** audit brute force block speed for server-side request forgery checks under unencrypted transport layer check
- **Test Title:** Verify behavior of server-side request forgery checks during attempts to audit brute force block speed under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute audit brute force block speed for server-side request forgery checks under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-069
- **Preconditions:** System state is reset, and target console is directed to server-side request forgery checks configuration under unencrypted transport layer check (Ref SEC_069).
- **Test Steps:**
1. Target active interface for server-side request forgery checks.
2. Trigger action to audit brute force block speed under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_069).
- **Test Data:** Target: server-side request forgery checks, Action: audit brute force block speed, Parameters: under unencrypted transport layer check, Case Index: SEC_069
- **Expected Result:** The verification checks confirm that the system rejects the tampered token successfully under reference SEC_069.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-069
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_069_execution.log

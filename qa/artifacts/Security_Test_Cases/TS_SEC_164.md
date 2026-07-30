# Test Case: TS_SEC_164

- **Test Case ID:** TS_SEC_164
- **Module:** AccessControl
- **Feature:** verify cascade data wiping for Groq endpoint token allocation quota under unencrypted transport layer check
- **Test Title:** Verify behavior of Groq endpoint token allocation quota during attempts to verify cascade data wiping under unencrypted transport layer check
- **Objective:** Evaluate that user can safely execute verify cascade data wiping for Groq endpoint token allocation quota under unencrypted transport layer check under system checks.
- **Requirement ID:** REQ-SEC-164
- **Preconditions:** System state is reset, and target console is directed to Groq endpoint token allocation quota configuration under unencrypted transport layer check (Ref SEC_164).
- **Test Steps:**
1. Target active interface for Groq endpoint token allocation quota.
2. Trigger action to verify cascade data wiping under unencrypted transport layer check.
3. Collect audit logs and confirm status code validation (Check SEC_164).
- **Test Data:** Target: Groq endpoint token allocation quota, Action: verify cascade data wiping, Parameters: under unencrypted transport layer check, Case Index: SEC_164
- **Expected Result:** The verification checks confirm that the upload fails with file format error successfully under reference SEC_164.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEC-164
- **Execution Time:** 0.440s
- **Evidence:** logs/TS_SEC_164_execution.log

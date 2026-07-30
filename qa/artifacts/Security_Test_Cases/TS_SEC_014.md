# Test Case: TS_SEC_014

- **Test Case ID:** TS_SEC_014
- **Module:** AccessControl
- **Feature:** inspect logs for exposed keys for Groq endpoint token allocation quota without providing auth token headers
- **Test Title:** Verify behavior of Groq endpoint token allocation quota during attempts to inspect logs for exposed keys without providing auth token headers
- **Objective:** Evaluate that user can safely execute inspect logs for exposed keys for Groq endpoint token allocation quota without providing auth token headers under system checks.
- **Requirement ID:** REQ-SEC-014
- **Preconditions:** System state is reset, and target console is directed to Groq endpoint token allocation quota configuration without providing auth token headers (Ref SEC_014).
- **Test Steps:**
1. Target active interface for Groq endpoint token allocation quota.
2. Trigger action to inspect logs for exposed keys without providing auth token headers.
3. Collect audit logs and confirm status code validation (Check SEC_014).
- **Test Data:** Target: Groq endpoint token allocation quota, Action: inspect logs for exposed keys, Parameters: without providing auth token headers, Case Index: SEC_014
- **Expected Result:** The verification checks confirm that the request is blocked by payload validator successfully under reference SEC_014.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-014
- **Execution Time:** 0.440s
- **Evidence:** logs/TS_SEC_014_execution.log

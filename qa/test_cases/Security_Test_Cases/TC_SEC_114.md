# Test Case: TC_SEC_114

- **Test Case ID:** TC_SEC_114
- **Module:** AccessControl
- **Feature:** check cookie storage configurations for Groq endpoint token allocation quota using malicious string payloads
- **Test Title:** Verify behavior of Groq endpoint token allocation quota during attempts to check cookie storage configurations using malicious string payloads
- **Objective:** Evaluate that user can safely execute check cookie storage configurations for Groq endpoint token allocation quota using malicious string payloads under system checks.
- **Requirement ID:** REQ-SEC-114
- **Preconditions:** System state is reset, and target console is directed to Groq endpoint token allocation quota configuration using malicious string payloads (Ref SEC_114).
- **Test Steps:**
1. Target active interface for Groq endpoint token allocation quota.
2. Trigger action to check cookie storage configurations using malicious string payloads.
3. Collect audit logs and confirm status code validation (Check SEC_114).
- **Test Data:** Target: Groq endpoint token allocation quota, Action: check cookie storage configurations, Parameters: using malicious string payloads, Case Index: SEC_114
- **Expected Result:** The verification checks confirm that the system does not expose credentials successfully under reference SEC_114.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-114
- **Execution Time:** 0.440s
- **Evidence:** logs/TC_SEC_114_execution.log

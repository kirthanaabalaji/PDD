# Test Case: TS_SEC_149

- **Test Case ID:** TS_SEC_149
- **Module:** AccessControl
- **Feature:** evaluate privilege escalation bypass for broken session handling invalidator upon user profile account deletion
- **Test Title:** Verify behavior of broken session handling invalidator during attempts to evaluate privilege escalation bypass upon user profile account deletion
- **Objective:** Evaluate that user can safely execute evaluate privilege escalation bypass for broken session handling invalidator upon user profile account deletion under system checks.
- **Requirement ID:** REQ-SEC-149
- **Preconditions:** System state is reset, and target console is directed to broken session handling invalidator configuration upon user profile account deletion (Ref SEC_149).
- **Test Steps:**
1. Target active interface for broken session handling invalidator.
2. Trigger action to evaluate privilege escalation bypass upon user profile account deletion.
3. Collect audit logs and confirm status code validation (Check SEC_149).
- **Test Data:** Target: broken session handling invalidator, Action: evaluate privilege escalation bypass, Parameters: upon user profile account deletion, Case Index: SEC_149
- **Expected Result:** The verification checks confirm that the cookie values cannot be read by Javascript successfully under reference SEC_149.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-149
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_149_execution.log

# Test Case: TS_SEC_299

- **Test Case ID:** TS_SEC_299
- **Module:** AccessControl
- **Feature:** verify CSRF validation defenses for broken session handling invalidator without providing auth token headers
- **Test Title:** Verify behavior of broken session handling invalidator during attempts to verify CSRF validation defenses without providing auth token headers
- **Objective:** Evaluate that user can safely execute verify CSRF validation defenses for broken session handling invalidator without providing auth token headers under system checks.
- **Requirement ID:** REQ-SEC-299
- **Preconditions:** System state is reset, and target console is directed to broken session handling invalidator configuration without providing auth token headers (Ref SEC_299).
- **Test Steps:**
1. Target active interface for broken session handling invalidator.
2. Trigger action to verify CSRF validation defenses without providing auth token headers.
3. Collect audit logs and confirm status code validation (Check SEC_299).
- **Test Data:** Target: broken session handling invalidator, Action: verify CSRF validation defenses, Parameters: without providing auth token headers, Case Index: SEC_299
- **Expected Result:** The verification checks confirm that the server blocks the unauthorized data access successfully under reference SEC_299.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEC-299
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_299_execution.log

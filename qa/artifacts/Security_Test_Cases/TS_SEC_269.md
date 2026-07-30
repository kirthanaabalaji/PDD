# Test Case: TS_SEC_269

- **Test Case ID:** TS_SEC_269
- **Module:** AccessControl
- **Feature:** verify cascade data wiping for server-side request forgery checks for client local cookie storage
- **Test Title:** Verify behavior of server-side request forgery checks during attempts to verify cascade data wiping for client local cookie storage
- **Objective:** Evaluate that user can safely execute verify cascade data wiping for server-side request forgery checks for client local cookie storage under system checks.
- **Requirement ID:** REQ-SEC-269
- **Preconditions:** System state is reset, and target console is directed to server-side request forgery checks configuration for client local cookie storage (Ref SEC_269).
- **Test Steps:**
1. Target active interface for server-side request forgery checks.
2. Trigger action to verify cascade data wiping for client local cookie storage.
3. Collect audit logs and confirm status code validation (Check SEC_269).
- **Test Data:** Target: server-side request forgery checks, Action: verify cascade data wiping, Parameters: for client local cookie storage, Case Index: SEC_269
- **Expected Result:** The verification checks confirm that the request is blocked by payload validator successfully under reference SEC_269.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEC-269
- **Execution Time:** 0.840s
- **Evidence:** logs/TS_SEC_269_execution.log

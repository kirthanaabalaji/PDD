# Test Case: TS_SEC_117

- **Test Case ID:** TS_SEC_117
- **Module:** AccessControl
- **Feature:** inspect routing for open redirect for emergency contact phone text validation for client local cookie storage
- **Test Title:** Verify behavior of emergency contact phone text validation during attempts to inspect routing for open redirect for client local cookie storage
- **Objective:** Evaluate that user can safely execute inspect routing for open redirect for emergency contact phone text validation for client local cookie storage under system checks.
- **Requirement ID:** REQ-SEC-117
- **Preconditions:** System state is reset, and target console is directed to emergency contact phone text validation configuration for client local cookie storage (Ref SEC_117).
- **Test Steps:**
1. Target active interface for emergency contact phone text validation.
2. Trigger action to inspect routing for open redirect for client local cookie storage.
3. Collect audit logs and confirm status code validation (Check SEC_117).
- **Test Data:** Target: emergency contact phone text validation, Action: inspect routing for open redirect, Parameters: for client local cookie storage, Case Index: SEC_117
- **Expected Result:** The verification checks confirm that the backend blocks terminal execution successfully under reference SEC_117.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-117
- **Execution Time:** 0.680s
- **Evidence:** logs/TS_SEC_117_execution.log

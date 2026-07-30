# Test Case: TS_SEC_177

- **Test Case ID:** TS_SEC_177
- **Module:** SQLi
- **Feature:** check cookie storage configurations for unauthenticated route access controls using prompt injection context escape
- **Test Title:** Verify behavior of unauthenticated route access controls during attempts to check cookie storage configurations using prompt injection context escape
- **Objective:** Evaluate that user can safely execute check cookie storage configurations for unauthenticated route access controls using prompt injection context escape under system checks.
- **Requirement ID:** REQ-SEC-177
- **Preconditions:** System state is reset, and target console is directed to unauthenticated route access controls configuration using prompt injection context escape (Ref SEC_177).
- **Test Steps:**
1. Target active interface for unauthenticated route access controls.
2. Trigger action to check cookie storage configurations using prompt injection context escape.
3. Collect audit logs and confirm status code validation (Check SEC_177).
- **Test Data:** Target: unauthenticated route access controls, Action: check cookie storage configurations, Parameters: using prompt injection context escape, Case Index: SEC_177
- **Expected Result:** The verification checks confirm that the relative path escape fails to load successfully under reference SEC_177.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-177
- **Execution Time:** 0.680s
- **Evidence:** logs/TS_SEC_177_execution.log

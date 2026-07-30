# Test Case: TS_APP_273

- **Test Case ID:** TS_APP_273
- **Module:** Settings
- **Feature:** verify permission dialogue for warm start wake sequence when background execution is suspended
- **Test Title:** Verify behavior of warm start wake sequence during attempts to verify permission dialogue when background execution is suspended
- **Objective:** Evaluate that user can safely execute verify permission dialogue for warm start wake sequence when background execution is suspended under system checks.
- **Requirement ID:** REQ-APP-273
- **Preconditions:** System state is reset, and target console is directed to warm start wake sequence configuration when background execution is suspended (Ref APP_273).
- **Test Steps:**
1. Target active interface for warm start wake sequence.
2. Trigger action to verify permission dialogue when background execution is suspended.
3. Collect audit logs and confirm status code validation (Check APP_273).
- **Test Data:** Target: warm start wake sequence, Action: verify permission dialogue, Parameters: when background execution is suspended, Case Index: APP_273
- **Expected Result:** The verification checks confirm that the layout switches to landscape mode successfully under reference APP_273.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-APP-273
- **Execution Time:** 2.25s
- **Evidence:** evidence/TS_APP_273_success.png

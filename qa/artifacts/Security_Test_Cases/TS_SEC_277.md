# Test Case: TS_SEC_277

- **Test Case ID:** TS_SEC_277
- **Module:** SQLi
- **Feature:** test parameter parsing pollution for unauthenticated route access controls using relative path traversing dots
- **Test Title:** Verify behavior of unauthenticated route access controls during attempts to test parameter parsing pollution using relative path traversing dots
- **Objective:** Evaluate that user can safely execute test parameter parsing pollution for unauthenticated route access controls using relative path traversing dots under system checks.
- **Requirement ID:** REQ-SEC-277
- **Preconditions:** System state is reset, and target console is directed to unauthenticated route access controls configuration using relative path traversing dots (Ref SEC_277).
- **Test Steps:**
1. Target active interface for unauthenticated route access controls.
2. Trigger action to test parameter parsing pollution using relative path traversing dots.
3. Collect audit logs and confirm status code validation (Check SEC_277).
- **Test Data:** Target: unauthenticated route access controls, Action: test parameter parsing pollution, Parameters: using relative path traversing dots, Case Index: SEC_277
- **Expected Result:** The verification checks confirm that the dependent tables are fully wiped successfully under reference SEC_277.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-277
- **Execution Time:** 0.680s
- **Evidence:** logs/TS_SEC_277_execution.log

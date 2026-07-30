# Test Case: TS_SEL_068

- **Test Case ID:** TS_SEL_068
- **Module:** Authentication
- **Feature:** measure execution time for session timeout idle alert for special character strings
- **Test Title:** Verify behavior of session timeout idle alert during attempts to measure execution time for special character strings
- **Objective:** Evaluate that user can safely execute measure execution time for session timeout idle alert for special character strings under system checks.
- **Requirement ID:** REQ-SEL-068
- **Preconditions:** System state is reset, and target console is directed to session timeout idle alert configuration for special character strings (Ref SEL_068).
- **Test Steps:**
1. Target active interface for session timeout idle alert.
2. Trigger action to measure execution time for special character strings.
3. Collect audit logs and confirm status code validation (Check SEL_068).
- **Test Data:** Target: session timeout idle alert, Action: measure execution time, Parameters: for special character strings, Case Index: SEL_068
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_068.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-068
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_068_success.png

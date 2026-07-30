# Test Case: TS_SEL_278

- **Test Case ID:** TS_SEL_278
- **Module:** Settings
- **Feature:** measure execution time for emergency contact name entry after five minutes of inactivity
- **Test Title:** Verify behavior of emergency contact name entry during attempts to measure execution time after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute measure execution time for emergency contact name entry after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-278
- **Preconditions:** System state is reset, and target console is directed to emergency contact name entry configuration after five minutes of inactivity (Ref SEL_278).
- **Test Steps:**
1. Target active interface for emergency contact name entry.
2. Trigger action to measure execution time after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_278).
- **Test Data:** Target: emergency contact name entry, Action: measure execution time, Parameters: after five minutes of inactivity, Case Index: SEL_278
- **Expected Result:** The verification checks confirm that the response payload is fully parsed successfully under reference SEL_278.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-278
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_278_success.png

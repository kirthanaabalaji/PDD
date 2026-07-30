# Test Case: TS_SEL_089

- **Test Case ID:** TS_SEL_089
- **Module:** Dashboard
- **Feature:** measure execution time for quick actions shortcuts bar using invalid credentials
- **Test Title:** Verify behavior of quick actions shortcuts bar during attempts to measure execution time using invalid credentials
- **Objective:** Evaluate that user can safely execute measure execution time for quick actions shortcuts bar using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-089
- **Preconditions:** System state is reset, and target console is directed to quick actions shortcuts bar configuration using invalid credentials (Ref SEL_089).
- **Test Steps:**
1. Target active interface for quick actions shortcuts bar.
2. Trigger action to measure execution time using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_089).
- **Test Data:** Target: quick actions shortcuts bar, Action: measure execution time, Parameters: using invalid credentials, Case Index: SEL_089
- **Expected Result:** The verification checks confirm that the toast error alert is rendered successfully under reference SEL_089.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-SEL-089
- **Execution Time:** 0.840s
- **Evidence:** evidence/TS_SEL_089_success.png

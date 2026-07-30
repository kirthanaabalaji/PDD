# Test Case: TS_SEL_110

- **Test Case ID:** TS_SEL_110
- **Module:** SymptomTracking
- **Feature:** measure execution time for symptom log severity score slider when cookies are blocked
- **Test Title:** Verify behavior of symptom log severity score slider during attempts to measure execution time when cookies are blocked
- **Objective:** Evaluate that user can safely execute measure execution time for symptom log severity score slider when cookies are blocked under system checks.
- **Requirement ID:** REQ-SEL-110
- **Preconditions:** System state is reset, and target console is directed to symptom log severity score slider configuration when cookies are blocked (Ref SEL_110).
- **Test Steps:**
1. Target active interface for symptom log severity score slider.
2. Trigger action to measure execution time when cookies are blocked.
3. Collect audit logs and confirm status code validation (Check SEL_110).
- **Test Data:** Target: symptom log severity score slider, Action: measure execution time, Parameters: when cookies are blocked, Case Index: SEL_110
- **Expected Result:** The verification checks confirm that the token is renewed seamlessly successfully under reference SEL_110.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-110
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_110_success.png

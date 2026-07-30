# Test Case: TS_SEL_163

- **Test Case ID:** TS_SEL_163
- **Module:** SymptomTracking
- **Feature:** reset options for symptom log trigger selection checkboxes for special character strings
- **Test Title:** Verify behavior of symptom log trigger selection checkboxes during attempts to reset options for special character strings
- **Objective:** Evaluate that user can safely execute reset options for symptom log trigger selection checkboxes for special character strings under system checks.
- **Requirement ID:** REQ-SEL-163
- **Preconditions:** System state is reset, and target console is directed to symptom log trigger selection checkboxes configuration for special character strings (Ref SEL_163).
- **Test Steps:**
1. Target active interface for symptom log trigger selection checkboxes.
2. Trigger action to reset options for special character strings.
3. Collect audit logs and confirm status code validation (Check SEL_163).
- **Test Data:** Target: symptom log trigger selection checkboxes, Action: reset options, Parameters: for special character strings, Case Index: SEL_163
- **Expected Result:** The verification checks confirm that the browser console shows no errors successfully under reference SEL_163.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-163
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_163_success.png

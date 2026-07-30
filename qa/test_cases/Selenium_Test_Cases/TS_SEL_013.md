# Test Case: TS_SEL_013

- **Test Case ID:** TS_SEL_013
- **Module:** SymptomTracking
- **Feature:** validate text alignment for symptom log trigger selection checkboxes using invalid credentials
- **Test Title:** Verify behavior of symptom log trigger selection checkboxes during attempts to validate text alignment using invalid credentials
- **Objective:** Evaluate that user can safely execute validate text alignment for symptom log trigger selection checkboxes using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-013
- **Preconditions:** System state is reset, and target console is directed to symptom log trigger selection checkboxes configuration using invalid credentials (Ref SEL_013).
- **Test Steps:**
1. Target active interface for symptom log trigger selection checkboxes.
2. Trigger action to validate text alignment using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_013).
- **Test Data:** Target: symptom log trigger selection checkboxes, Action: validate text alignment, Parameters: using invalid credentials, Case Index: SEL_013
- **Expected Result:** The verification checks confirm that the local storage key is deleted successfully under reference SEL_013.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-013
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_013_success.png

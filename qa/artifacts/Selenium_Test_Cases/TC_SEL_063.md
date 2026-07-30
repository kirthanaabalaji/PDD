# Test Case: TC_SEL_063

- **Test Case ID:** TC_SEL_063
- **Module:** SymptomTracking
- **Feature:** validate fields for symptom log trigger selection checkboxes when file size exceeds limit
- **Test Title:** Verify behavior of symptom log trigger selection checkboxes during attempts to validate fields when file size exceeds limit
- **Objective:** Evaluate that user can safely execute validate fields for symptom log trigger selection checkboxes when file size exceeds limit under system checks.
- **Requirement ID:** REQ-SEL-063
- **Preconditions:** System state is reset, and target console is directed to symptom log trigger selection checkboxes configuration when file size exceeds limit (Ref SEL_063).
- **Test Steps:**
1. Target active interface for symptom log trigger selection checkboxes.
2. Trigger action to validate fields when file size exceeds limit.
3. Collect audit logs and confirm status code validation (Check SEL_063).
- **Test Data:** Target: symptom log trigger selection checkboxes, Action: validate fields, Parameters: when file size exceeds limit, Case Index: SEL_063
- **Expected Result:** The verification checks confirm that the cookies are cleared from storage successfully under reference SEL_063.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-063
- **Execution Time:** 0.360s
- **Evidence:** evidence/TC_SEL_063_success.png

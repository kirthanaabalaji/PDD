# Test Case: TC_SEL_060

- **Test Case ID:** TC_SEL_060
- **Module:** SymptomTracking
- **Feature:** test tooltips display for symptom log severity score slider using cross-site scripting strings
- **Test Title:** Verify behavior of symptom log severity score slider during attempts to test tooltips display using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute test tooltips display for symptom log severity score slider using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-060
- **Preconditions:** System state is reset, and target console is directed to symptom log severity score slider configuration using cross-site scripting strings (Ref SEL_060).
- **Test Steps:**
1. Target active interface for symptom log severity score slider.
2. Trigger action to test tooltips display using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_060).
- **Test Data:** Target: symptom log severity score slider, Action: test tooltips display, Parameters: using cross-site scripting strings, Case Index: SEL_060
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_060.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-060
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_060_success.png

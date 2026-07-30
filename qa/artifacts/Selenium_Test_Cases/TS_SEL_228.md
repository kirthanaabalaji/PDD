# Test Case: TS_SEL_228

- **Test Case ID:** TS_SEL_228
- **Module:** Settings
- **Feature:** test tooltips display for emergency contact name entry with empty values
- **Test Title:** Verify behavior of emergency contact name entry during attempts to test tooltips display with empty values
- **Objective:** Evaluate that user can safely execute test tooltips display for emergency contact name entry with empty values under system checks.
- **Requirement ID:** REQ-SEL-228
- **Preconditions:** System state is reset, and target console is directed to emergency contact name entry configuration with empty values (Ref SEL_228).
- **Test Steps:**
1. Target active interface for emergency contact name entry.
2. Trigger action to test tooltips display with empty values.
3. Collect audit logs and confirm status code validation (Check SEL_228).
- **Test Data:** Target: emergency contact name entry, Action: test tooltips display, Parameters: with empty values, Case Index: SEL_228
- **Expected Result:** The verification checks confirm that the download begins automatically successfully under reference SEL_228.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-SEL-228
- **Execution Time:** 0.760s
- **Evidence:** evidence/TS_SEL_228_success.png

# Test Case: TS_SEL_102

- **Test Case ID:** TS_SEL_102
- **Module:** Authentication
- **Feature:** test tooltips display for multi-tab login state sync when network speed is throttled
- **Test Title:** Verify behavior of multi-tab login state sync during attempts to test tooltips display when network speed is throttled
- **Objective:** Evaluate that user can safely execute test tooltips display for multi-tab login state sync when network speed is throttled under system checks.
- **Requirement ID:** REQ-SEL-102
- **Preconditions:** System state is reset, and target console is directed to multi-tab login state sync configuration when network speed is throttled (Ref SEL_102).
- **Test Steps:**
1. Target active interface for multi-tab login state sync.
2. Trigger action to test tooltips display when network speed is throttled.
3. Collect audit logs and confirm status code validation (Check SEL_102).
- **Test Data:** Target: multi-tab login state sync, Action: test tooltips display, Parameters: when network speed is throttled, Case Index: SEL_102
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_102.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-102
- **Execution Time:** 0.280s
- **Evidence:** evidence/TS_SEL_102_success.png

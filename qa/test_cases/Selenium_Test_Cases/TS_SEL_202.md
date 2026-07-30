# Test Case: TS_SEL_202

- **Test Case ID:** TS_SEL_202
- **Module:** Authentication
- **Feature:** validate text alignment for multi-tab login state sync after five minutes of inactivity
- **Test Title:** Verify behavior of multi-tab login state sync during attempts to validate text alignment after five minutes of inactivity
- **Objective:** Evaluate that user can safely execute validate text alignment for multi-tab login state sync after five minutes of inactivity under system checks.
- **Requirement ID:** REQ-SEL-202
- **Preconditions:** System state is reset, and target console is directed to multi-tab login state sync configuration after five minutes of inactivity (Ref SEL_202).
- **Test Steps:**
1. Target active interface for multi-tab login state sync.
2. Trigger action to validate text alignment after five minutes of inactivity.
3. Collect audit logs and confirm status code validation (Check SEL_202).
- **Test Data:** Target: multi-tab login state sync, Action: validate text alignment, Parameters: after five minutes of inactivity, Case Index: SEL_202
- **Expected Result:** The verification checks confirm that the animation runs smoothly at 60fps successfully under reference SEL_202.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-202
- **Execution Time:** 0.280s
- **Evidence:** evidence/TS_SEL_202_success.png

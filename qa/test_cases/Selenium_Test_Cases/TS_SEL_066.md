# Test Case: TS_SEL_066

- **Test Case ID:** TS_SEL_066
- **Module:** ClinicalReports
- **Feature:** verify layout rendering for clinical PDF report print dialog during api gateway timeout
- **Test Title:** Verify behavior of clinical PDF report print dialog during attempts to verify layout rendering during api gateway timeout
- **Objective:** Evaluate that user can safely execute verify layout rendering for clinical PDF report print dialog during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-066
- **Preconditions:** System state is reset, and target console is directed to clinical PDF report print dialog configuration during api gateway timeout (Ref SEL_066).
- **Test Steps:**
1. Target active interface for clinical PDF report print dialog.
2. Trigger action to verify layout rendering during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_066).
- **Test Data:** Target: clinical PDF report print dialog, Action: verify layout rendering, Parameters: during api gateway timeout, Case Index: SEL_066
- **Expected Result:** The verification checks confirm that the animation runs smoothly at 60fps successfully under reference SEL_066.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-066
- **Execution Time:** 0.600s
- **Evidence:** evidence/TS_SEL_066_success.png

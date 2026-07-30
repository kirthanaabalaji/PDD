# Test Case: TC_SEL_253

- **Test Case ID:** TC_SEL_253
- **Module:** Authentication
- **Feature:** track cookie changes for registration email validation when file size exceeds limit
- **Test Title:** Verify behavior of registration email validation during attempts to track cookie changes when file size exceeds limit
- **Objective:** Evaluate that user can safely execute track cookie changes for registration email validation when file size exceeds limit under system checks.
- **Requirement ID:** REQ-SEL-253
- **Preconditions:** System state is reset, and target console is directed to registration email validation configuration when file size exceeds limit (Ref SEL_253).
- **Test Steps:**
1. Target active interface for registration email validation.
2. Trigger action to track cookie changes when file size exceeds limit.
3. Collect audit logs and confirm status code validation (Check SEL_253).
- **Test Data:** Target: registration email validation, Action: track cookie changes, Parameters: when file size exceeds limit, Case Index: SEL_253
- **Expected Result:** The verification checks confirm that the animation runs smoothly at 60fps successfully under reference SEL_253.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEL-253
- **Execution Time:** 0.360s
- **Evidence:** evidence/TC_SEL_253_success.png

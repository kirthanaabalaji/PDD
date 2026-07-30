# Test Case: TC_SEL_256

- **Test Case ID:** TC_SEL_256
- **Module:** Authentication
- **Feature:** validate regex matching for forgot password security link during api gateway timeout
- **Test Title:** Verify behavior of forgot password security link during attempts to validate regex matching during api gateway timeout
- **Objective:** Evaluate that user can safely execute validate regex matching for forgot password security link during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-256
- **Preconditions:** System state is reset, and target console is directed to forgot password security link configuration during api gateway timeout (Ref SEL_256).
- **Test Steps:**
1. Target active interface for forgot password security link.
2. Trigger action to validate regex matching during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_256).
- **Test Data:** Target: forgot password security link, Action: validate regex matching, Parameters: during api gateway timeout, Case Index: SEL_256
- **Expected Result:** The verification checks confirm that the state resets to default settings successfully under reference SEL_256.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-256
- **Execution Time:** 0.600s
- **Evidence:** evidence/TC_SEL_256_success.png

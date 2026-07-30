# Test Case: TC_SEL_003

- **Test Case ID:** TC_SEL_003
- **Module:** Authentication
- **Feature:** verify layout rendering for registration email validation using cross-site scripting strings
- **Test Title:** Verify behavior of registration email validation during attempts to verify layout rendering using cross-site scripting strings
- **Objective:** Evaluate that user can safely execute verify layout rendering for registration email validation using cross-site scripting strings under system checks.
- **Requirement ID:** REQ-SEL-003
- **Preconditions:** System state is reset, and target console is directed to registration email validation configuration using cross-site scripting strings (Ref SEL_003).
- **Test Steps:**
1. Target active interface for registration email validation.
2. Trigger action to verify layout rendering using cross-site scripting strings.
3. Collect audit logs and confirm status code validation (Check SEL_003).
- **Test Data:** Target: registration email validation, Action: verify layout rendering, Parameters: using cross-site scripting strings, Case Index: SEL_003
- **Expected Result:** The verification checks confirm that the accessibility indicators remain focused successfully under reference SEL_003.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-003
- **Execution Time:** 0.360s
- **Evidence:** evidence/TC_SEL_003_success.png

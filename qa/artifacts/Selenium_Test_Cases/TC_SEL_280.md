# Test Case: TC_SEL_280

- **Test Case ID:** TC_SEL_280
- **Module:** Onboarding
- **Feature:** check tab indexing for change password input validation with multiple simultaneous submits
- **Test Title:** Verify behavior of change password input validation during attempts to check tab indexing with multiple simultaneous submits
- **Objective:** Evaluate that user can safely execute check tab indexing for change password input validation with multiple simultaneous submits under system checks.
- **Requirement ID:** REQ-SEL-280
- **Preconditions:** System state is reset, and target console is directed to change password input validation configuration with multiple simultaneous submits (Ref SEL_280).
- **Test Steps:**
1. Target active interface for change password input validation.
2. Trigger action to check tab indexing with multiple simultaneous submits.
3. Collect audit logs and confirm status code validation (Check SEL_280).
- **Test Data:** Target: change password input validation, Action: check tab indexing, Parameters: with multiple simultaneous submits, Case Index: SEL_280
- **Expected Result:** The verification checks confirm that the token is renewed seamlessly successfully under reference SEL_280.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-280
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_280_success.png

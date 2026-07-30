# Test Case: TS_SEL_153

- **Test Case ID:** TS_SEL_153
- **Module:** Authentication
- **Feature:** audit keyboard navigation for registration email validation after session token expiration
- **Test Title:** Verify behavior of registration email validation during attempts to audit keyboard navigation after session token expiration
- **Objective:** Evaluate that user can safely execute audit keyboard navigation for registration email validation after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-153
- **Preconditions:** System state is reset, and target console is directed to registration email validation configuration after session token expiration (Ref SEL_153).
- **Test Steps:**
1. Target active interface for registration email validation.
2. Trigger action to audit keyboard navigation after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_153).
- **Test Data:** Target: registration email validation, Action: audit keyboard navigation, Parameters: after session token expiration, Case Index: SEL_153
- **Expected Result:** The verification checks confirm that the form shows inline errors successfully under reference SEL_153.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEL-153
- **Execution Time:** 0.360s
- **Evidence:** evidence/TS_SEL_153_success.png

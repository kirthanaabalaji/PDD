# Test Case: TC_SEL_203

- **Test Case ID:** TC_SEL_203
- **Module:** Authentication
- **Feature:** ensure contrast ratios for registration email validation using invalid credentials
- **Test Title:** Verify behavior of registration email validation during attempts to ensure contrast ratios using invalid credentials
- **Objective:** Evaluate that user can safely execute ensure contrast ratios for registration email validation using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-203
- **Preconditions:** System state is reset, and target console is directed to registration email validation configuration using invalid credentials (Ref SEL_203).
- **Test Steps:**
1. Target active interface for registration email validation.
2. Trigger action to ensure contrast ratios using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_203).
- **Test Data:** Target: registration email validation, Action: ensure contrast ratios, Parameters: using invalid credentials, Case Index: SEL_203
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_203.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-203
- **Execution Time:** 0.360s
- **Evidence:** evidence/TC_SEL_203_success.png

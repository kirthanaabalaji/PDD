# Test Case: TC_SEL_298

- **Test Case ID:** TC_SEL_298
- **Module:** Settings
- **Feature:** validate regex matching for questionnaire submit assessment confirmation using invalid credentials
- **Test Title:** Verify behavior of questionnaire submit assessment confirmation during attempts to validate regex matching using invalid credentials
- **Objective:** Evaluate that user can safely execute validate regex matching for questionnaire submit assessment confirmation using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-298
- **Preconditions:** System state is reset, and target console is directed to questionnaire submit assessment confirmation configuration using invalid credentials (Ref SEL_298).
- **Test Steps:**
1. Target active interface for questionnaire submit assessment confirmation.
2. Trigger action to validate regex matching using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_298).
- **Test Data:** Target: questionnaire submit assessment confirmation, Action: validate regex matching, Parameters: using invalid credentials, Case Index: SEL_298
- **Expected Result:** The verification checks confirm that the server rejects the submission successfully under reference SEL_298.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-298
- **Execution Time:** 0.760s
- **Evidence:** evidence/TC_SEL_298_success.png

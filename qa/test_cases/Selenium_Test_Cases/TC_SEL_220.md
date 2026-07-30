# Test Case: TC_SEL_220

- **Test Case ID:** TC_SEL_220
- **Module:** ClinicalReports
- **Feature:** inspect download stream for pulmonologist appointment booking slot selection for special character strings
- **Test Title:** Verify behavior of pulmonologist appointment booking slot selection during attempts to inspect download stream for special character strings
- **Objective:** Evaluate that user can safely execute inspect download stream for pulmonologist appointment booking slot selection for special character strings under system checks.
- **Requirement ID:** REQ-SEL-220
- **Preconditions:** System state is reset, and target console is directed to pulmonologist appointment booking slot selection configuration for special character strings (Ref SEL_220).
- **Test Steps:**
1. Target active interface for pulmonologist appointment booking slot selection.
2. Trigger action to inspect download stream for special character strings.
3. Collect audit logs and confirm status code validation (Check SEL_220).
- **Test Data:** Target: pulmonologist appointment booking slot selection, Action: inspect download stream, Parameters: for special character strings, Case Index: SEL_220
- **Expected Result:** The verification checks confirm that the client enters offline cached mode successfully under reference SEL_220.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-SEL-220
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_220_success.png

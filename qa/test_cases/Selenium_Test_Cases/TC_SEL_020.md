# Test Case: TC_SEL_020

- **Test Case ID:** TC_SEL_020
- **Module:** ClinicalReports
- **Feature:** audit focus states for pulmonologist appointment booking slot selection after session token expiration
- **Test Title:** Verify behavior of pulmonologist appointment booking slot selection during attempts to audit focus states after session token expiration
- **Objective:** Evaluate that user can safely execute audit focus states for pulmonologist appointment booking slot selection after session token expiration under system checks.
- **Requirement ID:** REQ-SEL-020
- **Preconditions:** System state is reset, and target console is directed to pulmonologist appointment booking slot selection configuration after session token expiration (Ref SEL_020).
- **Test Steps:**
1. Target active interface for pulmonologist appointment booking slot selection.
2. Trigger action to audit focus states after session token expiration.
3. Collect audit logs and confirm status code validation (Check SEL_020).
- **Test Data:** Target: pulmonologist appointment booking slot selection, Action: audit focus states, Parameters: after session token expiration, Case Index: SEL_020
- **Expected Result:** The verification checks confirm that the accessibility indicators remain focused successfully under reference SEL_020.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Critical
- **Traceability:** REQ-SEL-020
- **Execution Time:** 0.120s
- **Evidence:** evidence/TC_SEL_020_success.png

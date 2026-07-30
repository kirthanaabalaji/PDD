# Test Case: TC_APP_178

- **Test Case ID:** TC_APP_178
- **Module:** ClinicalReports
- **Feature:** inspect alarm configuration for pulmonologist contact selector when background execution is suspended
- **Test Title:** Verify behavior of pulmonologist contact selector during attempts to inspect alarm configuration when background execution is suspended
- **Objective:** Evaluate that user can safely execute inspect alarm configuration for pulmonologist contact selector when background execution is suspended under system checks.
- **Requirement ID:** REQ-APP-178
- **Preconditions:** System state is reset, and target console is directed to pulmonologist contact selector configuration when background execution is suspended (Ref APP_178).
- **Test Steps:**
1. Target active interface for pulmonologist contact selector.
2. Trigger action to inspect alarm configuration when background execution is suspended.
3. Collect audit logs and confirm status code validation (Check APP_178).
- **Test Data:** Target: pulmonologist contact selector, Action: inspect alarm configuration, Parameters: when background execution is suspended, Case Index: APP_178
- **Expected Result:** The verification checks confirm that the network requests are queued for retry successfully under reference APP_178.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-178
- **Execution Time:** 2.25s
- **Evidence:** evidence/TC_APP_178_success.png

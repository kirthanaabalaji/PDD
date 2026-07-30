# Test Case: TC_SEL_047

- **Test Case ID:** TC_SEL_047
- **Module:** Onboarding
- **Feature:** measure execution time for image crop zoom controls during api gateway timeout
- **Test Title:** Verify behavior of image crop zoom controls during attempts to measure execution time during api gateway timeout
- **Objective:** Evaluate that user can safely execute measure execution time for image crop zoom controls during api gateway timeout under system checks.
- **Requirement ID:** REQ-SEL-047
- **Preconditions:** System state is reset, and target console is directed to image crop zoom controls configuration during api gateway timeout (Ref SEL_047).
- **Test Steps:**
1. Target active interface for image crop zoom controls.
2. Trigger action to measure execution time during api gateway timeout.
3. Collect audit logs and confirm status code validation (Check SEL_047).
- **Test Data:** Target: image crop zoom controls, Action: measure execution time, Parameters: during api gateway timeout, Case Index: SEL_047
- **Expected Result:** The verification checks confirm that the local storage key is deleted successfully under reference SEL_047.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-SEL-047
- **Execution Time:** 0.680s
- **Evidence:** evidence/TC_SEL_047_success.png

# Test Case: TC_APP_220

- **Test Case ID:** TC_APP_220
- **Module:** Settings
- **Feature:** inspect alarm configuration for cold start initialization duration under poor signal coverage
- **Test Title:** Verify behavior of cold start initialization duration during attempts to inspect alarm configuration under poor signal coverage
- **Objective:** Evaluate that user can safely execute inspect alarm configuration for cold start initialization duration under poor signal coverage under system checks.
- **Requirement ID:** REQ-APP-220
- **Preconditions:** System state is reset, and target console is directed to cold start initialization duration configuration under poor signal coverage (Ref APP_220).
- **Test Steps:**
1. Target active interface for cold start initialization duration.
2. Trigger action to inspect alarm configuration under poor signal coverage.
3. Collect audit logs and confirm status code validation (Check APP_220).
- **Test Data:** Target: cold start initialization duration, Action: inspect alarm configuration, Parameters: under poor signal coverage, Case Index: APP_220
- **Expected Result:** The verification checks confirm that the resource lock is released cleanly successfully under reference APP_220.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Critical
- **Traceability:** REQ-APP-220
- **Execution Time:** 1.50s
- **Evidence:** evidence/TC_APP_220_success.png

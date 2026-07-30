# Test Case: TS_APP_199

- **Test Case ID:** TS_APP_199
- **Module:** Settings
- **Feature:** inspect alarm configuration for terms scroll check modal when database storage quota is exceeded
- **Test Title:** Verify behavior of terms scroll check modal during attempts to inspect alarm configuration when database storage quota is exceeded
- **Objective:** Evaluate that user can safely execute inspect alarm configuration for terms scroll check modal when database storage quota is exceeded under system checks.
- **Requirement ID:** REQ-APP-199
- **Preconditions:** System state is reset, and target console is directed to terms scroll check modal configuration when database storage quota is exceeded (Ref APP_199).
- **Test Steps:**
1. Target active interface for terms scroll check modal.
2. Trigger action to inspect alarm configuration when database storage quota is exceeded.
3. Collect audit logs and confirm status code validation (Check APP_199).
- **Test Data:** Target: terms scroll check modal, Action: inspect alarm configuration, Parameters: when database storage quota is exceeded, Case Index: APP_199
- **Expected Result:** The verification checks confirm that the user is navigated to dashboard successfully under reference APP_199.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-APP-199
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_199_success.png

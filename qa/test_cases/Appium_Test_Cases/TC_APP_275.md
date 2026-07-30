# Test Case: TC_APP_275

- **Test Case ID:** TC_APP_275
- **Module:** Settings
- **Feature:** test network call recovery for doctor call emergency button when database storage quota is exceeded
- **Test Title:** Verify behavior of doctor call emergency button during attempts to test network call recovery when database storage quota is exceeded
- **Objective:** Evaluate that user can safely execute test network call recovery for doctor call emergency button when database storage quota is exceeded under system checks.
- **Requirement ID:** REQ-APP-275
- **Preconditions:** System state is reset, and target console is directed to doctor call emergency button configuration when database storage quota is exceeded (Ref APP_275).
- **Test Steps:**
1. Target active interface for doctor call emergency button.
2. Trigger action to test network call recovery when database storage quota is exceeded.
3. Collect audit logs and confirm status code validation (Check APP_275).
- **Test Data:** Target: doctor call emergency button, Action: test network call recovery, Parameters: when database storage quota is exceeded, Case Index: APP_275
- **Expected Result:** The verification checks confirm that the device releases memory allocations successfully under reference APP_275.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-275
- **Execution Time:** 1.50s
- **Evidence:** evidence/TC_APP_275_success.png

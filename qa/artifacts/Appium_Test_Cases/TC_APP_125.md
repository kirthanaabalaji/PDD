# Test Case: TC_APP_125

- **Test Case ID:** TC_APP_125
- **Module:** Settings
- **Feature:** inspect storage path allocation for doctor call emergency button under poor signal coverage
- **Test Title:** Verify behavior of doctor call emergency button during attempts to inspect storage path allocation under poor signal coverage
- **Objective:** Evaluate that user can safely execute inspect storage path allocation for doctor call emergency button under poor signal coverage under system checks.
- **Requirement ID:** REQ-APP-125
- **Preconditions:** System state is reset, and target console is directed to doctor call emergency button configuration under poor signal coverage (Ref APP_125).
- **Test Steps:**
1. Target active interface for doctor call emergency button.
2. Trigger action to inspect storage path allocation under poor signal coverage.
3. Collect audit logs and confirm status code validation (Check APP_125).
- **Test Data:** Target: doctor call emergency button, Action: inspect storage path allocation, Parameters: under poor signal coverage, Case Index: APP_125
- **Expected Result:** The verification checks confirm that the cached logs are parsed correctly successfully under reference APP_125.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-APP-125
- **Execution Time:** 1.50s
- **Evidence:** evidence/TC_APP_125_success.png

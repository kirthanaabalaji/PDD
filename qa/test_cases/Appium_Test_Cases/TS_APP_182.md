# Test Case: TS_APP_182

- **Test Case ID:** TS_APP_182
- **Module:** SymptomTracking
- **Feature:** execute deep link request for dosage calculator inputs under poor signal coverage
- **Test Title:** Verify behavior of dosage calculator inputs during attempts to execute deep link request under poor signal coverage
- **Objective:** Evaluate that user can safely execute execute deep link request for dosage calculator inputs under poor signal coverage under system checks.
- **Requirement ID:** REQ-APP-182
- **Preconditions:** System state is reset, and target console is directed to dosage calculator inputs configuration under poor signal coverage (Ref APP_182).
- **Test Steps:**
1. Target active interface for dosage calculator inputs.
2. Trigger action to execute deep link request under poor signal coverage.
3. Collect audit logs and confirm status code validation (Check APP_182).
- **Test Data:** Target: dosage calculator inputs, Action: execute deep link request, Parameters: under poor signal coverage, Case Index: APP_182
- **Expected Result:** The verification checks confirm that the user is navigated to dashboard successfully under reference APP_182.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-182
- **Execution Time:** 2.00s
- **Evidence:** evidence/TS_APP_182_success.png

# Test Case: TS_APP_144

- **Test Case ID:** TS_APP_144
- **Module:** Settings
- **Feature:** verify localization override for api connection recovery check under poor signal coverage
- **Test Title:** Verify behavior of api connection recovery check during attempts to verify localization override under poor signal coverage
- **Objective:** Evaluate that user can safely execute verify localization override for api connection recovery check under poor signal coverage under system checks.
- **Requirement ID:** REQ-APP-144
- **Preconditions:** System state is reset, and target console is directed to api connection recovery check configuration under poor signal coverage (Ref APP_144).
- **Test Steps:**
1. Target active interface for api connection recovery check.
2. Trigger action to verify localization override under poor signal coverage.
3. Collect audit logs and confirm status code validation (Check APP_144).
- **Test Data:** Target: api connection recovery check, Action: verify localization override, Parameters: under poor signal coverage, Case Index: APP_144
- **Expected Result:** The verification checks confirm that the network requests are queued for retry successfully under reference APP_144.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Critical
- **Traceability:** REQ-APP-144
- **Execution Time:** 2.50s
- **Evidence:** evidence/TS_APP_144_success.png

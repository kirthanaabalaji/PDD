# Test Case: TC_APP_002

- **Test Case ID:** TC_APP_002
- **Module:** Settings
- **Feature:** test network call recovery for cookie token storage sync during package upgrade install
- **Test Title:** Verify behavior of cookie token storage sync during attempts to test network call recovery during package upgrade install
- **Objective:** Evaluate that user can safely execute test network call recovery for cookie token storage sync during package upgrade install under system checks.
- **Requirement ID:** REQ-APP-002
- **Preconditions:** System state is reset, and target console is directed to cookie token storage sync configuration during package upgrade install (Ref APP_002).
- **Test Steps:**
1. Target active interface for cookie token storage sync.
2. Trigger action to test network call recovery during package upgrade install.
3. Collect audit logs and confirm status code validation (Check APP_002).
- **Test Data:** Target: cookie token storage sync, Action: test network call recovery, Parameters: during package upgrade install, Case Index: APP_002
- **Expected Result:** The verification checks confirm that the toast notification is displayed successfully under reference APP_002.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Minor
- **Traceability:** REQ-APP-002
- **Execution Time:** 2.00s
- **Evidence:** evidence/TC_APP_002_success.png

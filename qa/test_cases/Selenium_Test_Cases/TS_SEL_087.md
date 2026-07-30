# Test Case: TS_SEL_087

- **Test Case ID:** TS_SEL_087
- **Module:** Settings
- **Feature:** verify layout rendering for offline mode status warning banner for special character strings
- **Test Title:** Verify behavior of offline mode status warning banner during attempts to verify layout rendering for special character strings
- **Objective:** Evaluate that user can safely execute verify layout rendering for offline mode status warning banner for special character strings under system checks.
- **Requirement ID:** REQ-SEL-087
- **Preconditions:** System state is reset, and target console is directed to offline mode status warning banner configuration for special character strings (Ref SEL_087).
- **Test Steps:**
1. Target active interface for offline mode status warning banner.
2. Trigger action to verify layout rendering for special character strings.
3. Collect audit logs and confirm status code validation (Check SEL_087).
- **Test Data:** Target: offline mode status warning banner, Action: verify layout rendering, Parameters: for special character strings, Case Index: SEL_087
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_087.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEL-087
- **Execution Time:** 0.680s
- **Evidence:** evidence/TS_SEL_087_success.png

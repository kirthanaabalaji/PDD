# Test Case: TS_SEL_070

- **Test Case ID:** TS_SEL_070
- **Module:** ClinicalReports
- **Feature:** check tab indexing for pulmonologist appointment booking slot selection using invalid credentials
- **Test Title:** Verify behavior of pulmonologist appointment booking slot selection during attempts to check tab indexing using invalid credentials
- **Objective:** Evaluate that user can safely execute check tab indexing for pulmonologist appointment booking slot selection using invalid credentials under system checks.
- **Requirement ID:** REQ-SEL-070
- **Preconditions:** System state is reset, and target console is directed to pulmonologist appointment booking slot selection configuration using invalid credentials (Ref SEL_070).
- **Test Steps:**
1. Target active interface for pulmonologist appointment booking slot selection.
2. Trigger action to check tab indexing using invalid credentials.
3. Collect audit logs and confirm status code validation (Check SEL_070).
- **Test Data:** Target: pulmonologist appointment booking slot selection, Action: check tab indexing, Parameters: using invalid credentials, Case Index: SEL_070
- **Expected Result:** The verification checks confirm that the client retries the API request successfully under reference SEL_070.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEL-070
- **Execution Time:** 0.120s
- **Evidence:** evidence/TS_SEL_070_success.png

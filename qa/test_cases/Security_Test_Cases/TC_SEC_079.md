# Test Case: TC_SEC_079

- **Test Case ID:** TC_SEC_079
- **Module:** AccessControl
- **Feature:** tamper token authorization signature for clinical insights calculations validation for client local cookie storage
- **Test Title:** Verify behavior of clinical insights calculations validation during attempts to tamper token authorization signature for client local cookie storage
- **Objective:** Evaluate that user can safely execute tamper token authorization signature for clinical insights calculations validation for client local cookie storage under system checks.
- **Requirement ID:** REQ-SEC-079
- **Preconditions:** System state is reset, and target console is directed to clinical insights calculations validation configuration for client local cookie storage (Ref SEC_079).
- **Test Steps:**
1. Target active interface for clinical insights calculations validation.
2. Trigger action to tamper token authorization signature for client local cookie storage.
3. Collect audit logs and confirm status code validation (Check SEC_079).
- **Test Data:** Target: clinical insights calculations validation, Action: tamper token authorization signature, Parameters: for client local cookie storage, Case Index: SEC_079
- **Expected Result:** The verification checks confirm that the upload fails with file format error successfully under reference SEC_079.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-079
- **Execution Time:** 0.840s
- **Evidence:** logs/TC_SEC_079_execution.log

# Test Case: TC_SEC_058

- **Test Case ID:** TC_SEC_058
- **Module:** AccessControl
- **Feature:** tamper token authorization signature for dependency packages security vulnerability scan using a different user database index
- **Test Title:** Verify behavior of dependency packages security vulnerability scan during attempts to tamper token authorization signature using a different user database index
- **Objective:** Evaluate that user can safely execute tamper token authorization signature for dependency packages security vulnerability scan using a different user database index under system checks.
- **Requirement ID:** REQ-SEC-058
- **Preconditions:** System state is reset, and target console is directed to dependency packages security vulnerability scan configuration using a different user database index (Ref SEC_058).
- **Test Steps:**
1. Target active interface for dependency packages security vulnerability scan.
2. Trigger action to tamper token authorization signature using a different user database index.
3. Collect audit logs and confirm status code validation (Check SEC_058).
- **Test Data:** Target: dependency packages security vulnerability scan, Action: tamper token authorization signature, Parameters: using a different user database index, Case Index: SEC_058
- **Expected Result:** The verification checks confirm that the relative path escape fails to load successfully under reference SEC_058.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-058
- **Execution Time:** 0.760s
- **Evidence:** logs/TC_SEC_058_execution.log

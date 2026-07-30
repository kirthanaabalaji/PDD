# Test Case: TC_SEC_099

- **Test Case ID:** TC_SEC_099
- **Module:** AccessControl
- **Feature:** test token generation logic for broken session handling invalidator using external URL domains
- **Test Title:** Verify behavior of broken session handling invalidator during attempts to test token generation logic using external URL domains
- **Objective:** Evaluate that user can safely execute test token generation logic for broken session handling invalidator using external URL domains under system checks.
- **Requirement ID:** REQ-SEC-099
- **Preconditions:** System state is reset, and target console is directed to broken session handling invalidator configuration using external URL domains (Ref SEC_099).
- **Test Steps:**
1. Target active interface for broken session handling invalidator.
2. Trigger action to test token generation logic using external URL domains.
3. Collect audit logs and confirm status code validation (Check SEC_099).
- **Test Data:** Target: broken session handling invalidator, Action: test token generation logic, Parameters: using external URL domains, Case Index: SEC_099
- **Expected Result:** The verification checks confirm that the request is blocked by payload validator successfully under reference SEC_099.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-099
- **Execution Time:** 0.840s
- **Evidence:** logs/TC_SEC_099_execution.log

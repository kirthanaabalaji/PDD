# Test Case: TC_SEC_015

- **Test Case ID:** TC_SEC_015
- **Module:** IDOR
- **Feature:** test token generation logic for IDOR checks on daily symptoms logs during server internal log dumping
- **Test Title:** Verify behavior of IDOR checks on daily symptoms logs during attempts to test token generation logic during server internal log dumping
- **Objective:** Evaluate that user can safely execute test token generation logic for IDOR checks on daily symptoms logs during server internal log dumping under system checks.
- **Requirement ID:** REQ-SEC-015
- **Preconditions:** System state is reset, and target console is directed to IDOR checks on daily symptoms logs configuration during server internal log dumping (Ref SEC_015).
- **Test Steps:**
1. Target active interface for IDOR checks on daily symptoms logs.
2. Trigger action to test token generation logic during server internal log dumping.
3. Collect audit logs and confirm status code validation (Check SEC_015).
- **Test Data:** Target: IDOR checks on daily symptoms logs, Action: test token generation logic, Parameters: during server internal log dumping, Case Index: SEC_015
- **Expected Result:** The verification checks confirm that the backend blocks terminal execution successfully under reference SEC_015.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Minor
- **Traceability:** REQ-SEC-015
- **Execution Time:** 0.520s
- **Evidence:** logs/TC_SEC_015_execution.log

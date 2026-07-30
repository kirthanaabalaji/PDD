# Test Case: TC_SEC_105

- **Test Case ID:** TC_SEC_105
- **Module:** AccessControl
- **Feature:** test SQL injection bypass for MongoDB Atlas network IP access list with array parameter pollution payloads
- **Test Title:** Verify behavior of MongoDB Atlas network IP access list during attempts to test SQL injection bypass with array parameter pollution payloads
- **Objective:** Evaluate that user can safely execute test SQL injection bypass for MongoDB Atlas network IP access list with array parameter pollution payloads under system checks.
- **Requirement ID:** REQ-SEC-105
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas network IP access list configuration with array parameter pollution payloads (Ref SEC_105).
- **Test Steps:**
1. Target active interface for MongoDB Atlas network IP access list.
2. Trigger action to test SQL injection bypass with array parameter pollution payloads.
3. Collect audit logs and confirm status code validation (Check SEC_105).
- **Test Data:** Target: MongoDB Atlas network IP access list, Action: test SQL injection bypass, Parameters: with array parameter pollution payloads, Case Index: SEC_105
- **Expected Result:** The verification checks confirm that the authentication rate limiter blocks IP successfully under reference SEC_105.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** High
- **Severity:** Major
- **Traceability:** REQ-SEC-105
- **Execution Time:** 0.520s
- **Evidence:** logs/TC_SEC_105_execution.log

# Test Case: TS_SEC_091

- **Test Case ID:** TS_SEC_091
- **Module:** AccessControl
- **Feature:** check traversal directory access for log logger system credentials during server internal log dumping
- **Test Title:** Verify behavior of log logger system credentials during attempts to check traversal directory access during server internal log dumping
- **Objective:** Evaluate that user can safely execute check traversal directory access for log logger system credentials during server internal log dumping under system checks.
- **Requirement ID:** REQ-SEC-091
- **Preconditions:** System state is reset, and target console is directed to log logger system credentials configuration during server internal log dumping (Ref SEC_091).
- **Test Steps:**
1. Target active interface for log logger system credentials.
2. Trigger action to check traversal directory access during server internal log dumping.
3. Collect audit logs and confirm status code validation (Check SEC_091).
- **Test Data:** Target: log logger system credentials, Action: check traversal directory access, Parameters: during server internal log dumping, Case Index: SEC_091
- **Expected Result:** The verification checks confirm that the user is kept on original origin domain successfully under reference SEC_091.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-SEC-091
- **Execution Time:** 0.200s
- **Evidence:** logs/TS_SEC_091_execution.log

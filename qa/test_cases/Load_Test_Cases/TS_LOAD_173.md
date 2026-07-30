# Test Case: TS_LOAD_173

- **Test Case ID:** TS_LOAD_173
- **Module:** Database
- **Feature:** test failover routing times for Multer payload size validator with large audio attachment uploads
- **Test Title:** Verify behavior of Multer payload size validator during attempts to test failover routing times with large audio attachment uploads
- **Objective:** Evaluate that user can safely execute test failover routing times for Multer payload size validator with large audio attachment uploads under system checks.
- **Requirement ID:** REQ-LOAD-173
- **Preconditions:** System state is reset, and target console is directed to Multer payload size validator configuration with large audio attachment uploads (Ref LOAD_173).
- **Test Steps:**
1. Target active interface for Multer payload size validator.
2. Trigger action to test failover routing times with large audio attachment uploads.
3. Collect audit logs and confirm status code validation (Check LOAD_173).
- **Test Data:** Target: Multer payload size validator, Action: test failover routing times, Parameters: with large audio attachment uploads, Case Index: LOAD_173
- **Expected Result:** The verification checks confirm that the request queue does not overflow backlog successfully under reference LOAD_173.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Low
- **Severity:** Major
- **Traceability:** REQ-LOAD-173
- **Execution Time:** 8.1s
- **Evidence:** logs/TS_LOAD_173_execution.log

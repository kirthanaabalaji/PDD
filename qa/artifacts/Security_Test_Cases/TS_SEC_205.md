# Test Case: TS_SEC_205

- **Test Case ID:** TS_SEC_205
- **Module:** AccessControl
- **Feature:** tamper token authorization signature for MongoDB Atlas network IP access list during server internal log dumping
- **Test Title:** Verify behavior of MongoDB Atlas network IP access list during attempts to tamper token authorization signature during server internal log dumping
- **Objective:** Evaluate that user can safely execute tamper token authorization signature for MongoDB Atlas network IP access list during server internal log dumping under system checks.
- **Requirement ID:** REQ-SEC-205
- **Preconditions:** System state is reset, and target console is directed to MongoDB Atlas network IP access list configuration during server internal log dumping (Ref SEC_205).
- **Test Steps:**
1. Target active interface for MongoDB Atlas network IP access list.
2. Trigger action to tamper token authorization signature during server internal log dumping.
3. Collect audit logs and confirm status code validation (Check SEC_205).
- **Test Data:** Target: MongoDB Atlas network IP access list, Action: tamper token authorization signature, Parameters: during server internal log dumping, Case Index: SEC_205
- **Expected Result:** The verification checks confirm that the system rejects the tampered token successfully under reference SEC_205.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Major
- **Traceability:** REQ-SEC-205
- **Execution Time:** 0.520s
- **Evidence:** logs/TS_SEC_205_execution.log

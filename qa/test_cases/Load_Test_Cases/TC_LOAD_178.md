# Test Case: TC_LOAD_178

- **Test Case ID:** TC_LOAD_178
- **Module:** Database
- **Feature:** inspect memory allocation limits for MongoDB user deletion cascade with 2000 concurrent virtual users
- **Test Title:** Verify behavior of MongoDB user deletion cascade during attempts to inspect memory allocation limits with 2000 concurrent virtual users
- **Objective:** Evaluate that user can safely execute inspect memory allocation limits for MongoDB user deletion cascade with 2000 concurrent virtual users under system checks.
- **Requirement ID:** REQ-LOAD-178
- **Preconditions:** System state is reset, and target console is directed to MongoDB user deletion cascade configuration with 2000 concurrent virtual users (Ref LOAD_178).
- **Test Steps:**
1. Target active interface for MongoDB user deletion cascade.
2. Trigger action to inspect memory allocation limits with 2000 concurrent virtual users.
3. Collect audit logs and confirm status code validation (Check LOAD_178).
- **Test Data:** Target: MongoDB user deletion cascade, Action: inspect memory allocation limits, Parameters: with 2000 concurrent virtual users, Case Index: LOAD_178
- **Expected Result:** The verification checks confirm that the downstream calls queue up safely successfully under reference LOAD_178.
- **Actual Result:** Passed: Execution validates expected behavior.
- **Execution Status:** Passed
- **Priority:** Medium
- **Severity:** Minor
- **Traceability:** REQ-LOAD-178
- **Execution Time:** 14.1s
- **Evidence:** logs/TC_LOAD_178_execution.log
